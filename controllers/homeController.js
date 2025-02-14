/**
 * Home Page Controller
 *
 * This module exports an asynchronous function `home` that handles requests to the application's home page.
 *
 * The function performs the following steps:
 * 1. Instantiates the BuildingModel and CompanyModel using the provided database connection.
 * 2. Checks if the user is logged in by verifying session data.
 * 3. Attempts to retrieve building and company records from the database.
 * 4. Renders the home page view (`home/index.ejs`) with the retrieved data, including:
 *    - Building details
 *    - List of companies
 *    - User's login status
 *    - Error information (if any)
 * 5. If an error occurs during data retrieval, it logs the error, flashes an error message,
 *    and renders the view with fallback data while also returning a JSON error response.
 */

// Import the BuildingModel and CompanyModel classes
const BuildingModel = require('../models/BuildingModel');
const CompanyModel = require('../models/CompanyModel');

exports.home = async function (req, res, db) {
    // Create instances of the BuildingModel and CompanyModel classes
    const buildingModel = new BuildingModel(db);
    const companyModel = new CompanyModel(db);

    // Check if the user is logged in
    const isLoggedIn = req.session && req.session.isLoggedIn;
    console.log("Logged in ? ", isLoggedIn)

    try {
        // Retrieve the building and companies records from the database
        const building = await buildingModel.getBuilding();
        const companies = await companyModel.getCompanies();

        // Render the home page view and pass the building and companies records to the view
        res.render('home/index.ejs', { 
            building, 
            companies, 
            error: null, 
            isLoggedIn // Pass isLoggedIn to the view
        });
    } catch (error) {
        // If an error occurs, render the home page view with an error message
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
