const BaseModel = require('./BaseModel');

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
            return await this.update(id, buildingData);
        } catch (error) {
            console.error('Error updating building:', error);
            return { success: false, message: 'Database error.' };
        }
    }
}

module.exports = BuildingModel;
