module.exports = (db) => {
    const express = require('express');
    const router = express.Router();

    // Import Controllers
    const homeController = require('./controllers/homeController');
    const adminController = require('./controllers/adminController');
    const buildingController = require('./controllers/buildingController');
    const companiesController = require('./controllers/companiesController');
    const peopleController = require('./controllers/peopleController');
    const authController = require('./controllers/authController');

    // Import Models
    const AdminModel = require('./models/AdminModel');
    const BuildingModel = require('./models/BuildingModel');
    const CompanyModel = require('./models/CompanyModel');
    const PersonModel = require('./models/PersonModel');

    // Initialize Model Instances
    const adminModelInstance = new AdminModel(db);
    const buildingModelInstance = new BuildingModel(db);
    const companyModelInstance = new CompanyModel(db);
    const peopleModelInstance = new PersonModel(db);

    // -------------------------------------
    // 🔒 Authentication Middleware
    // -------------------------------------
    function ensureAuthenticated(req, res, next) {
        if (req.session && req.session.isLoggedIn) {
            console.log('User is authenticated');
            return next();
        } else {
            console.log('Authentication failed.');
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
    router.get('/companies/:id', (req, res) => {
        companiesController.getCompanyById(req, res, companyModelInstance);
    });
    router.get('/companies/person/:id', (req, res) => {
        const { id } = req.params;
        peopleController.getPersonById(req, res, peopleModelInstance, id);
    });

    // -------------------------------------
    // 🔒 Protected Admin Routes
    // -------------------------------------
    router.get('/admin', ensureAuthenticated, (req, res) =>
        adminController.index(req, res, adminModelInstance, buildingModelInstance)
    );

    router.get('/admin/building', ensureAuthenticated, (req, res) =>
        buildingController.getBuilding(req, res, buildingModelInstance)
    );
    
    // Post errors
    router.post('/admin', ensureAuthenticated, (req, res) =>
        adminController.index(req, res, adminModelInstance, buildingModelInstance)
    );

    router.post('/admin/building', ensureAuthenticated, (req, res) =>
        buildingController.saveBuilding(req, res, buildingModelInstance)
    );

    router.put('/admin/building', ensureAuthenticated, (req, res) =>
        buildingController.updateBuilding(req, res, buildingModelInstance)
    );

    router.delete('/admin/building/delete/:id', ensureAuthenticated, (req, res) => buildingController.deleteItem(req, res, buildingModelInstance)
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

    router.get('/admin/companies/edit/:id', ensureAuthenticated, (req, res) =>
        companiesController.editCompany(req, res, companyModelInstance)
    );

    router.put('/admin/companies/edit/:id', ensureAuthenticated, (req, res) =>
        companiesController.updateCompany(req, res, companyModelInstance)
    );

    router.delete('/admin/companies/delete/:id', ensureAuthenticated, (req, res) => companiesController.deleteItem(req, res, companyModelInstance)
    );

    router.get('/admin/companies/:id/people', ensureAuthenticated, (req, res) =>
        peopleController.getPeopleByCompanyId(req, res, peopleModelInstance)
    ); // Route for rendering people.ejs template in browser

    router.get('/api/companies/:id/people', ensureAuthenticated, (req, res) =>
        peopleController.getPeopleByCompanyId(req, res, peopleModelInstance, true)
    );  // API route for fetching JSON data (fetch API request in client-side js)

    router.get('/admin/companies/:companyId/people/edit/:personId', ensureAuthenticated, (req, res) => {
        const { companyId, personId } = req.params;
        console.log("From router: ", companyId, personId);
        peopleController.editPerson(req, res, peopleModelInstance, companyId, personId);
    });

    router.post('/admin/companies/people/add', ensureAuthenticated, (req, res) =>
        peopleController.addPerson(req, res, peopleModelInstance)
    );

    router.delete('/admin/companies/:companyId/people/delete/:personId', ensureAuthenticated, (req, res) => {
        const { companyId, personId } = req.params;
        console.log("From router: ", companyId, personId);
        peopleController.deletePerson(req, res, peopleModelInstance, companyId, personId);
    });

    router.put('/admin/companies/:companyId/people/edit/:id', ensureAuthenticated, (req, res) =>
        peopleController.updatePerson(req, res, peopleModelInstance)
    );

    // -------------------------------------
    // 📲 API Routes 
    // -------------------------------------
    router.get('/api/companies/:id/people', ensureAuthenticated, (req, res) =>
        peopleController.getPeopleByCompanyId(req, res, peopleModelInstance, true)
    );

    router.post('/api/companies/:id/people/errors', ensureAuthenticated, (req, res) => {
        const companyId = req.params.id;
        console.log("From router: ", companyId )
        peopleController.errorHandler(req, res, peopleModelInstance);
    });

    router.put('/api/companies/:id/people', ensureAuthenticated, (req, res) =>
        peopleController.addPerson(req, res, peopleModelInstance)
    );

    // -------------------------------------
    // ✅ Twilio Incoming SMS Webhook
    // -------------------------------------
    router.get('/twilio/sms', (req, res) => {
        res.send('✅ Twilio Webhook is active and waiting for POST requests.');
    }); // Test route - not needed
    router.post('/twilio/sms', (req, res) => {
        console.log("🔔 Webhook route hit!");  // Debug log
        peopleController.receiveSms(req, res);
    });
    

    return router;
};
