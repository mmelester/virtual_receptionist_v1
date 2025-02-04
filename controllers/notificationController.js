const NotificationModel = require('../models/NotificationModel');

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
    }
};
