const BaseModel = require('./BaseModel');
const { ObjectId } = require('mongodb');
class BuildingModel extends BaseModel {
    constructor(database) {
        super(database, 'building'); // Use "building" as the collection name
    }

    async getBuilding() {
        try {
            return await this.collection.findOne({}); // Fetch the single building record
        } catch (error) {
            console.error('Error fetching building:', error);
            throw new Error('Database error.');
        }
    }

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

    async updateBuilding(id, buildingData) {
        try {
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
    
}

module.exports = BuildingModel;
