import { handleCompanyFormSubmission } from './handleCompanyFormSubmission';
import { handlePersonFormSubmission } from './handlePersonFormSubmission';

const idMap = {
    companyPage: {
        btnId: "save-logo-btn"
    },
    personPage: {
        btnId: "save-headshot-btn"
    },
    buildingPage: {
        btnId: "save-building-logo"
    }
};

// Find the div with the page ID
const pageDiv = document.querySelector("div[id='companyPage'], div[id='personPage'], div[id='buildingPage']");
const pageId = pageDiv ? pageDiv.id : null; // e.g., "companyPage" or "personPage"

// Helper function to get the element by logical name
function getElement(genericId) {
    if (!pageId || !idMap[pageId]) {
        console.error("Page ID or mapping not found");
        return null;
    }
    const actualId = idMap[pageId][genericId];
    return document.getElementById(actualId);
}

// Handle button click events based on the page
const buttonElement = getElement("btnId");

if (buttonElement) {
    console.log("Button found:", buttonElement);

    if (pageId === 'companyPage') {
        // Attach the company-specific function
        buttonElement.addEventListener('click', handleCompanyFormSubmission);
    } else if (pageId === 'personPage') {
        // Attach the person-specific function
        buttonElement.addEventListener('click', handlePersonFormSubmission);
    } else {
        console.log("No valid handler for this page.");
    }
} else {
    console.error("Button element not found for the current page.");
}
