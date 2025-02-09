const UserModel = require('../models/UserModel');

module.exports = {
    async getUsers(req, res, userModel) { // Ensure userModel is passed and used
        try {
            const users = await userModel.getUsers(); // Use the instance method

            console.log("From usersController.getUsers ", users);

            if (!users || users.length === 0) {
                req.flash('errors', ['No users found.']);
                return res.render('admin/users.ejs', {
                    users: [], // Empty array instead of empty object
                    errors: req.flash('errors'),
                    success: req.flash('success')
                });
            }

            res.render('admin/users.ejs', {
                users: users,
                errors: req.flash('errors'),
                success: req.flash('success')
            });
        } catch (error) {
            console.error('Error fetching users:', error);
            req.flash('errors', ['Failed to retrieve users record from database.']);
            res.render('admin/users.ejs', {
                users: [],
                errors: req.flash('errors'),
                success: req.flash('success')
            });
        }
    },
    
    async saveUser(req, res, UserModel) {
        const { username, password, email, role } = req.body;

        if (!username || !password || !role) {
            return res.status(400).json({ success: false, message: 'Username, password, and role are required; email optional.' });
        }

        try {
            // Create a new record
            const result = await UserModel.addUser({ username, password, email, role });
            if (result.success) {
                req.flash('success', 'User record added successfully!');
                return req.session.save(() => res.status(200).json({ success: true, refresh: true, message: 'User added successfully!' }));
            } else {
                req.flash('errors', [result.message]);
                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }
        } catch (error) {
            console.error('Error saving user:', error);
            req.flash('errors', ['Failed to add usr.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred on the server.' }));
        }
    },
};

