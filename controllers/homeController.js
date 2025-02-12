const BuildingModel = require('../models/BuildingModel');
const CompanyModel = require('../models/CompanyModel');

exports.home = async function (req, res, db) {
    const buildingModel = new BuildingModel(db);
    const companyModel = new CompanyModel(db);
    // Check if the user is logged in
    const isLoggedIn = req.session && req.session.isLoggedIn;
    console.log("Logged in ? ", isLoggedIn)

    try {
        const building = await buildingModel.getBuilding();
        const companies = await companyModel.getCompanies();

        res.render('home/index.ejs', { 
            building, 
            companies, 
            error: null, 
            isLoggedIn // Pass isLoggedIn to the view
        });
    } catch (error) {
        console.error('Error retrieving companies:', error);
        res.render('home/index.ejs', { 
            building: null,
            companies: [], 
            error: 'Failed to load companies and/or building records.', 
            isLoggedIn // Pass isLoggedIn to the view even in case of errors
        });
        req.flash('errors', error)
        req.session.save(() => res.status(500).json({ success: false, message: 'Failed to fetch company and/or building information from database.' }));
    }
};
