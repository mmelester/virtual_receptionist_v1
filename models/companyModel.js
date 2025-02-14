/**
 * CompanyModel Module
 *
 * This module defines the CompanyModel class, which extends the BaseModel class to interact with the "companies" collection in MongoDB.
 *
 * Key Methods:
 * - addCompany(companyData):
 *     • Adds a new company to the database after validating required fields (name, intro, image).
 * - getCompanies():
 *     • Retrieves all companies from the database using the BaseModel's getAll method.
 * - deleteItem(companyId):
 *     • Deletes a company by its ID after validating that the provided companyId is a valid ObjectId.
 * - getCompanyById(companyId):
 *     • Retrieves a specific company by its ID using the BaseModel's getById method.
 * - updateCompany(companyId, companyData):
 *     • Updates a company's details after validating the companyId and ensuring that required data (name, intro, image) is provided.
 *
 * Each method handles errors gracefully, logging issues and returning clear error messages when necessary.
 */

// Import the BaseModel class
const BaseModel = require('./BaseModel');
const { ObjectId } = require('mongodb'); // Import ObjectId for MongoDB operations

// Create a new class that extends the BaseModel class
class CompanyModel extends BaseModel {
    constructor(database) {
        super(database, 'companies'); // Pass the database and collection name to BaseModel
    }

    // Add company method (adds a new company to the database)
    async addCompany(companyData) {
        const { name, intro, image, people } = companyData;

        // Validation
        if (!name || !intro || !image) {
            return { success: false, message: 'Name, intro text, and logo image are required.' };
        }

        try {
            return await this.add({ name, intro, image, people }); // Use BaseModel's `add` method
        } catch (error) {
            console.error('Database error:', error);
            return { success: false, message: 'Failed to add the company due to a database error.' };
        }
    }

    // Get all companies method (retrieves all companies from the database)
    async getCompanies() {
        try {
            const companies = await this.getAll(); // Fetch all companies
            // console.log("Fetched companies:", companies); // Debugging
            return companies;
        } catch (error) {
            console.error('Database error:', error);
            throw new Error('Failed to retrieve companies.');
        }
    }
    
    // Delete company method (deletes a company from the database)
    async deleteItem(companyId) {
        if (!ObjectId.isValid(companyId)) {
            return { success: false, message: 'Invalid ObjectId.' };
        }

        try {
            return await this.delete(companyId); // Use BaseModel's `delete` method
        } catch (error) {
            console.error('Database error:', error);
            return { success: false, message: 'Failed to delete the company due to a database error.' };
        }
    }

    // Get company by ID method (retrieves a company by its ID from the database)
    async getCompanyById(companyId) {
        if (!ObjectId.isValid(companyId)) {
            throw new Error('Invalid ObjectId.');
        }

        try {
            return await this.getById(companyId); // Use BaseModel's `getById` method
        } catch (error) {
            console.error('Database error:', error);
            throw new Error('Failed to retrieve company data.');
        }
    }

    // Update company method (updates a company in the database)
    async updateCompany(companyId, companyData) {
        if (!ObjectId.isValid(companyId)) {
            return { success: false, message: 'Invalid ObjectId.' };
        }

        if (!companyData.name || !companyData.intro || !companyData.image) {
            return { success: false, message: 'Invalid data for update.' };
        }

        try {
            return await this.update(companyId, companyData); // Use BaseModel's `update` method
        } catch (error) {
            console.error('Database error:', error);
            return { success: false, message: `Error updating company: ${error.message}` };
        }
    }
}

module.exports = CompanyModel;
