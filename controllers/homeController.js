const CompanyModel = require('../models/CompanyModel');

exports.home = async function (req, res, db) {
    const companyModel = new CompanyModel(db);

    // Check if the user is logged in
    const adminIsLoggedIn = req.session && req.session.adminIsLoggedIn;

    console.log("Logged in ? ", adminIsLoggedIn)

    try {
        const companies = await companyModel.getCompanies();

        res.render('home/index.ejs', { 
            companies, 
            error: null, 
            adminIsLoggedIn // Pass adminIsLoggedIn to the view
        });
    } catch (error) {
        console.error('Error retrieving companies:', error);
        res.render('home/index.ejs', { 
            companies: [], 
            error: 'Failed to load companies.', 
            adminIsLoggedIn // Pass adminIsLoggedIn to the view even in case of errors
        });
        req.flash('errors', error)
        req.session.save(() => res.status(500).json({ success: false, message: 'Failed to fetch company information from database.' }));
    }
};
