const NotificationModel = require('../models/NotificationModel');

module.exports = {

    async getNotifications(req, res, NotificationModel) {
        try {
            const notifications = await NotificationModel.getNotifications();
            const notificationsExists = !!notifications;
            const errors = req.flash('errors');
            const success = req.flash('success');
            const isLoggedIn = req.session && req.session.isLoggedIn;
            return res.status(200).json({ success: true, data: notifications, notificationsExists, isLoggedIn });
        } catch (error) {
            console.error('Error fetching building:', error);
            req.flash('errors', ['Failed to retrieve notifications record from database.']);
            res.status(500).json({ success: false, message: 'An unexpected error occurred.' });
        }
    },
    
};
