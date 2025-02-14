/**
 * Authentication Controller
 *
 * This module exports two functions, `login` and `logout`, which manage user authentication for the application.
 *
 * - The `login` function:
 *   1. Imports the authentication model (AuthModel) and creates an instance using the request body.
 *   2. Validates the user's credentials by invoking the `login` method on the AuthModel instance, 
 *      which returns the user's role.
 *   3. On successful login:
 *      - Sets session variables to indicate that the user is logged in and stores their role.
 *      - Flashes a success message.
 *      - Saves the session and redirects the user based on their role:
 *          - Admin users are redirected to the admin panel (`/admin`).
 *          - Standard users are redirected to the dashboard (`/dashboard`).
 *   4. On login failure:
 *      - Flashes an error message.
 *      - Saves the session and redirects the user back to the login page.
 *
 * - The `logout` function:
 *   1. Flashes a success message to notify the user of a successful logout.
 *   2. Destroys the user session.
 *   3. Clears the session cookie explicitly.
 *   4. Redirects the user to the home page.
 */

exports.login = async (req, res) => {
    // Import the AuthModel
    const User = require('../models/AuthModel');
    const user = new User(req.body);

    // Validate the user input
    try {
        const role = await user.login(); // Get role from AuthModel
        
        // If the login is successful, set the session
        req.session.isLoggedIn = true;
        req.session.userRole = role; // Store user role in session

        // Flash a success message
        req.flash('success', 'You have successfully logged in.');
        
        // Save the session and redirect the user
        req.session.save(() => {
            
            if (role === 'admin') {
                res.redirect('/admin'); // Admins go to the admin panel
            } else {
                res.redirect('/dashboard'); // Standard users go to dashboard.ejs
            }
        });
    } catch (error) {
        // If the login fails, redirect the user back to the login page
        req.flash('errors', error);
        req.session.save(() => res.redirect('/'));
    }
};

exports.logout = function (req, res) {
    // Clear the session and redirect the user
    req.flash('success', 'You have been logged out successfully.');
    req.session.destroy( async function () {
        console.log('Session destroyed, redirecting to home...');
        await res.clearCookie('connect.sid'); // Clear the session cookie explicitly
        res.redirect('/')
    })
  }
