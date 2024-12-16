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
    router.put('/admin/companies/edit/:id', (req, res) => 
        companiesController.updateCompany(req, res, companyModelInstance)
    );

    // People routes
    router.get('/admin/people', (req, res) => peopleController.getPeople(req, res, peopleModelInstance));
    router.post('/admin/people/add', (req, res) => peopleController.addPerson(req, res, peopleModelInstance));
    router.delete('/admin/people/delete/:id', (req, res) => peopleController.deletePerson(req, res, peopleModelInstance));
    router.get('/admin/people/edit/:id', (req, res) => peopleController.editPerson(req, res, peopleModelInstance));
    router.put('/admin/people/edit/:id', (req, res) => peopleController.updatePerson(req, res, peopleModelInstance));

    // Authentication routes
    router.post('/login', authController.login);
    router.get('/logout', authController.logout);

    return router;
};
