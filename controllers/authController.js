exports.login = async (req, res) => {
    const User = require('../models/AuthModel');
    const user = new User(req.body);

    try {
        const role = await user.login(); // Get role from AuthModel
        
        req.session.isLoggedIn = true;
        req.session.userRole = role; // Store user role in session
        
        req.session.save(() => {
            req.flash('success', 'You have successfully logged in.');
            if (role === 'admin') {
                res.redirect('/admin'); // Admins go to the admin panel
            } else {
                res.redirect('/dashboard'); // Standard users go to dashboard.ejs
            }
        });
    } catch (error) {
        req.flash('errors', error);
        req.session.save(() => res.redirect('/'));
    }
};


exports.logout = function(req, res) {
    req.session.destroy( async function () {
        console.log('Session destroyed, redirecting to home...');
        await res.clearCookie('connect.sid'); // Clear the session cookie explicitly
        res.redirect('/')
    })
  }
