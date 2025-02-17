/*
 * setEqualWidths(selector)
 *
 * This function adjusts the widths of all elements that match a given CSS selector so that they
 * all have the same width—the width of the widest element among them.
 *
 * How It Works:
 *  1. Selects all elements matching the provided CSS selector.
 *  2. Iterates over these elements to determine the maximum width using each element's offsetWidth.
 *  3. Sets the width of every selected element to this maximum width.
 *
 * Usage:
 *  Call setEqualWidths('.my-class') to ensure that all elements with the class "my-class" have the
 *  same width as the widest element.
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


