// ********************************************************************************************
// router.js defines routes and initializes AdminView with the database object
// ********************************************************************************************
const express = require('express');
const router = express.Router();
const homeController = require('./controllers/homeController');
const adminController = require('./controllers/adminController');
const CompanyModel = require('./models/CompanyModel'); // Retrieve companies model
const authController = require('./controllers/authController'); // Login authorization model

module.exports = (db) => {
    const companyList = new CompanyModel(db); // Initialize CompanyModel with the database

    // Routes
    // router.get('/', homeController.home); // Home route
    router.get('/', (req, res) => homeController.home(req, res, db)); // Pass db explicitly


    // Admin related routes
    router.get('/admin', (req, res) => adminController.companies(req, res, companyList)); // Fetch companies
    router.post('/admin/add', (req, res) => adminController.addCompany(req, res, companyList)); // Add a company
    router.post('/login', authController.verifyAdmin); // Validate admin login

    return router; // Export the router
};
