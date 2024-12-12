module.exports = (db) => {
    const express = require('express');
    const router = express.Router();

    // Import Controllers
    const homeController = require('./controllers/homeController');
    const adminController = require('./controllers/adminController');
    const companiesController = require('./controllers/companiesController');
    const authController = require('./controllers/authController');

    // Import Models
    const AdminModel = require('./models/AdminModel');
    const CompanyModel = require('./models/CompanyModel');

    // Initialize Model Instances
    const adminModelInstance = new AdminModel(db);
    const companyModelInstance = new CompanyModel(db);

    // Routes

    // Home route
    router.get('/', (req, res) => homeController.home(req, res, db));

    // Admin dashboard route
    router.get('/admin', (req, res) => adminController.index(req, res, adminModelInstance));

    // Companies routes
    router.get('/admin/companies', (req, res) => companiesController.getCompanies(req, res, companyModelInstance));
    router.post('/admin/companies/add', (req, res) => companiesController.addCompany(req, res, companyModelInstance));
    router.delete('/admin/companies/delete/:id', (req, res) => companiesController.deleteCompany(req, res, companyModelInstance));
    router.get('/admin/companies/edit/:id', (req, res) => companiesController.editCompany(req, res, companyModelInstance));


    // Authentication routes
    router.post('/login', authController.login);
    router.get('/logout', authController.logout);

    return router;
};
