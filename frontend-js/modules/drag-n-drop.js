// let dropArea = document.getElementById('drop-area');
let dropArea = document.getElementsByClassName('drop-area')[0];
let formContainer = document.getElementsByClassName('form-container')[0];
let fileInput = document.getElementById('fileElem');
const fileSelect = document.getElementById('fileSelect');
const fileElem = document.getElementById('fileElem');
// const uploadForm = document.querySelector('.upload-form');
// let saveImage = document.getElementById('save-image');
// let saveImage = document.querySelectorAll('.save-img-btn');
let deleteBtn = document.getElementsByClassName('delete')[0];
let img;
let cropWidth;
// Get the canvas element and its context
const canvasContainer = document.querySelector('.canvas-container');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set initial crop box dimensions
let isDragging = false;
let cropX, cropY; // X and Y positions of the crop box
let startX, startY; // Starting mouse coordinates for dragging
let isResizing = false; // Flag to track if resizing is active
let resizeDirection = ''; // Track the direction of resize (e.g., 'right', 'bottom', etc.)
const handleSize = 10; // Size of the resize handles

localStorage.setItem('editFlag', 'c');

// Expose handleFiles globally
window.handleFiles = handleFiles;

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

// Make sure this is an image file (file type) and if valid show inside div/hide form
function handleFiles(files) {
    let file = files[0];
    if (file && file.type.startsWith('image/')) {
        if (file.type === 'image/svg+xml') {
            fixSvgDim(file);
        }
        previewFile(file); // Use your existing logic for other image types
    } else {
        alert('Please upload a valid image file.');
        fileInput.value = ''; // Reset the input so the user can try again
    }
}

function fixSvgDim(file) {
    const reader = new FileReader();

    reader.onload = function (event) {
        const svgText = event.target.result;

        // Parse the SVG as an XML document
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
        const svgElement = svgDoc.documentElement;

        // Check if the width attribute is missing
        if (!svgElement.hasAttribute("width")) {
            const viewBox = svgElement.getAttribute("viewBox");

            if (viewBox) {
                // Extract the width from the viewBox (e.g., "0 0 512 512")
                const viewBoxValues = viewBox.split(" ").map(Number);

                if (viewBoxValues.length === 4) {
                    const [, , viewBoxWidth] = viewBoxValues;

                    // Set the width attribute using the viewBox width
                    svgElement.setAttribute("width", `${viewBoxWidth}px`);
                } else {
                    console.error("Invalid viewBox format.");
                }
            } else {
                console.error("SVG is missing both width and viewBox attributes.");
            }
        }

        // Serialize the modified SVG back to a string
        const serializer = new XMLSerializer();
        const modifiedSvg = serializer.serializeToString(svgElement);

        // Create a new Blob and URL
        const blob = new Blob([modifiedSvg], { type: "image/svg+xml" });

        // Create a new File object with the updated Blob
        const updatedFile = new File([blob], file.name, { type: file.type });

        // Pass the updatedFile to further processing (e.g., preview or other functions)
        previewFile(updatedFile);
    };

    reader.onerror = function (error) {
        console.error("Error reading the file:", error);
    };

    // Read the SVG file as text
    reader.readAsText(file);
}


function previewFile(file) {

    deleteBtn.classList.remove('hidden');
    canvasContainer.classList.remove('hidden');
    formContainer.classList.add('hidden');
    console.log("File =", file);

    img = new Image();
    img.src = URL.createObjectURL(file);

    console.log("img.src = ", img.src);

    img.onload = function () {
        const originalAspectRatio = img.width / img.height;

        // Get the container's width
        const containerWidth = canvasContainer.offsetWidth;

        // Set canvas dimensions based on container width while maintaining aspect ratio
        let canvasWidth = containerWidth;
        let canvasHeight = canvasWidth / originalAspectRatio;

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        // Center the crop box
        cropWidth = canvasWidth
        cropHeight = (cropWidth / originalAspectRatio); // Keep aspect ratio
        cropX = (canvas.width - cropWidth) / 2;
        cropY = (canvas.height - cropHeight) / 2;

        // Draw image and crop box
        drawCanvas();
    };
}

function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the image
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Draw overlay and crop box
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    ctx.fillRect(0, 0, canvas.width, cropY);
    ctx.fillRect(0, cropY + cropHeight, canvas.width, canvas.height - cropY - cropHeight);
    ctx.fillRect(0, cropY, cropX, cropHeight);
    ctx.fillRect(cropX + cropWidth, cropY, canvas.width - cropX - cropWidth, cropHeight);

    // Draw the crop box outline
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 2;
    ctx.strokeRect(cropX, cropY, cropWidth, cropHeight);

    // Draw resize handles
    ctx.fillStyle = '#ff0000'; // Red color for handles
    drawHandle(cropX, cropY); // Top-left
    drawHandle(cropX + cropWidth, cropY); // Top-right
    drawHandle(cropX, cropY + cropHeight); // Bottom-left
    drawHandle(cropX + cropWidth, cropY + cropHeight); // Bottom-right
}

function drawHandle(x, y) {
    ctx.fillRect(x - handleSize / 2, y - handleSize / 2, handleSize, handleSize);
}

