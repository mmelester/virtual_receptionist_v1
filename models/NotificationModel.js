const BaseModel = require('./BaseModel');
const { ObjectId } = require('mongodb');

class NotificationModel extends BaseModel {
    constructor(database) {
        super(database, 'notifications'); // Collection name
    }

    async getNotifications() {
        try {
            return await this.getAll();
        } catch (error) {
            console.error('Database error:', error);
            throw new Error('Failed to retrieve notifications.');
        }
    }

    async updateSMS(updatedSMSData) {
        try {
            console.log("🔍 From NotificationModel.updateSMS (Before Cleaning):", updatedSMSData);
    
            // 🔥 Ensure JSON Safety
            const safeData = JSON.parse(JSON.stringify(updatedSMSData));
    
            console.log("✅ Cleaned Data Before MongoDB Update:", safeData);
    
            // 🔍 Retrieve the existing notification document
            const existingNotification = await this.getAll();
            
            if (!existingNotification || existingNotification.length === 0) {
                console.error("❌ No existing notification record found. Creating a new one.");
                return await this.add(safeData);
            }
    
            const notificationId = existingNotification[0]._id; // MongoDB ObjectId
    
            console.log("🔍 Updating Notification ID:", notificationId);
    
            if (!ObjectId.isValid(notificationId)) {
                console.error("❌ Error: Retrieved _id is not a valid ObjectId.");
                throw new Error(`Invalid MongoDB ObjectId: ${notificationId}`);
            }
    
            return await this.db.collection(this.collection).updateOne(
                { _id: new ObjectId(notificationId) }, // ✅ Convert `_id` to MongoDB ObjectId
                { $set: safeData },
                { upsert: true }
            );
        } catch (error) {
            console.error('❌ Database error while updating SMS:', error);
            throw new Error('Failed to update SMS notifications.');
        }
    }
    
    async updateEMAIL(updatedSMSData) {
        try {
            console.log("🔍 From NotificationModel.updateEMAIL (Before Cleaning):", updatedEMAILData);
    
            // 🔥 Ensure JSON Safety
            const safeData = JSON.parse(JSON.stringify(updatedEMAILData));
    
            console.log("✅ Cleaned Data Before MongoDB Update:", safeData);
    
            // 🔍 Retrieve the existing notification document
            const existingNotification = await this.getAll();
            
            if (!existingNotification || existingNotification.length === 0) {
                console.error("❌ No existing notification record found. Creating a new one.");
                return await this.add(safeData);
            }
    
            const notificationId = existingNotification[0]._id; // MongoDB ObjectId
    
            console.log("🔍 Updating Notification ID:", notificationId);
    
            if (!ObjectId.isValid(notificationId)) {
                console.error("❌ Error: Retrieved _id is not a valid ObjectId.");
                throw new Error(`Invalid MongoDB ObjectId: ${notificationId}`);
            }
    
            return await this.db.collection(this.collection).updateOne(
                { _id: new ObjectId(notificationId) }, // ✅ Convert `_id` to MongoDB ObjectId
                { $set: safeData },
                { upsert: true }
            );
        } catch (error) {
            console.error('❌ Database error while updating EMAIL:', error);
            throw new Error('Failed to update EMAIL notifications.');
        }
    }
    
}

module.exports = NotificationModel;
