module.exports = (db) => {
    const express = require('express');
    const router = express.Router();

    // Import Controllers
    const homeController = require('./controllers/homeController');
    const adminController = require('./controllers/adminController');
    const usersController = require('./controllers/usersController');
    const buildingController = require('./controllers/buildingController');
    const notificationController = require('./controllers/notificationController');
    const companiesController = require('./controllers/companiesController');
    const peopleController = require('./controllers/peopleController');
    const authController = require('./controllers/authController');

    // Import Models
    const AdminModel = require('./models/AdminModel');
    const UserModel = require('./models/UserModel');
    const BuildingModel = require('./models/BuildingModel');
    const NotificationModel = require('./models/NotificationModel');
    const CompanyModel = require('./models/CompanyModel');
    const PersonModel = require('./models/PersonModel');

    // Initialize Model Instances
    const adminModelInstance = new AdminModel(db);
    const userModelInstance = new UserModel(db);
    const buildingModelInstance = new BuildingModel(db);
    const notificationModelInstance = new NotificationModel(db);
    const companyModelInstance = new CompanyModel(db);
    const peopleModelInstance = new PersonModel(db);

    // -------------------------------------
    // 🔒 Authentication Middleware
    // -------------------------------------
     // Middleware: Ensure user is logged in
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
    // Middleware: Restrict admin-only pages
    function ensureAdmin(req, res, next) {
        if (req.session.userRole === 'admin') {
            return next();
        } else {
            req.flash('errors', 'Admin access only.');
            return res.redirect('/dashboard');
        }
    }

    // -------------------------------------
    // 🌐 Public Routes
    // -------------------------------------
    router.get('/', (req, res) => homeController.home(req, res, db));
    router.post('/login', authController.login);
    router.get('/logout', authController.logout);
    // Show all staff for a company with matching ID
    router.get('/companies/:id', (req, res) => {
        companiesController.getCompanyById(req, res, companyModelInstance);
    });
    // Show person notification page
    router.get('/companies/person/:id', (req, res) => {
        const { id } = req.params;
        peopleController.getPersonById(req, res, peopleModelInstance, id);
    });
    // -------------------------------------
    // 🔒 Restricted User Routes
    // -------------------------------------
    // Middleware: Restrict standard users (prevent admins from accessing /dashboard)
    function ensureUser(req, res, next) {
        if (req.session.userRole === 'user') {
            return next();
        } else {
            req.flash('errors', 'Access restricted.');
            return res.redirect('/admin');
        }
    }

    router.get('/dashboard', ensureAuthenticated, ensureUser, async (req, res) => {
        try {
            console.log("Fetching companies for dashboard...");
            
            // Use the already initialized companyModelInstance
            const companies = await companyModelInstance.getCompanies(); 
        
            // console.log("Companies retrieved:", companies);
        
            res.render('home/dashboard.ejs', { 
                userRole: req.session.userRole, 
                companies,
                error: null // ✅ Always define 'error', even if empty
            });
        } catch (error) {
            console.error("Error fetching companies:", error);
            res.render('home/dashboard.ejs', { 
                userRole: req.session.userRole, 
                companies: [], 
                error: "Failed to load companies." // ✅ Ensures 'error' is always present
            });
        }
    });
    
    async function fetchBuildingData(req, res, next) {
        try {
            const building = await buildingModelInstance.getBuilding();
            res.locals.building = building; // Make building data available as a local variable in views
        } catch (error) {
            console.error('Failed to fetch building data:', error);
        }
        next();
    }
    
    // Apply this middleware globally or to specific routes
    router.use(fetchBuildingData);
    
    // -------------------------------------
    // 🔒 Protected Admin Routes
    // -------------------------------------
    router.get('/admin', ensureAuthenticated, (req, res) =>
        adminController.index(req, res, adminModelInstance, buildingModelInstance)
    );

    router.get('/admin/notifications', ensureAuthenticated, async (req, res) => {
        try {
            await notificationController.getNotifications(req, res, notificationModelInstance);
        } catch (error) {
            console.error("Error in /admin/notification route:", error);
            req.flash('errors', 'Failed to load notifications.');
            res.redirect('/admin');
        }
    });

    // Add routes for updating SMS and EMAIL separately
    router.put('/admin/notifications/update-sms', ensureAuthenticated, async (req, res) => {
        try {
            await notificationController.updateSMS(req, res, notificationModelInstance);
        } catch (error) {
            console.error("❌ Error in updating SMS notifications:", error);
            req.flash('errors', 'From router: Failed to update SMS notifications.');
            res.redirect('/admin/notifications');
        }
    });

    router.put('/admin/notifications/update-email', ensureAuthenticated, async (req, res) => {
        try {
            await notificationController.updateEMAIL(req, res, notificationModelInstance);
        } catch (error) {
            console.error("❌ Error in updating EMAIL notifications:", error);
            req.flash('errors', 'Failed to update EMAIL notifications.');
            res.redirect('/admin/notifications');
        }
    });
    
    // Post errors
    router.post('/admin', ensureAuthenticated, (req, res) =>
        adminController.index(req, res, adminModelInstance, buildingModelInstance, userModelInstance)
    );

    // Get building information
    router.get('/admin/building', ensureAuthenticated, (req, res) =>
        buildingController.getBuilding(req, res, buildingModelInstance)
    );
    // Add new building information
    router.post('/admin/building', ensureAuthenticated, (req, res) =>
        buildingController.saveBuilding(req, res, buildingModelInstance)
    );
    // Edit building information
    router.put('/admin/building', ensureAuthenticated, (req, res) =>
        buildingController.updateBuilding(req, res, buildingModelInstance)
    );

    // Get all users
    router.get('/admin/users', ensureAuthenticated, async (req, res) => {
        try {
            await usersController.getUsers(req, res, userModelInstance);
        } catch (error) {
            console.error("Error in /admin/users route:", error);
            req.flash('errors', 'Failed to load users.');
            res.redirect('/admin');
        }
    });
    // Add new user information
    router.post('/admin/user', ensureAuthenticated, (req, res) =>
        userController.saveUser(req, res, userModelInstance)
    );
    router.put('/admin/user', ensureAuthenticated, (req, res) =>
        userController.editUser(req, res, userModelInstance)
    );
    // Delete user
    router.delete('/admin/user/delete/:id', ensureAuthenticated, (req, res) => userController.deleteItem(req, res, userModelInstance)
    );

    // Get all companies
    router.get('/admin/companies', ensureAuthenticated, (req, res) =>
        companiesController.getCompanies(req, res, companyModelInstance)
    );
    // Add new company information
    router.post('/admin/companies/add', ensureAuthenticated, (req, res) =>
        companiesController.addCompany(req, res, companyModelInstance)
    );
    // Edit company information
    router.get('/admin/companies/:id/people', ensureAuthenticated, (req, res) =>
        peopleController.getPeopleByCompanyId(req, res, peopleModelInstance)
    );
    // Get all people
    router.get('/admin/companies/edit/:id', ensureAuthenticated, (req, res) =>
        companiesController.editCompany(req, res, companyModelInstance)
    );
    // Edit company information
    router.put('/admin/companies/edit/:id', ensureAuthenticated, (req, res) =>
        companiesController.updateCompany(req, res, companyModelInstance)
    );
    // Delete company information using ID
    router.delete('/admin/companies/delete/:id', ensureAuthenticated, (req, res) => companiesController.deleteItem(req, res, companyModelInstance)
    );

    // Get person using ID
    router.get('/admin/companies/:id/people', ensureAuthenticated, (req, res) =>
        peopleController.getPeopleByCompanyId(req, res, peopleModelInstance)
    ); // Route for rendering people.ejs template in browser

    // Edit person information
    router.get('/admin/companies/:companyId/people/edit/:personId', ensureAuthenticated, (req, res) => {
        const { companyId, personId } = req.params;
        console.log("From router: ", companyId, personId);
        peopleController.editPerson(req, res, peopleModelInstance, companyId, personId);
    });
    // Add new person information
    router.post('/admin/companies/people/add', ensureAuthenticated, (req, res) =>
        peopleController.addPerson(req, res, peopleModelInstance)
    );
    // Delete person information using ID
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

    // Get all people - API route for fetching JSON data (fetch API request in client-side js)
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
