const NotificationModel = require('../models/NotificationModel');
const NotificationService = require('../services/NotificationService');

module.exports = {
    async getNotifications(req, res, notificationModel) {
        try {
            const notifications = await notificationModel.getNotifications();

            if (!notifications || notifications.length === 0) {
                req.flash('errors', ['No notifications found.']);
                return res.render('admin/notifications.ejs', {
                    notifications: {}, // Empty object if no data
                    errors: req.flash('errors'),
                    success: req.flash('success')
                });
            }

            res.render('admin/notifications.ejs', {
                notifications: notifications[0], // Assuming only one record exists
                errors: req.flash('errors'),
                success: req.flash('success')
            });
        } catch (error) {
            console.error('Error fetching notifications:', error);
            req.flash('errors', ['Failed to retrieve notifications record from database.']);
            res.render('admin/notifications.ejs', {
                notifications: {},
                errors: req.flash('errors'),
                success: req.flash('success')
            });
        }
    },

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
    
            console.log("🔍 Before Cleaning in Controller:", typeof(updatedSMSData));
    
            // 🔥 Ensure JSON Safety
            const safeData = JSON.parse(JSON.stringify(updatedSMSData));
    
            console.log("✅ Cleaned Data in Controller:", typeof(safeData));
    
            const updateResult = await notificationModel.updateSMS(safeData);

            console.log("updateResult ", updateResult);
    
            // Check if the update was successful
            if (updateResult.modifiedCount > 0 || updateResult.matchedCount > 0) {
                return res.json({ success: true, message: "SMS Notifications updated successfully." });
            } else {
                return res.status(400).json({ success: false, message: "Failed to update SMS notifications." });
            }
        } catch (error) {
            console.error('❌ Error updating SMS notifications:', error);
            req.flash('errors', ['From notificationController catch: Failed to update SMS notifications.']);
            return res.status(500).json({ success: false, message: "Internal server error while updating SMS notifications." });
        }
    },
    
    async updateEMAIL(req, res, notificationModel) {
        try {
            const updatedEmailData = {
                EMAIL: {
                    SUBJECT: req.body.emailSubjectNotification || "",
                    TEXT: req.body.emailTextNotification || "",
                    HTML: req.body.emailHtmlNotification || ""
                }
            };
    
            console.log("🔍 Updating EMAIL Fields Only:", updatedEmailData);
    
            const updateResult = await notificationModel.updateEMAIL(updatedEmailData);
    
            // Check if the update was successful
            if (updateResult.modifiedCount > 0 || updateResult.matchedCount > 0) {
                return res.json({ success: true, message: "EMAIL Notifications updated successfully." });
            } else {
                return res.status(400).json({ success: false, message: "Failed to update EMAIL notifications." });
            }
        } catch (error) {
            console.error('❌ Error updating EMAIL notifications:', error);
            return res.status(500).json({ success: false, message: "Internal server error while updating EMAIL notifications." });
        }
    },

    async scanOutlets(req, res) {
        try {
            const devices = await NotificationService.scanOutlets();
            res.json(devices);
        } catch (error) {
            res.status(500).json({ error: "Failed to scan for smart plugs" });
        }
    },
    
};
