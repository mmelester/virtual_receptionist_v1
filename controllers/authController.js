exports.login = async (req, res) => {
    const User = require('../models/AuthModel');
    const user = new User(req.body);

    try {
        await user.login();
        req.session.isLoggedIn = true; // Set isLoggedIn to true
        req.session.save(() => {
            req.flash('success', 'You have successfully logged in.');
            res.redirect('/admin'); // Redirect to /admin
        });
    } catch (error) {
        req.flash('errors', error); // Store error in flash
        console.log('Flash errors:', req.flash('errors')); // Debug: Check flash content
        req.session.save(() => {
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
