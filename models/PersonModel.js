const BaseModel = require('./BaseModel');
const { ObjectId } = require('mongodb'); // Import ObjectId for MongoDB operations

class PersonModel extends BaseModel {
    constructor(database) {
        super(database, 'people'); // Pass the database and collection name to BaseModel
    }

    async addPerson(personData) {
        const { name, reply, mobile, email, outlet, image } = personData;

        // Validation
        if (!name || !reply || !image) {
            return { success: false, message: 'Name, reply, and logo image are required.' };
        }

        try {
            return await this.add({ name, reply, mobile, email, outlet, image }); // Use BaseModel's `add` method
        } catch (error) {
            console.error('Database error:', error);
            return { success: false, message: 'Failed to add the person due to a database error.' };
        }
    }

    async getPeople() {
        try {
            return await this.getAll(); // Use BaseModel's `getAll` method
        } catch (error) {
            console.error('Database error:', error);
            throw new Error('Failed to retrieve people.');
        }
    }

    async deleteItem(personId) {

        console.log(`Deleting ID in model: ${personId}`); // Log the ID received in the model

        if (!ObjectId.isValid(personId)) {
            return { success: false, message: 'Invalid ObjectId.' };
        }

        try {
            return await this.delete(personId); // Use BaseModel's `delete` method
        } catch (error) {
            console.error('Database error:', error);
            return { success: false, message: 'Failed to delete the person due to a database error.' };
        }
    }

    async getPersonById(personId) {
        if (!ObjectId.isValid(personId)) {
            throw new Error('Invalid ObjectId.');
        }

        try {
            return await this.getById(personId); // Use BaseModel's `getById` method
        } catch (error) {
            console.error('Database error:', error);
            throw new Error('Failed to retrieve person data.');
        }
    }

    async updatePerson(personId, personData) {
        if (!ObjectId.isValid(personId)) {
            return { success: false, message: 'Invalid ObjectId.' };
        }

        if (!personData.name || !personData.intro || !personData.image) {
            return { success: false, message: 'Invalid data for update.' };
        }

        try {
            return await this.update(personId, personData); // Use BaseModel's `update` method
        } catch (error) {
            console.error('Database error:', error);
            return { success: false, message: `Error updating person: ${error.message}` };
        }
    }
}

module.exports = PersonModel;
