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

    async addUser(userData) {
        const {username, password, email, role } = userData;

        if (!username || !password || !email || !role) {
            return { success: false, message: 'Username, password, email, and role are required.' };
        }

        try {
            return await this.add(userData);
        } catch (error) {
            console.error('Error adding user:', error);
            return { success: false, message: 'Database error.' };
        }
    }

    async updateUser(id, userData) {
        try {

            console.log("User ID is ", id, " UserData is ", userData);
            // Convert the ObjectId to a 24-character hex string if it's already an ObjectId
            const formattedId = id instanceof ObjectId ? id.toHexString() : id;
    
            // Ensure the formattedId is valid
            if (!ObjectId.isValid(formattedId)) {
                throw new Error('Invalid ObjectId format');
            }
    
            // Call the BaseModel.update with the formattedId
            return await this.update(formattedId, userData);
        } catch (error) {
            console.error('Error updating user:', error);
            return { success: false, message: 'Database error.' };
        }
    }

    async getUserById(userId) {
        if (!ObjectId.isValid(userId)) {
            throw new Error('Invalid ObjectId.');
        }

        try {
            return await this.getById(userId); // Use BaseModel's `getById` method
        } catch (error) {
            console.error('Database error:', error);
            throw new Error('Failed to retrieve user information.');
        }
    }

    async deleteItem(userId) {
        if (!ObjectId.isValid(userId)) {
            return { success: false, message: 'Invalid ObjectId.' };
        }

        try {
            return await this.delete(userId); // Use BaseModel's `delete` method
        } catch (error) {
            console.error('Database error:', error);
            return { success: false, message: 'Failed to delete the user due to a database error.' };
        }
    }
}
module.exports = UserModel;