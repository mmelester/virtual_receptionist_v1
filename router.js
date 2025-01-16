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

    // Client view routes
    router.get('/companies/:id', (req, res) => {
        companiesController.getCompanyById(req, res, companyModelInstance);
    });
    router.get('/companies/person/:id', (req, res) => {
        const { id } = req.params;
        peopleController.getPersonById(req, res, peopleModelInstance, id);
    });
    
    // router.get('/companies/:id/people', (req, res) => {
    //     peopleController.renderPeoplePageByCompanyId(req, res, peopleModelInstance);
    // });
        
    // Admin dashboard route
    router.get('/admin', (req, res) => adminController.index(req, res, adminModelInstance));

    // Companies routes
    router.get('/admin/companies', (req, res) =>
        companiesController.getCompanies(req, res, companyModelInstance)
    );

    router.post('/admin/companies/add', (req, res) =>
        companiesController.addCompany(req, res, companyModelInstance)
    );

    router.delete('/admin/companies/delete/:id', (req, res) => companiesController.deleteItem(req, res, companyModelInstance)
    );

    router.get('/admin/companies/edit/:id', (req, res) =>
        companiesController.editCompany(req, res, companyModelInstance)
    );
    
    router.put('/admin/companies/edit/:id', (req, res) =>
        companiesController.updateCompany(req, res, companyModelInstance)
    );

    // People routes
    router.get('/admin/companies/:id/people', (req, res) =>
        peopleController.getPeopleByCompanyId(req, res, peopleModelInstance)
    ); // Route for rendering people.ejs template in browser

    router.get('/api/companies/:id/people', (req, res) =>
        peopleController.getPeopleByCompanyId(req, res, peopleModelInstance, true)
    );  // API route for fetching JSON data (fetch API request in client-side js)

    router.get('/admin/companies/:companyId/people/edit/:personId', (req, res) => {
        const { companyId, personId } = req.params;
        console.log("From router: ", companyId, personId);
        peopleController.editPerson(req, res, peopleModelInstance, companyId, personId);
    });
    // Handle error paths
    router.post('/api/companies/:id/people/errors', (req, res) => {
        const companyId = req.params.id;
        console.log("From router: ", companyId )
        peopleController.errorHandler(req, res, peopleModelInstance);
    });
    
    router.post('/admin/companies/people/add', (req, res) =>
        peopleController.addPerson(req, res, peopleModelInstance)
    );
      
    router.delete('/admin/companies/:companyId/people/delete/:personId', (req, res) => {
        const { companyId, personId } = req.params;
        console.log("From router: ", companyId, personId);
        peopleController.deletePerson(req, res, peopleModelInstance, companyId, personId);
    });
    
    router.put('/api/companies/:id/people', (req, res) =>
        peopleController.addPerson(req, res, peopleModelInstance)
    );
 
    router.put('/admin/companies/:companyId/people/edit/:id', (req, res) =>
        peopleController.updatePerson(req, res, peopleModelInstance)
    );

    // ✅ Twilio Incoming SMS Webhook
    router.get('/twilio/sms', (req, res) => {
        res.send('✅ Twilio Webhook is active and waiting for POST requests.');
    }); // Test route - not needed
    router.post('/twilio/sms', (req, res) => {
        console.log("🔔 Webhook route hit!");  // Debug log
        peopleController.receiveSms(req, res);
    });
    // Authentication routes
    router.post('/login', authController.login);
    router.get('/logout', authController.logout);

    return router;
};
