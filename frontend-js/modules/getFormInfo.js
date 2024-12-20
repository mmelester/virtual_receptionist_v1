import { handleCompanyFormSubmission } from './handleCompanyFormSubmission';

const idMap = {
    companyPage: {
        btnId: "save-logo-btn"
    },
    personPage: {
        btnId: "save-headshot-btn"
    }
}

// Find the div with the page ID
const pageDiv = document.querySelector("div[id='companyPage'], div[id='personPage']");

console.log("Page DIV = ", pageDiv)

const pageId = pageDiv ? pageDiv.id : null; // e.g., "companyPage" or "personPage"

console.log("page ID = ", pageId)

// Helper function to get the element by logical name
function getElement(genericId) {
    if (!pageId || !idMap[pageId]) {
      console.error("Page ID or mapping not found");
      return null;
    }
    const actualId = idMap[pageId][genericId];
    return document.getElementById(actualId);
  }

  const buttonElement = getElement("btnId");
  if (buttonElement) {
    console.log("Button found:", buttonElement);
  
    // Attach the function to the button click event
    buttonElement.addEventListener('click', handleCompanyFormSubmission);
  }




