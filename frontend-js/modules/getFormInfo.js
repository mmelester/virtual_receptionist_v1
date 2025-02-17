/*
 * getFormInfo.js
 *
 * This module sets up the form submission handler for different pages (company, person, or building)
 * based on the current page's identifier.
 *
 * Functionality:
 *  - Imports specific form submission functions:
 *       • handleBuildingFormSubmission
 *       • handleCompanyFormSubmission
 *       • handlePersonFormSubmission
 *
 *  - Defines an idMap that maps each page (companyPage, personPage, buildingPage) to its corresponding
 *    button ID.
 *
 *  - Determines the current page by selecting a div whose ID is either "companyPage", "personPage", or 
 *    "buildingPage".
 *
 *  - Uses a helper function, getElement, to retrieve the appropriate button element from the DOM based on the idMap.
 *
 *  - Attaches a click event listener to the button:
 *       • For companyPage: attaches handleCompanyFormSubmission.
 *       • For personPage: attaches handlePersonFormSubmission.
 *       • For buildingPage: attaches handleBuildingFormSubmission.
 *
 *  - Logs an error if the required page or button element cannot be found.
 */
import { handleBuildingFormSubmission } from './handleBuildingFormSubmission';
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
    } else if (pageId === 'buildingPage') {
        // Attach the building-specific function
        buttonElement.addEventListener('click', handleBuildingFormSubmission);
    } else {
        console.log("No valid handler for this page.");
    }
} else {
    console.error("Button element not found for the current page.");
}
