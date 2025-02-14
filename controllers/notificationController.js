/**
 * Notification Controller Module
 *
 * This module exports functions to manage notification settings and related operations
 * within the application. It works with the NotificationModel to interact with the database
 * for retrieving and updating notification records, and with the NotificationService to perform
 * external tasks such as scanning for smart plugs (outlets).
 *
 * Available Functions:
 *
 * - getNotifications(req, res, notificationModel)
 *     Retrieves notification records from the database.
 *     Renders the 'admin/notifications.ejs' view with the notifications data,
 *     along with any flash messages for errors or success.
 *     If no notifications are found, flashes an error message and renders an empty notifications object.
 *
 * - updateSMS(req, res, notificationModel)
 *     Updates the SMS notification settings using data provided in the request body.
 *     The function ensures the data is JSON-safe, then calls the model's updateSMS method.
 *     Returns a JSON response indicating whether the update was successful.
 *
 * - updateEMAIL(req, res, notificationModel)
 *     Updates the EMAIL notification settings using data provided in the request body.
 *     Calls the model's updateEMAIL method and returns a JSON response indicating success or failure.
 *
 * - scanOutlets(req, res)
 *     Invokes the NotificationService to scan for smart plug devices (outlets).
 *     Returns the scanned devices as a JSON response.
 *
 * Each function includes comprehensive error handling with logging, flash messages for user feedback,
 * and appropriate HTTP status codes to indicate the result of the operations.
 */

// Required modules and files for the notification controller module
const NotificationModel = require('../models/NotificationModel');
const NotificationService = require('../services/NotificationService');

module.exports = {

    // Get all notifications from the database and render them to the admin page
    async getNotifications(req, res, notificationModel) {

        try {
            // Fetch notifications from the database    
            const notifications = await notificationModel.getNotifications();

            //  If no notifications are found, flash an error message and render an empty notifications object
            if (!notifications || notifications.length === 0) {
                req.flash('errors', ['No notifications found.']);
                return res.render('admin/notifications.ejs', {
                    notifications: {}, // Empty object if no data
                    errors: req.flash('errors'),
                    success: req.flash('success')
                });
            }

            // Render the notifications to the admin page
            res.render('admin/notifications.ejs', {
                notifications: notifications[0], // Assuming only one record exists
                errors: req.flash('errors'),
                success: req.flash('success')
            });

        } catch (error) {
            // Log the error and flash an error message for the user to see on the page 
            console.error('Error fetching notifications:', error);
            req.flash('errors', ['Failed to retrieve notifications record from database.']);
            res.render('admin/notifications.ejs', {
                notifications: {},
                errors: req.flash('errors'),
                success: req.flash('success')
            });
        }
    },

    // Update the SMS notifications in the database and return a response 
    async updateSMS(req, res, notificationModel) {

        try {
            // Extract the SMS notification data from the request body 
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
    
            // 🔥 Ensure JSON Safety
            const safeData = JSON.parse(JSON.stringify(updatedSMSData));
            console.log("✅ Cleaned Data in Controller:", safeData);
    
            // Update the SMS notification settings in the database
            const updateResult = await notificationModel.updateSMS(safeData);

            console.log("updateResult ", updateResult);
    
            // Check if the update was successful
            if (updateResult.modifiedCount > 0 || updateResult.matchedCount > 0) {
                return res.json({ success: true, message: "SMS Notifications updated successfully." });
            } else {
                return res.status(400).json({ success: false, message: "Failed to update SMS notifications." });
            }

        } catch (error) {
            // Log the error and return a response with an error message
            console.error('❌ Error updating SMS notifications:', error);
            req.flash('errors', ['From notificationController catch: Failed to update SMS notifications.']);
            return res.status(500).json({ success: false, message: "Internal server error while updating SMS notifications." });
        }
    },
    
    // Update the EMAIL notifications in the database and return a response 
    async updateEMAIL(req, res, notificationModel) {
        try {
            // Extract the EMAIL notification data from the request body 
            const updatedEmailData = {
                EMAIL: {
                    SUBJECT: req.body.emailSubjectNotification || "",
                    TEXT: req.body.emailTextNotification || "",
                    HTML: req.body.emailHtmlNotification || ""
                }
            };
    
            console.log("🔍 Updating EMAIL Fields Only:", updatedEmailData);
    
            // Update the EMAIL notification settings in the database 
            const updateResult = await notificationModel.updateEMAIL(updatedEmailData);
    
            // Check if the update was successful
            if (updateResult.modifiedCount > 0 || updateResult.matchedCount > 0) {
                return res.json({ success: true, message: "EMAIL Notifications updated successfully." });
            } else {
                return res.status(400).json({ success: false, message: "Failed to update EMAIL notifications." });
            }

        } catch (error) {
            // Log the error and return a response with an error message
            console.error('❌ Error updating EMAIL notifications:', error);
            return res.status(500).json({ success: false, message: "Internal server error while updating EMAIL notifications." });
        }
    },

    // Scan for smart plug devices (outlets) and return the results as a JSON response 
    async scanOutlets(req, res) {

        try {
            // Scan for smart plug devices using the NotificationService
            const devices = await NotificationService.scanOutlets();
            res.json(devices);

        } catch (error) {
            // Log the error and return a response with an error message
            res.status(500).json({ error: "Failed to scan for smart plugs" });
        }
    },
    
};
