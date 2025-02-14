/**
 * BuildingModel Module
 *
 * This module defines the BuildingModel class that extends BaseModel to interact with the "building" collection in the database.
 *
 * Key functionalities include:
 * - getBuilding(): Retrieves the single building record.
 * - addBuilding(buildingData): Adds a new building record after validating that the name, intro, and image are provided.
 * - updateBuilding(id, buildingData): Updates an existing building record, ensuring the provided ID is a valid ObjectId.
 * - deleteItem(buildingId): Deletes a building record after validating the buildingId.
 *
 * Each method includes error handling to log issues and return clear error messages when database operations fail.
 */

// Import the BaseModel class
const BaseModel = require('./BaseModel');
const { ObjectId } = require('mongodb');

// Create a new class that extends the base model
class BuildingModel extends BaseModel {
    constructor(database) {
        super(database, 'building'); // Use "building" as the collection name
    }

    // Define methods to retrieve building records
    async getBuilding() {
        try {
            return await this.collection.findOne({}); // Fetch the single building record
        } catch (error) {
            console.error('Error fetching building:', error);
            throw new Error('Database error.');
        }
    }

    //  Define methods to add a building record
    async addBuilding(buildingData) {
        const { name, intro, image } = buildingData;

        if (!name || !intro || !image) {
            return { success: false, message: 'Name, intro text, and image are required.' };
        }

        try {
            return await this.add(buildingData);
        } catch (error) {
            console.error('Error adding building:', error);
            return { success: false, message: 'Database error.' };
        }
    }

    // Define methods to update a building record
    async updateBuilding(id, buildingData) {
        try {

            console.log("Building ID is ", id, " BuildingData is ", buildingData);
            // Convert the ObjectId to a 24-character hex string if it's already an ObjectId
            const formattedId = id instanceof ObjectId ? id.toHexString() : id;
    
            // Ensure the formattedId is valid
            if (!ObjectId.isValid(formattedId)) {
                throw new Error('Invalid ObjectId format');
            }
    
            // Call the BaseModel.update with the formattedId
            return await this.update(formattedId, buildingData);
        } catch (error) {
            console.error('Error updating building:', error);
            return { success: false, message: 'Database error.' };
        }
    }

    // Define methods to delete a building record
    async deleteItem(buildingId) {
        if (!ObjectId.isValid(buildingId)) {
            return { success: false, message: 'Invalid ObjectId.' };
        }

        try {
            return await this.delete(buildingId); // Use BaseModel's `delete` method
        } catch (error) {
            console.error('Database error:', error);
            return { success: false, message: 'Failed to delete the company due to a database error.' };
        }
    }
    
}

module.exports = BuildingModel;
