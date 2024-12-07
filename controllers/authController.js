const AuthModel = require('../models/authModel');

exports.verifyAdmin = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ success: false, message: 'Username and password are required.' });
        }

        const isAdmin = AuthModel.validateAdmin(username, password);

        if (isAdmin) {
            return res.status(200).json({ success: true, message: 'Login successful.' });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid username or password.' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error.' });
    }
};
