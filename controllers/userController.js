const UserModel = require('../models/UserModel');

module.exports = {
    // async getUsers(req, res, userModel) { // Ensure userModel is passed and used
    //     try {
    //         const users = await userModel.getUsers(); // Use the instance method

    //         console.log("From usersController.getUsers ", users);

    //         if (!users || users.length === 0) {
    //             req.flash('errors', ['No users found.']);
    //             return res.render('admin/users.ejs', {
    //                 users: [], // Empty array instead of empty object
    //                 errors: req.flash('errors'),
    //                 success: req.flash('success')
    //             });
    //         }

    //         res.render('admin/users.ejs', {
    //             users: users,
    //             errors: req.flash('errors'),
    //             success: req.flash('success')
    //         });
    //     } catch (error) {
    //         console.error('Error fetching users:', error);
    //         req.flash('errors', ['Failed to retrieve users record from database.']);
    //         res.render('admin/users.ejs', {
    //             users: [],
    //             errors: req.flash('errors'),
    //             success: req.flash('success')
    //         });
    //     }
    // },

    async getUsers(req, res, userModel) {
        try {
            const users = await userModel.getUsers();
            console.log("From usersController.getUsers ", users);
    
            if (!users || users.length === 0) {
                req.flash('errors', ['No users found.']);
            }
    
            req.session.save(() => {
                res.render('admin/users.ejs', {
                    users: users || [],
                    errors: req.flash('errors'),
                    success: req.flash('success'),
                });
            });
        } catch (error) {
            console.error('Error fetching users:', error);
            req.flash('errors', ['Failed to retrieve users record from database.']);
            
            req.session.save(() => {
                res.render('admin/users.ejs', {
                    users: [],
                    errors: req.flash('errors'),
                    success: req.flash('success'),
                });
            });
        }
    },
    
    async editUser(req, res, UserModel) {
        try {
            const userId = req.params.id;
    
            // Fetch the company details
            const user = await UserModel.getUserById(userId);
    
            if (!user) {
                return res.status(404).json({ success: false, message: 'User not found or invalid ID.' });
            }
    
            // Return the user details
            res.status(200).json({ success: true, data: user });
        } catch (error) {
            console.error('Error editing user information:', error);
            req.flash('errors', ['Failed to edit user.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'Failed to fetch user information from database.' }));
        }
    },
    
    async saveUser(req, res, UserModel) {
        const { username, password, email, role } = req.body;

        if (!username || !password || !email || !role) {
            return res.status(400).json({ success: false, message: 'Username, password, email, and role are required.' });
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
            req.flash('errors', ['Failed to add user.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred on the server.' }));
        }
    },

    async updateUser(req, res, UserModel) {
        console.log("userController.updateUser Called");
        const { username, password, email, role } = req.body;
    
        if (!username || !password || !email || !role) {
            return res.status(400).json({ success: false, message: 'Username, password, email, and role are required;' });
        }
    
        try {
            const existingUser = await UserModel.getUserById(req.params.id);
            console.log('Updating user with ID:', existingUser._id);
    
            if (!existingUser || !existingUser._id) {
                return res.status(404).json({ success: false, message: 'User record not found.' });
            }
            // Check if the new data is identical to the existing data
            const isUnchanged = 
            existingUser.username === username &&
            existingUser.password === password &&
            existingUser.password === email &&
            existingUser.role === role;

            if (isUnchanged) {
                return res.status(200).json({ success: true, message: 'No changes detected.' });
            }

            // Proceed with the update
            const result = await UserModel.updateUser(existingUser._id, { username, password, email, role });
    
            if (result.success) {
                return res.status(200).json({ success: true, message: 'User updated successfully!' });
            } else {
                return res.status(400).json({ success: false, message: 'Failed to update the user.' });
            }
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).json({ success: false, message: 'An unexpected error occurred.' });
        }
    },

    async deleteItem(req, res, UserModel) {
        try {
            const userId = req.params.id;
            const result = await UserModel.deleteItem(userId); 
            if (!result.success) {
                req.flash('errors', [result.message]);
                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }

            req.flash('success', 'User record deleted successfully!');
            req.session.save(() => res.status(200).json({ success: true, message: 'Building record deleted successfully!' }));
        } catch (error) {
            console.error('Error deleting building record:', error);
            req.flash('errors', ['Failed to delete building.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred while deleting the building record.' }));
        }
    },
};

