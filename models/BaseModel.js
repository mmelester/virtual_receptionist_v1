/**
 * BaseModel Module
 *
 * This module defines the BaseModel class, which serves as a foundational class for interacting with a MongoDB collection.
 *
 * The BaseModel constructor takes in a database instance and a collection name, then sets up the collection for CRUD operations.
 *
 * Key Methods:
 * - add(data): Inserts a new document into the collection.
 * - getAll(): Retrieves all documents from the collection.
 * - delete(id): Deletes a document from the collection based on its ObjectId.
 * - getById(id): Retrieves a single document from the collection using its ObjectId.
 * - update(id, data): Updates a document in the collection with the provided data, identified by its ObjectId.
 *
 * Each method implements error handling to log issues and returns structured success/error responses.
 * The ObjectId class from the 'mongodb' package is used to ensure proper handling of MongoDB document IDs.
 */

const { ObjectId } = require('mongodb'); // Import the ObjectId class
// Create a base model class
class BaseModel {
    constructor(database, collectionName) {
        this.db = database;
        this.collection = database.collection(collectionName);
    }

    // Define a method to add data to the collection    
    async add(data) {
        try {
            const result = await this.collection.insertOne(data);
            return { success: true, result };
        } catch (error) {
            console.error('Error adding data:', error);
            return { success: false, message: 'Database error.' };
        }
    }

    // Define a method to retrieve all data from the collection
    async getAll() {
        try {
            return await this.collection.find({}).toArray();
        } catch (error) {
            console.error('Error fetching data:', error);
            throw new Error('Database error.');
        }
    }

    // Define a method to delete data from the collection
    async delete(id) {
        try {
            const result = await this.collection.deleteOne({ _id: ObjectId.createFromHexString(id) });
            return { success: result.deletedCount > 0 };
        } catch (error) {
            console.error('Error deleting data:', error);
            return { success: false, message: 'Database error.' };
        }
    }
    
    // Define a method to retrieve data by ID
    async getById(id) {
        try {
            return await this.collection.findOne({ _id: ObjectId.createFromHexString(id) });
        } catch (error) {
            console.error('Error fetching data by ID:', error);
            throw new Error('Database error.');
        }
    }
    
    // Define a method to update data in the collection
    async update(id, data) {
        try {
             // Convert to ObjectId only if it's not already an ObjectId
            const objectId = ObjectId.isValid(id) && typeof id === 'string' ? new ObjectId(id) : id;
            const result = await this.collection.updateOne(
                { _id: ObjectId.createFromHexString(id) },
                { $set: data }
            );
            return { success: result.modifiedCount > 0 };
        } catch (error) {
            console.error('Error updating data:', error);
            return { success: false, message: 'Database error.' };
        }
    }
    
}
module.exports = BaseModel; 
