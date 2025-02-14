/**
 * UserModel Module
 *
 * This module defines the UserModel class that extends the BaseModel class to interact with the 'users' collection
 * in the MongoDB database.
 *
 * The UserModel class provides methods for:
 * - Retrieving all users (getUsers)
 * - Adding a new user (addUser), with validation for required fields
 * - Updating an existing user (updateUser), ensuring the ID is a valid ObjectId
 * - Retrieving a user by their ID (getUserById)
 * - Deleting a user (deleteItem), with error handling and ObjectId validation
 *
 * Each method gracefully handles database errors by logging detailed error messages and returning appropriate
 * error responses.
 */

// Import the BaseModel class
const BaseModel = require('./BaseModel');
const { ObjectId } = require('mongodb');

// UserModel class inherits from BaseModel class   
class UserModel extends BaseModel {
    constructor(database) {
        super(database, 'users'); // Pass the 'users' collection to the BaseModel class
    }

    // Add methods specific to the UserModel class below
    async getUsers() {

        try {
            return await this.getAll();

        } catch (error) {
            console.error('Database error:', error);
            throw new Error('Failed to retrieve users.');
        }
    }

    // Add a new user to the database
    async addUser(userData) {
        const {username, password, email, role } = userData; // Destructure the userData object

        // Check if the required fields are missing
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

    // Update a user in the database    
    async updateUser(id, userData) {
        // Destructure the userData object  
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

    // Get a user by ID from the database   
    async getUserById(userId) {
        // Check if the userId is a valid ObjectId
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

    // Delete a user from the database      
    async deleteItem(userId) {
        // Check if the userId is a valid ObjectId
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