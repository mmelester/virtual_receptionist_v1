const CompanyModel = require('../models/CompanyModel');

exports.home = async function (req, res, db) {
    const companyModel = new CompanyModel(db);

    // Check if the user is logged in
    const isLoggedIn = req.session && req.session.isLoggedIn;

    console.log("Logged in ? ", isLoggedIn)

    try {
        const companies = await companyModel.getCompanies();
        res.render('home/index.ejs', { 
            companies, 
            error: null, 
            isLoggedIn // Pass isLoggedIn to the view
        });
    } catch (error) {
        console.error('Error retrieving companies:', error);
        res.render('home/index.ejs', { 
            companies: [], 
            error: 'Failed to load companies.', 
            isLoggedIn // Pass isLoggedIn to the view even in case of errors
        });
        req.flash('errors', e)
        req.session.save(function() {
          res.redirect('/')
        })
    }
};
