// ********************************************************************************************
// router.js defines routes and initializes AdminView with the database object
// ********************************************************************************************
const express = require('express');
const router = express.Router();
const homeController = require('./controllers/homeController');
const adminController = require('./controllers/adminController');
const AdminView = require('./models/AdminView'); // Import the AdminView model

module.exports = (db) => {
    const adminView = new AdminView(db); // Initialize AdminView with the database

    // Routes
    router.get('/', homeController.home); // Home route

    // Admin routes
    router.get('/admin', (req, res) => adminController.companies(req, res, adminView)); // Fetch companies
    router.post('/admin/add', (req, res) => adminController.addCompany(req, res, adminView)); // Add a company

    return router; // Export the router
};