// Function to resize the crop box
function resizeCropBox(mouseX, mouseY) {
    if (resizeDirection === 'top-left') {
        cropWidth += cropX - mouseX;
        cropHeight += cropY - mouseY;
        cropX = mouseX;
        cropY = mouseY;
    } else if (resizeDirection === 'top-right') {
        cropWidth = mouseX - cropX;
        cropHeight += cropY - mouseY;
        cropY = mouseY;
    } else if (resizeDirection === 'bottom-left') {
        cropWidth += cropX - mouseX;
        cropX = mouseX;
        cropHeight = mouseY - cropY;
    } else if (resizeDirection === 'bottom-right') {
        cropWidth = mouseX - cropX;
        cropHeight = mouseY - cropY;
    }

    // Ensure the crop box doesn't shrink below a minimum size
    cropWidth = Math.max(handleSize, cropWidth);
    cropHeight = Math.max(handleSize, cropHeight);
}

// Function to draw image to be saved on new canvas
function drawSavedImage() {

    if (!img) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return
    }
    // Create a new canvas to draw the cropped portion of the image (without the outline or overlay)
    const croppedCanvas = document.createElement('canvas');
    const croppedCtx = croppedCanvas.getContext('2d');

    // Set the size of the new canvas to the crop box size
    croppedCanvas.width = cropWidth;
    croppedCanvas.height = cropHeight;

    // Calculate the scaling ratio between the original image and canvas
    const scaleX = img.width / canvas.width;
    const scaleY = img.height / canvas.height;

    // Calculate the exact position and size of the crop area from the original image
    const sourceX = cropX * scaleX;
    const sourceY = cropY * scaleY;
    const sourceWidth = cropWidth * scaleX;
    const sourceHeight = cropHeight * scaleY;

    // Draw the cropped portion of the original image onto the new canvas
    croppedCtx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, cropWidth, cropHeight);

    return croppedCanvas;
}

// Prevent default browser behavior for drag and drop
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
});
// Highlight drop area when file is dragged over
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => {
        console.log("entered drop-area");
        dropArea.classList.add('highlight');
    }, false);
});

// Remove highlight when file is dragged away or dropped
['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, () => {
        dropArea.classList.remove('highlight');
    }, false);
});

// Handle drag and dropped files (uses Drag and Drop API)
dropArea.addEventListener('drop', (e) => {
    let dt = e.dataTransfer;
    let files = dt.files;
    handleFiles(files);
}, false);

// Fallback to file input
document.getElementById('fileSelect').onclick = function () {
    console.log("File Select");
    fileInput.click();
};

// Detect if the mouse is near an edge or corner for resizing
canvas.addEventListener('mousemove', function (e) {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    if (isResizing) {
        resizeCropBox(mouseX, mouseY);
        drawCanvas();
        return;
    }

    // Check if inside the crop box (change to grab cursor)
    if (mouseX > cropX && mouseX < cropX + cropWidth && mouseY > cropY && mouseY < cropY + cropHeight) {
        canvas.style.cursor = 'grab'; // Change cursor to grab inside the crop box

    } else {
        canvas.style.cursor = 'default'; // Reset cursor outside the crop box
    }

    // Check if near any of the crop box edges or corners
    if (mouseX > cropX - handleSize && mouseX < cropX + handleSize &&
        mouseY > cropY - handleSize && mouseY < cropY + handleSize) {
        // Top-left corner
        canvas.style.cursor = 'nwse-resize';
        resizeDirection = 'top-left';
    } else if (mouseX > cropX + cropWidth - handleSize && mouseX < cropX + cropWidth + handleSize &&
               mouseY > cropY - handleSize && mouseY < cropY + handleSize) {
        // Top-right corner
        canvas.style.cursor = 'nesw-resize';
        resizeDirection = 'top-right';
    } else if (mouseX > cropX - handleSize && mouseX < cropX + handleSize &&
               mouseY > cropY + cropHeight - handleSize && mouseY < cropY + cropHeight + handleSize) {
        // Bottom-left corner
        canvas.style.cursor = 'nesw-resize';
        resizeDirection = 'bottom-left';
    } else if (mouseX > cropX + cropWidth - handleSize && mouseX < cropX + cropWidth + handleSize &&
               mouseY > cropY + cropHeight - handleSize && mouseY < cropY + cropHeight + handleSize) {
        // Bottom-right corner
        canvas.style.cursor = 'nwse-resize';
        resizeDirection = 'bottom-right';
    } else {
        resizeDirection = '';
    }

    // Handle dragging logic if isDragging is true
    if (isDragging) {
        cropX = e.offsetX - startX;
        cropY = e.offsetY - startY;

        // Prevent the crop box from going out of bounds
        cropX = Math.max(0, Math.min(cropX, canvas.width - cropWidth));
        cropY = Math.max(0, Math.min(cropY, canvas.height - cropHeight));

        drawCanvas();
    }
});

// Mouse down event: Start dragging or resizing
canvas.addEventListener('mousedown', function (e) {
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;

    if (resizeDirection) {
        isResizing = true;
    } else if (mouseX > cropX && mouseX < cropX + cropWidth && mouseY > cropY && mouseY < cropY + cropHeight) {
        isDragging = true;
        startX = mouseX - cropX;
        startY = mouseY - cropY;
    }
});

// Mouse up event: Stop dragging or resizing
canvas.addEventListener('mouseup', function () {
    isDragging = false;
    isResizing = false;
    canvas.style.cursor = 'default';
    resizeDirection = '';
});

// Delete event: Clear preview image, set image to undefined, and hide delete button
deleteBtn.addEventListener('click', function () {
    deleteBtn.classList.add('hidden');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    formContainer.classList.remove('hidden');
    img = undefined;
    console.log("Image ", img);
});

module.exports = {
    drawSavedImage,
    previewFile,
    getImg: () => img, // Getter function for img
};