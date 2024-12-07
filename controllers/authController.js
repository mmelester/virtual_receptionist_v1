const AuthModel = require('../models/authModel');

module.exports = {

    async verifyAdmin(req, res) {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                return res.status(400).json({ success: false, message: 'Username and password are required.' });
            }

            const isAdmin = AuthModel.validateAdmin(username, password);

            if (isAdmin) {
                res.redirect('/admin');
            } else {
                return res.status(401).json({ success: false, message: 'Invalid username or password.' });
            }
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Server error.' });
        }
    },

    async logout(req, res) {
                // Clear the user session or token (if used for authentication)
                req.session.destroy(err => {
                    if (err) {
                        return res.status(500).json({ success: false, message: 'Error logging out.' });
                    }
                    res.redirect('/');
                });
            }
}
