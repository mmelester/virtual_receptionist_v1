const BaseModel = require('./BaseModel');
const { ObjectId } = require('mongodb'); // Import ObjectId for MongoDB operations

class CompanyModel extends BaseModel {
    constructor(database) {
        super(database, 'companies'); // Pass the database and collection name to BaseModel
    }

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
