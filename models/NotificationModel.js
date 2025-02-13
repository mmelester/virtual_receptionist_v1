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
