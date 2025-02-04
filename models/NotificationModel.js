const BaseModel = require('./BaseModel');
const { ObjectId } = require('mongodb'); // Import ObjectId for MongoDB operations

class NotificationModel extends BaseModel {
    constructor(database) {
        super(database, 'notifications'); // Pass the database and collection name to BaseModel
    }

    async getNotifications() {
        try {
            const notifications = await this.getAll(); // Fetch all notification messages
            // console.log("Fetched notifications:", notifications); // Debugging
            return notifications;
        } catch (error) {
            console.error('Database error:', error);
            throw new Error('Failed to retrieve notification messages from database.');
        }
    }

}

module.exports = NotificationModel;