const { ObjectId } = require('mongodb'); // Import ObjectId for MongoDB operations
class companyModel {
    constructor(database) {
        this.db = database;
    }

    async addCompany(companyData) {
        const { name, intro, image } = companyData;

        // Validation
        if (!name || !intro) {
            return { success: false, message: 'Both name and intro are required.' };
        }

        try {
            // Insert into the database
            const result = await this.db.collection('companies').insertOne({ name, intro, image });
            return { success: true, result };
        } catch (error) {
            console.error('Database error:', error);
            return { success: false, message: 'Failed to add the company due to a database error.' };
        }
    }

    async getCompanies() {
        try {
            // Fetch all companies from the database
            const companies = await this.db.collection('companies').find({}).toArray();

            // console.log(companies);

            return companies;
        } catch (error) {
            console.error('Database error:', error);
            throw new Error('Failed to retrieve companies.');
        }
    }

    async deleteCompany(companyId) {
        try {
            if (!ObjectId.isValid(companyId)) {
                throw new Error('Invalid ObjectId'); // Validate the ObjectId
            }
    
            const result = await this.db.collection('companies').deleteOne({ _id: new ObjectId(companyId) });
            return { success: result.deletedCount === 1 };
        } catch (error) {
            console.error('Database error:', error);
            return { success: false, message: 'Failed to delete the company due to a database error.' };
        }
    }

}

module.exports = companyModel;
