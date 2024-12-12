const { ObjectId } = require('mongodb'); // Import ObjectId for MongoDB operations
class companyModel {
    constructor(database) {
        this.db = database;
    }

    async addCompany(companyData) {
        const { name, intro, image } = companyData;

        // Validation (this code would only get executed if a malicious user bypass client-side validation
        if (!name || !intro || !image) {

            console.log("name intro image", name, intro, image);

            return { success: false, message: 'Name, intro text, and logo image are required.' };
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

        // Use createFromHexString instead of new ObjectId
        const objectId = ObjectId.createFromHexString(companyId);
        const result = await this.db.collection('companies').deleteOne({ _id: objectId });

        return { success: result.deletedCount === 1 };
    } catch (error) {
        console.error('Database error:', error);
        return { success: false, message: 'Failed to delete the company due to a database error.' };
    }
}


}

module.exports = companyModel;
