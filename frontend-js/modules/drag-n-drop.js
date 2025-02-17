/*
 * This module implements comprehensive image uploading, previewing, cropping, and drag-and-drop functionality.
 *
 * Key Features:
 *  - Global State Management:
 *      • Maintains global variables for the current image, canvas context, cropping parameters (cropX, cropY, 
 *          cropWidth, cropHeight),
 *        and flags to track dragging/resizing states.
 *
 *  - Image Loading & Preview:
 *      • The previewFile() function loads an image file (via drag-and-drop or file selection), creates an Image 
 *          object,
 *        and sets up the canvas dimensions based on the container’s width while maintaining the aspect ratio.
 *      • If the image is an SVG lacking width, fixSvgDim() adjusts its dimensions using the viewBox attribute.
 *
 *  - Cropping Functionality:
 *      • drawCanvas() renders the image on the canvas, overlays a semi-transparent mask outside the crop area,
 *        draws the cropping box outline, and adds resize handles.
 *      • resizeCropBox() adjusts the crop box dimensions and position based on mouse interactions.
 *      • drawSavedImage() creates a new canvas containing only the cropped portion of the image (scaled 
 *          appropriately)
 *        for saving or further processing.
 *
 *  - User Interaction & Event Handling:
 *      • Sets up drag-and-drop (and file selection) event listeners for image upload.
 *      • Enables interactive cropping through mouse events (mousemove, mousedown, mouseup) to support dragging
 *        the crop box and resizing via its handles.
 *      • Provides a delete functionality that clears the canvas and resets cropping parameters when the delete 
 *          button is clicked.
 *
 *  - Initialization:
 *      • The initializeDragAndDrop() function (invoked on DOMContentLoaded) verifies the existence of required DOM 
 *          elements, initializes the canvas and context, sets up drag-and-drop events, and prepares the UI 
 *          for image interactions.
 *      • Also sets a localStorage flag ('editFlag' = 'c') to indicate the current mode.
 *
 *  - Exports:
 *      • drawSavedImage – Returns a new canvas element with the cropped image.
 *      • previewFile – Loads and previews the selected image file.
 *      • getImg – Returns the current image object.
 *
 *  - Error Handling & Debugging:
 *      • Uses try-catch blocks and console logging to handle and report errors during file processing, image 
 *          loading,
 *        and user interactions.
 *      • Alerts the user when critical errors occur (e.g., failed image loading, missing DOM elements).
 */

// Global variables
let debugCounter = 0;
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
let dragAndDropInitialized = false;

// Returns the current image object stored in the global variable 'img'.
function getImg() {
    return img; // Returns the current image object
}
/*
 * drawSavedImage()
 *
 * This function creates and returns a new canvas element containing only the cropped portion of the current image.
 *
 * Workflow:
 *  - If no image is loaded (img is undefined or null), the function clears the existing canvas and returns null.
 *  - Otherwise, it creates a new canvas and sets its dimensions to match the cropping box (cropWidth x cropHeight).
 *  - It calculates the scaling factors between the original image and the current canvas.
 *  - Determines the exact source coordinates and dimensions on the original image based on the crop box position 
 *      and scale.
 *  - Draws the cropped section from the original image onto the new canvas.
 *  - Returns the new canvas containing the cropped image.
 */
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

/*
 * previewFile(file):
 *  - Unhides the delete button and canvas container while hiding the form container.
 *  - Creates a new Image object and sets its source to a temporary URL for the provided file.
 *  - Once the image loads:
 *      • Calculates the image's original aspect ratio.
 *      • Sets the canvas dimensions based on the container's width while preserving the aspect ratio.
 *      • Centers the crop box on the canvas by computing cropWidth, cropHeight, cropX, and cropY.
 *      • Calls drawCanvas() to render the image and the cropping overlay on the canvas.
 */
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
/*
 * handleFiles(files)
 *
 * This function processes a list of files (typically from a file input or drag-and-drop):
 *  - It selects the first file from the provided list.
 *  - If the file exists and its MIME type starts with "image/", it checks if the file is an SVG.
 *      • For SVG files, it calls fixSvgDim(file) to adjust the SVG dimensions if needed.
 *      • For other image types, it calls previewFile(file) to display the image preview and initialize cropping.
 *  - If the file is not a valid image, it alerts the user and resets the file input for another attempt.
 */
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
/*
 * drawCanvas()
 *
 * This function redraws the canvas with the current image and cropping overlay:
 *  - Clears the canvas.
 *  - Draws the image scaled to the canvas dimensions.
 *  - Renders a semi-transparent overlay outside the defined crop area using multiple fillRect calls.
 *  - Outlines the crop area with a red rectangle.
 *  - Draws red resize handles at each corner of the crop box for interactive adjustments.
 */
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
/*
 * fixSvgDim(file)
 *
 * This function adjusts the dimensions of an SVG file if its "width" attribute is missing.
 *
 * Workflow:
 *  - Reads the SVG file as text using a FileReader.
 *  - Parses the text into an XML document to access the SVG element.
 *  - Checks if the "width" attribute is absent:
 *      • If missing, attempts to retrieve the "viewBox" attribute.
 *      • Extracts the width from the viewBox (assuming the format "min-x min-y width height").
 *      • Sets the "width" attribute on the SVG element using the extracted value.
 *  - Serializes the modified SVG back into a string.
 *  - Creates a new Blob and then a new File object with the updated SVG content.
 *  - Calls previewFile(updatedFile) to proceed with displaying the image.
 *
 * Error Handling:
 *  - Logs errors to the console if the viewBox format is invalid or missing.
 *  - Handles file reading errors via reader.onerror.
 */
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
/*
 * drawHandle(x, y)
 *
 * Draws a square (resize handle) centered at the given (x, y) coordinates on the canvas.
 * The size of the square is defined by the global variable 'handleSize'.
 */
