/**
 * Sets all elements matching a given selector to the same width
 * based on the widest element.
 * 
 * @param {string} selector - CSS selector for the elements to adjust.
 */
export function setEqualWidths(selector) {
    const elements = document.querySelectorAll(selector);
    let maxWidth = 0;

    // Find the maximum width
    elements.forEach(el => {
        const width = el.offsetWidth;
        if (width > maxWidth) {
            maxWidth = width;
        }
    });

    // Apply the maximum width to all elements
    elements.forEach(el => {
        el.style.width = `${maxWidth}px`;
    });
}


