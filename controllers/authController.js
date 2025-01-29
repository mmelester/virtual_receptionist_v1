exports.login = async (req, res) => {
    const User = require('../models/AuthModel');
    const user = new User(req.body);

    try {
        await user.login();
        req.session.adminIsLoggedIn = true; // Set adminIsLoggedIn to true
        req.session.save(() => {
            req.flash('success', 'You have successfully logged in.');
            res.redirect('/admin'); // Redirect to /admin
        });
    } catch (error) {
        req.flash('errors', error); // Store error in flash
        console.log('Flash errors:', error); // Debug: Check flash content
        req.session.save(() => {
            console.log('Errors before rendering:', error);
            res.redirect('/'); // Redirect back to the home/login page
        });
    }
};

exports.logout = function(req, res) {
    req.session.destroy( async function () {
        console.log('Session destroyed, redirecting to home...');
        await res.clearCookie('connect.sid'); // Clear the session cookie explicitly
        res.redirect('/')
    })
  }
