/**
 * User Controller Module
 *
 * This module handles HTTP requests for managing user accounts in the application. It interacts with the UserModel
 * to perform CRUD operations on user records. The controller is responsible for retrieving, creating, updating, 
 * and deleting users, as well as rendering appropriate views and returning JSON responses based on the operation outcomes.
 *
 * Available Functions:
 *
 * - getUsers(req, res, userModel)
 *     Retrieves all user records using the UserModel.
 *     Renders the 'admin/users.ejs' view with the user data along with any flash messages for errors and successes.
 *     If no users are found, it flashes an error message and renders an empty array.
 *
 * - editUser(req, res, UserModel)
 *     Retrieves details of a single user based on the user ID provided in the request parameters.
 *     Returns a JSON response containing the user data if found, or a 404 error if not.
 *
 * - saveUser(req, res, UserModel)
 *     Validates that all required fields (username, password, email, and role) are provided in the request body.
 *     Creates a new user record using the UserModel and returns a JSON response indicating the success or failure of the operation.
 *     Flashes appropriate success or error messages.
 *
 * - updateUser(req, res, UserModel)
 *     Validates the input fields and checks if the new data differs from the existing user record.
 *     Updates the user record if changes are detected, otherwise returns a message indicating no changes.
 *     Returns a JSON response with the update result.
 *
 * - deleteItem(req, res, UserModel)
 *     Deletes a user record based on the user ID provided in the request parameters.
 *     Returns a JSON response indicating whether the deletion was successful.
 *     Flashes success or error messages accordingly.
 *
 * Error Handling:
 *     Each function includes robust error handling using try/catch blocks to log errors, flash appropriate messages,
 *     and save the session before sending a response.
 */

//  Import the User model and use it to fetch user records from the database
const UserModel = require('../models/UserModel');

module.exports = {

    // Retrieve all user records from the database and render the 'admin/users.ejs' view
    async getUsers(req, res, userModel) {

        try {
            // Fetch all user records from the database using the UserModel
            const users = await userModel.getUsers();
            console.log("From usersController.getUsers ", users);
    
            // If no users are found, flash an error message and render an empty array
            if (!users || users.length === 0) {
                req.flash('errors', ['No users found.']);
            }
    
            // Render the 'admin/users.ejs' view with the user data and flash messages for errors and successes
            req.session.save(() => {
                res.render('admin/users.ejs', {
                    users: users || [],
                    errors: req.flash('errors'),
                    success: req.flash('success'),
                });
            });

        } catch (error) {
            // Log the error, flash an error message, and render the 'admin/users.ejs' view with an empty array
            console.error('Error fetching users:', error);
            req.flash('errors', ['Failed to retrieve users record from database.']);
            
            // Render the 'admin/users.ejs' view with an empty array and flash messages for errors and successes
            req.session.save(() => {
                res.render('admin/users.ejs', {
                    users: [],
                    errors: req.flash('errors'),
                    success: req.flash('success'),
                });
            });
        }
    },

    // Retrieve a single user record based on the user ID provided in the request parameters
    async editUser(req, res, UserModel) {

        try {
            const userId = req.params.id; // Extract the user ID from the request parameters
    
            // Fetch the company details
            const user = await UserModel.getUserById(userId);
    
            if (!user) {
                return res.status(404).json({ success: false, message: 'User not found or invalid ID.' });
            }
    
            // Return the user details
            res.status(200).json({ success: true, data: user });

        } catch (error) {
            // Log the error, flash an error message, and return a JSON response with an error message
            console.error('Error editing user information:', error);
            req.flash('errors', ['Failed to edit user.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'Failed to fetch user information from database.' }));
        }
    },
    
    // Save a new user record to the database
    async saveUser(req, res, UserModel) {
        const { username, password, email, role } = req.body; // Extract the user details from the request body

        // Validate that all required fields are provided
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
            // Log the error, flash an error message, and return a JSON response with an error message
            console.error('Error saving user:', error);
            req.flash('errors', ['Failed to add user.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred on the server.' }));
        }
    },

    // Update an existing user record in the database based on the user ID provided in the request parameters
    async updateUser(req, res, UserModel) {
        console.log("userController.updateUser Called");
        const { username, password, email, role } = req.body; // Extract the user details from the request body
    
        // Validate that all required fields are provided
        if (!username || !password || !email || !role) {
            return res.status(400).json({ success: false, message: 'Username, password, email, and role are required;' });
        }
    
        try {
            // Fetch the existing user record from the database using the UserModel
            const existingUser = await UserModel.getUserById(req.params.id);
            console.log('Updating user with ID:', existingUser._id);
    
            // Check if the user record exists in the database
            if (!existingUser || !existingUser._id) {
                return res.status(404).json({ success: false, message: 'User record not found.' });
            }
            // Check if the new data is identical to the existing data
            const isUnchanged = 
            existingUser.username === username &&
            existingUser.password === password &&
            existingUser.password === email &&
            existingUser.role === role;

            // If no changes are detected, return a message
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
            // Log the error, flash an error message, and return a JSON response with an error message
            console.error('Error updating user:', error);
            res.status(500).json({ success: false, message: 'An unexpected error occurred.' });
        }
    },

    // Delete a user record from the database based on the user ID provided in the request parameters
    async deleteItem(req, res, UserModel) {
        try {
            const userId = req.params.id; // Extract the user ID from the request parameters
            const result = await UserModel.deleteItem(userId);  // Delete the user record using the UserModel
            if (!result.success) {
                req.flash('errors', [result.message]);
                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }

            //  Return a JSON response indicating the success of the deletion operation and flash a success message
            req.flash('success', 'User record deleted successfully!');
            req.session.save(() => res.status(200).json({ success: true, message: 'Building record deleted successfully!' }));

        } catch (error) {
            //  Log the error, flash an error message, and return a JSON response with an error message
            console.error('Error deleting building record:', error);
            req.flash('errors', ['Failed to delete building.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred while deleting the building record.' }));
        }
    },
};