function drawHandle(x, y) {
    ctx.fillRect(x - handleSize / 2, y - handleSize / 2, handleSize, handleSize);
}

/*
 * resizeCropBox(mouseX, mouseY)
 *
 * Adjusts the cropping box dimensions and position based on the mouse coordinates and the active resize direction.
 *
 * For each resize direction:
 *  - 'top-left':
 *      • Increases the crop box size by the difference between the current crop position and the mouse position.
 *      • Moves the top-left corner of the crop box to the mouse coordinates.
 *
 *  - 'top-right':
 *      • Sets the crop box width as the distance from the crop's left edge to the mouse position.
 *      • Increases the crop box height based on the vertical difference, and moves the top edge to the mouse's \
 *          y-coordinate.
 *
 *  - 'bottom-left':
 *      • Increases the crop box width based on the horizontal difference, and moves the left edge to the mouse's 
 *          x-coordinate.
 *      • Sets the crop box height as the distance from the crop's top edge to the mouse position.
 *
 *  - 'bottom-right':
 *      • Sets both the crop box width and height as the differences between the mouse position and the crop's 
 *          origin.
 *
 * Finally, it ensures the crop box does not shrink below a minimum size defined by 'handleSize'.
 */
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
export {
    drawSavedImage,
    previewFile,
    getImg,
}
/*
 * initializeDragAndDrop()
 *
 * This function sets up the drag-and-drop and file selection functionality for the image upload
 * and cropping interface. It performs the following tasks:
 *
 * 1. Initialization:
 *    - Checks if drag-and-drop has already been initialized to prevent duplicate setups.
 *    - Sets a localStorage flag ('editFlag' = 'c') and exposes the handleFiles function globally.
 *
 * 2. DOM Element Verification:
 *    - Verifies that all required elements (drop area, form container, file input/select, delete button,
 *      and canvas container) are present.
 *    - Throws an error if any required element is missing.
 *
 * 3. Canvas Setup:
 *    - If a canvas exists, obtains its 2D context.
 *    - If an image preview (imgPreview) exists, it creates a new image from it, replaces the preview with the 
 *      canvas, sets the canvas dimensions to match the image, draws the image, and initializes cropping 
 *      functionality.
 *
 * 4. Drag-and-Drop Event Handling:
 *    - Prevents default browser behavior for drag events on the drop area.
 *    - Adds highlight effects when files are dragged over the drop area and removes them when dragged away or 
 *      dropped.
 *    - Processes dropped files by calling handleFiles with the files obtained from the DataTransfer object.
 *
 * 5. File Selection:
 *    - Sets up a click event on the file select element to trigger the file input.
 *    - Listens for changes on the file input and calls handleFiles when files are selected.
 *
 * 6. Canvas Mouse Interaction for Cropping:
 *    - Attaches mousemove, mousedown, and mouseup event listeners on the canvas to handle:
 *         • Resizing the crop box (with appropriate cursor changes when near the crop box edges or corners).
 *         • Dragging the crop box within canvas boundaries.
 *    - Updates the crop box display by calling drawCanvas() during these interactions.
 *
 * 7. Error Handling:
 *    - Uses try-catch blocks to log and alert errors during file drop, image loading, and mouse interactions.
 *
 * Overall, this function ensures a robust setup for the drag-and-drop file upload and interactive image cropping UI.
 */
function initializeDragAndDrop() {
    if (dragAndDropInitialized) {
        console.warn("Drag-and-drop already initialized.");
        return;
    }
    dragAndDropInitialized = true;

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
                // canvas.id = 'canvas';
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
            fileInput.value = ''; // Reset the input value
            fileInput.click();
        });
    }

    // File input change event
    if (fileInput) {
        debugCounter++
        console.log("File Input", fileInput, debugCounter)
        fileInput.addEventListener('change', (e) => {
            console.log("Input Changed !!!!!!!!!!!!!!!", debugCounter);
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

document.addEventListener('DOMContentLoaded', () => {
    try {
        initializeDragAndDrop();
    } catch (error) {
        console.error("Initialization error:", error.message);
        alert("An error occurred while initializing the drag-and-drop functionality. Please reload the page.");
    }
});


