/**
 * NotificationModel Module
 *
 * This module defines the NotificationModel class that extends the BaseModel class to interact with
 * the "notifications" collection in the MongoDB database.
 *
 * Key functionalities include:
 * - getNotifications(): Retrieves all notification documents from the database.
 * - updateSMS(req, res, notificationModel): Updates the SMS notification settings by:
 *     • Extracting SMS-related fields from the request body.
 *     • Cleaning the data to ensure JSON safety.
 *     • Executing the update operation on the database.
 *     • Using flash messages to communicate success or failure, and redirecting to the notifications page.
 * - updateEMAIL(req, res, notificationModel): Updates the Email notification settings similarly by:
 *     • Extracting Email-related fields from the request body.
 *     • Cleaning the data for JSON safety.
 *     • Performing the database update operation.
 *     • Communicating the outcome with flash messages and redirecting appropriately.
 *
 * Both update methods log the data before and after cleaning, ensuring transparency in the update process,
 * and they handle errors gracefully to maintain application stability.
 */

// Require the base model
const BaseModel = require('./BaseModel');
const { ObjectId } = require('mongodb');

// Define the NotificationModel class by extending BaseModel    
class NotificationModel extends BaseModel {
    constructor(database) {
        super(database, 'notifications'); // Collection name
    }

    // Define the getNotifications method to fetch all notifications from the database
    async getNotifications() {
        try {
            return await this.getAll();
        } catch (error) {
            console.error('Database error:', error);
            throw new Error('Failed to retrieve notifications.');
        }
    }

    // Define the updateSMS method to update SMS notifications in the database
    async updateSMS(req, res, notificationModel) {
        try {
            const updatedSMSData = {
                SMS: {
                    LOBBY_NOTIFICATION: req.body.lobbyNotification || "",
                    CONSENT_GRANTED: req.body.consentGranted || "",
                    CONSENT_NOT_FOUND: req.body.noConsentNotification || "",
                    CONSENT_ERROR: req.body.consentError || "",
                    UNSUBSCRIBED: req.body.unsubscribedNotification || "",
                    INVALID_RESPONSE: req.body.invalidResponse || ""
                }
            };
    
            console.log("🔍 Before Cleaning in Controller:", updatedSMSData);
    
            // 🔥 Ensure JSON Safety
            const safeData = JSON.parse(JSON.stringify(updatedSMSData));
    
            console.log("✅ Cleaned Data in Controller:", safeData);
    
            const updateResult = await notificationModel.updateSMS(safeData);
    
            console.log("updateResult ", updateResult);
    
            if (updateResult.acknowledged && updateResult.modifiedCount > 0) {
                req.flash('success', 'SMS Notifications updated successfully.');
            } else {
                req.flash('errors', ['No changes were made or update failed.']);
            }
    
            res.redirect('/admin/notifications');
        } catch (error) {
            console.error('❌ Error updating SMS notifications:', error);
            req.flash('errors', ['Failed to update SMS notifications.']);
            res.redirect('/admin/notifications');
        }
    }
    
    // Define the updateEMAIL method to update EMAIL notifications in the database
    async updateEMAIL(req, res, notificationModel) {
        try {
            const updatedEmailData = {
                EMAIL: {
                    SUBJECT: req.body.emailSubjectNotification || "",
                    TEXT: req.body.emailTextNotification || "",
                    HTML: req.body.emailHtmlNotification || ""
                }
            };
    
            console.log("🔍 Before Cleaning in Controller:", updatedEmailData);
    
            // 🔥 Ensure JSON Safety
            const safeData = JSON.parse(JSON.stringify(updatedEmailData));
    
            console.log("✅ Cleaned Data in Controller:", safeData);
    
            const updateResult = await notificationModel.updateEMAIL(safeData);
    
            console.log("updateResult ", updateResult);
    
            if (updateResult.acknowledged && updateResult.modifiedCount > 0) {
                req.flash('success', 'Email Notifications updated successfully.');
            } else {
                req.flash('errors', ['No changes were made or update failed.']);
            }
    
            res.redirect('/admin/notifications');
        } catch (error) {
            console.error('❌ Error updating EMAIL notifications:', error);
            req.flash('errors', ['Failed to update Email notifications.']);
            res.redirect('/admin/notifications');
        }
    }
    
    
}

module.exports = NotificationModel;
