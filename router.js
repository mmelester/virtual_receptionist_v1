module.exports = (db) => {
    const express = require('express');
    const router = express.Router();

    // Import Controllers
    const homeController = require('./controllers/homeController');
    const adminController = require('./controllers/adminController');
    const companiesController = require('./controllers/companiesController');
    const peopleController = require('./controllers/peopleController');
    const authController = require('./controllers/authController');

    // Import Models
    const AdminModel = require('./models/AdminModel');
    const CompanyModel = require('./models/CompanyModel');
    const PersonModel = require('./models/PersonModel');

    // Initialize Model Instances
    const adminModelInstance = new AdminModel(db);
    const companyModelInstance = new CompanyModel(db);
    const peopleModelInstance = new PersonModel(db);

    // -------------------------------------
    // 🔒 Authentication Middleware
    // -------------------------------------
    function ensureAuthenticated(req, res, next) {
        if (req.session && req.session.isLoggedIn) {
            return next();
        } else {
            req.flash('errors', 'You must be logged in to access this page.');
            return res.redirect('/');
        }
    }

    // -------------------------------------
    // 🌐 Public Routes
    // -------------------------------------
    router.get('/', (req, res) => homeController.home(req, res, db));
    router.post('/login', authController.login);
    router.get('/logout', authController.logout);

    // -------------------------------------
    // 🔒 Protected Admin Routes
    // -------------------------------------
    router.get('/admin', ensureAuthenticated, (req, res) =>
        adminController.index(req, res, adminModelInstance)
    );

    router.get('/admin/companies', ensureAuthenticated, (req, res) =>
        companiesController.getCompanies(req, res, companyModelInstance)
    );

    router.post('/admin/companies/add', ensureAuthenticated, (req, res) =>
        companiesController.addCompany(req, res, companyModelInstance)
    );

    router.get('/admin/companies/:id/people', ensureAuthenticated, (req, res) =>
        peopleController.getPeopleByCompanyId(req, res, peopleModelInstance)
    );

    // -------------------------------------
    // 📲 API Routes 
    // -------------------------------------
    router.get('/api/companies/:id/people', (req, res) =>
        peopleController.getPeopleByCompanyId(req, res, peopleModelInstance, true)
    );

    return router;
};
