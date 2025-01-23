// Global variables
let img = null;
let cropWidth, cropHeight, cropX, cropY;
let ctx = null;
const canvasContainer = document.querySelector('.canvas-container');
const canvas = document.getElementById('canvas');
const deleteBtn = document.querySelector('.delete');
const dropArea = document.querySelector('.drop-area');
const formContainer = document.querySelector('.form-container');
const fileInput = document.querySelector('.file-element');
const fileSelect = document.querySelector('.file-select');
const imgPreview = document.getElementById('buildingLogoPreview');
// * Declare variables for image and cropping functionality
let isDragging = false;
let isResizing = false;
let startX, startY;
let resizeDirection = '';
const handleSize = 10; // Size of the resize handles

// Function to return the current image
function getImg() {
    return img; // Returns the current image object
}
    // Function to draw image to be saved on new canvas
    function drawSavedImage() {

    if (!img) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return null;
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

// Delete image logic
deleteBtn.addEventListener('click', () => {
    try {
        deleteBtn.classList.add('hidden');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        formContainer.classList.remove('hidden');
        img = undefined;
        cropX = cropY = cropWidth = cropHeight = 0;
        console.log("Image deleted.");
    } catch (error) {
        console.error("Error during image deletion:", error.message);
        alert("An error occurred while deleting the image. Please try again.");
    }
    });
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
module.exports = {
    drawSavedImage,
    previewFile,
    getImg, // Export the getImg function
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        initializeDragAndDrop();
    } catch (error) {
        console.error("Initialization error:", error.message);
        alert("An error occurred while initializing the drag-and-drop functionality. Please reload the page.");
    }
});

function initializeDragAndDrop() {

    localStorage.setItem('editFlag', 'c');

    // Expose handleFiles globally
    window.handleFiles = handleFiles;

    console.log("Drag-n-Drop Executed");

    // Check required elements and report missing ones
    const requiredElements = [
        { element: dropArea, name: "Drop Area (.drop-area)" },
        { element: formContainer, name: "Form Container (.form-container)" },
        { element: fileInput, name: "File Input (.file-element)" },
        { element: fileSelect, name: "File Select (.file-select)" },
        { element: deleteBtn, name: "Delete Button (.delete)" },
        { element: canvasContainer, name: "Canvas Container (.canvas-container)" },
        { element: canvas, name: "Canvas (#canvas)" },
    ];

    const missingElements = requiredElements.filter(item => !item.element);
    if (missingElements.length > 0) {
        const missingNames = missingElements.map(item => item.name).join(", ");
        throw new Error(`Missing required DOM elements: ${missingNames}`);
    }

    // Initialize the canvas if it exists
    if (canvas) {
        ctx = canvas.getContext('2d');
        if (!ctx) {
            throw new Error("Failed to get 2D context from canvas.");
        }
    } else {
        console.warn("Canvas element is not present in the DOM. Skipping canvas setup.");
    }
    // Load the preview image if it exists
    if (imgPreview) {
        img = new Image();
        img.src = imgPreview.src;

        img.onload = () => {
            try {
                // Set up the canvas
                canvas.id = 'canvas';
                canvas.classList.add('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
    
                // Replace the <img> with the canvas
                canvasContainer.replaceChild(canvas, imgPreview);
    
                // Draw the image on the canvas
                ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
                // Initialize cropping functionality
                initializeCrop(canvas, ctx, img);
            } catch (error) {
                console.error("Error loading image:", error.message);
                alert("Failed to load the image. Please try again.");
            }
        };
        img.onerror = () => {
            console.error("Image failed to load:");
            alert("The image could not be loaded. Please check the file format.");
        };
    } else if (canvas) {
        // If no image exists, ensure the canvas is set up
        ctx = canvas.getContext('2d');
    }
    
    // Set up drag-and-drop events
    if (dropArea) {
        // Prevent default browser behavior for drag and drop
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false);
        });
        // Highlight drop area when file is dragged over
        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => dropArea.classList.add('highlight'), false);
        });
        // Remove highlight when file is dragged away or dropped
        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, () => dropArea.classList.remove('highlight'), false);
        });
        // Handle drag and dropped files (uses Drag and Drop API)
        dropArea.addEventListener('drop', (e) => {
            try {
                const dt = e.dataTransfer;
                const files = dt.files;
                handleFiles(files);
            } catch (error) {
                console.error("Error handling file drop:", error.message);
                alert("An error occurred while handling the dropped files. Please try again.");
            }
        });
    }

    // File selection logic
    if (fileSelect) {
        fileSelect.addEventListener('click', () => {
            fileInput.click();
        });
    }

    // File input change event
    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            const files = e.target.files;
            if (files.length) handleFiles(files);
        });
    }

    // Mouse move event for resizing or dragging
    canvas.addEventListener('mousemove', function (e) {
        try {
            // const mouseX = e.offsetX;
            // const mouseY = e.offsetY;

            // if (isResizing) {
            //     resizeCropBox(mouseX, mouseY);
            //     drawCanvas();
            //     return;
            // }

            // if (isDragging) {
            //     cropX = e.offsetX - startX;
            //     cropY = e.offsetY - startY;
            //     cropX = Math.max(0, Math.min(cropX, canvas.width - cropWidth));
            //     cropY = Math.max(0, Math.min(cropY, canvas.height - cropHeight));
            //     drawCanvas();
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
        } catch (error) {
            console.error("Error in mousemove event:", error.message);
        }
    });

    // Mouse down event: Start dragging or resizing
    canvas.addEventListener('mousedown', function (e) {
        try {
            const mouseX = e.offsetX;
            const mouseY = e.offsetY;

            if (resizeDirection) {
                isResizing = true;
            } else if (mouseX > cropX && mouseX < cropX + cropWidth && mouseY > cropY && mouseY < cropY + cropHeight) {
                isDragging = true;
                startX = mouseX - cropX;
                startY = mouseY - cropY;
            }
        } catch (error) {
            console.error("Error in mousedown event:", error.message);
            alert("An error occurred while starting the interaction. Please try again.");
        }
    });

    // Mouse up event: Stop dragging or resizing
    canvas.addEventListener('mouseup', function () {
        try {
            isDragging = false;
            isResizing = false;
            canvas.style.cursor = 'default';
            resizeDirection = '';
        } catch (error) {
            console.error("Error in mouseup event:", error.message);
            alert("An error occurred while ending the interaction. Please try again.");
        }
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
}
