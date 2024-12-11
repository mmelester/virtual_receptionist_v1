// ********************************************************************************************
// router.js defines routes and initializes AdminView with the database object
// ********************************************************************************************
module.exports = (db) => {
    const express = require('express');
    const router = express.Router();
    const homeController = require('./controllers/homeController');
    const adminController = require('./controllers/adminController');
    const authController = require('./controllers/authController');
    const CompanyModel = require('./models/CompanyModel');
    
    const companyModelInstance = new CompanyModel(db); // Pass the database object to CompanyModel

    // Routes
    router.get('/', (req, res) => homeController.home(req, res, db));
    router.get('/admin', (req, res) => adminController.companies(req, res, companyModelInstance));
    router.post('/admin/add', (req, res) => adminController.addCompany(req, res, companyModelInstance));
    router.delete('/admin/delete/:id', (req, res) => adminController.deleteCompany(req, res, companyModelInstance));
    router.post('/login', authController.login);
    router.get('/logout', authController.logout);

    return router;
};


