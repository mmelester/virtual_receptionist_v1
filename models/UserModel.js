const BaseModel = require('./BaseModel');
const { ObjectId } = require('mongodb');

class UserModel extends BaseModel {
    constructor(database) {
        super(database, 'users'); // Collection name
    }

    async getUsers() {
        try {
            return await this.getAll();
        } catch (error) {
            console.error('Database error:', error);
            throw new Error('Failed to retrieve users.');
        }
    }
}
module.exports = UserModel;