/**
 * Main Application Entry Point (app.js)
 *
 * This file handles the overall initialization and startup of the Express server, including:
 * 
 * 1. Database Connection:
 *    - Connects to the MongoDB database using connectDB().
 *    - Retrieves the MongoClient instance via getClient().
 *
 * 2. Data Initialization:
 *    - Checks if user records exist in the database and creates a default user if none are found.
 *    - Checks if notification records exist and creates default notifications using preset messages if needed.
 *
 * 3. Middleware and Session Setup:
 *    - Configures session management with express-session and stores sessions in MongoDB using connect-mongo.
 *    - Sets up flash messaging with connect-flash for user notifications.
 *    - Configures middleware for parsing JSON and URL-encoded request bodies.
 *    - Serves static files from designated directories.
 *
 * 4. Global Variables and View Engine:
 *    - Passes global session data (e.g., isLoggedIn and userRole) to views.
 *    - Sets EJS as the view engine and specifies the views directory.
 *
 * 5. Routing and Server Startup:
 *    - Imports and uses a router module that receives the database connection.
 *    - Starts the server on the specified PORT (from environment variables or defaults to 3000) and logs 
 *      the running URL.
 *
 * This setup ensures that the application has its necessary database records, session handling, and middleware
 * in place before handling incoming HTTP requests.
 */

// Import required modules
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { connectDB, getClient } = require('./db');
const flash = require("connect-flash");
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Import models and messages
const UserModel = require('./models/UserModel');
const NotificationModel = require('./models/NotificationModel');
const Messages = require('./src/messages');

// Create an Express application
const app = express();

// Check if user data record exist and if not create it.
async function initializeUsers(db) {

    try {
        // Check if users data record exist and if not create it with the default admin credentials in .env
        const userModel = new UserModel(db);

        // Get all users from the database  
        const users = await userModel.getUsers();
        console.log("Users = ", users);
        
        // If no users are found, create a default user record
        if (!users || users.length === 0) {
            console.log('No users found. Creating default user record...');
            const defaultUser = {
                username: process.env.DEFAULT_USERNAME,
                password: process.env.DEFAULT_PASSWORD,
                email: "dummyemail@gmail.com"
            };
            
            // Insert the default user record into the database
            await db.collection('users').insertOne(defaultNotification);
            console.log('Default users database entry created successfully.');
        } else {
            console.log('users database record found.');
        }
    } catch (error) {
        console.error('Error initializing users:', error);
    }
}

// Check if notification data record exist and if not create it with the default notifications in /src/messages
async function initializeNotifications(db) {

    try {
        // Check if notifications data record exist and if not create it with the default notifications in /src/messages
        const notificationModel = new NotificationModel(db);
        const notifications = await notificationModel.getNotifications();
        
        // If no notifications are found, create a default notification record
        if (!notifications || notifications.length === 0) {
            console.log('No notifications found. Creating default notification record...');
            const defaultNotification = {
                SMS: Messages.SMS,
                EMAIL: Messages.EMAIL,
                createdAt: new Date(),
                updatedAt: new Date()
            };
           // Insert the default notification record into the database 
            await db.collection('notifications').insertOne(defaultNotification);
            console.log('Default notifications created successfully.');
        } else {
            console.log('Notifications record found.');
        }
    } catch (error) {
        console.error('Error initializing notifications:', error);
    }
}

// Start the server after initializing the database and data records 
async function startServer() {

    try {
        const db = await connectDB(); // Connect to the database
        const client = getClient(); // Retrieve the MongoClient instance

        await initializeUsers(db); // Check and create users if absent at startup
        await initializeNotifications(db); // Check and create notifications if absent  at startup

        // Session options
        const sessionOptions = session({
            secret: process.env.CONNECTIONSTRING, // Secret key for session
            store: MongoStore.create({
                client, // Use the initialized client
                collectionName: 'cookies'
            }),
            resave: false, // Don't save session if unmodified
            // saveUninitialized: false, // Don't create session until something stored
            // cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true, sameSite: "strict" }
            cookie: { httpOnly: true, sameSite: "strict" }
        });

        // Middleware setup
        app.use(sessionOptions); // Use session management
        app.use(flash()); // Use flash messaging
        // Pass flash messages to all views
        app.use((req, res, next) => {
            res.locals.flash = req.flash.bind(req); // Flash messages globally
            next();
        });
        // Serve static files from the public and frontend-js directories
        app.use('/frontend-js', express.static(__dirname + '/frontend-js'));
        // Serve static files from the public directory
        app.use(express.static('public'));
        // Parse JSON and URL-encoded request bodies
        app.use(express.json({ limit: '5mb' }));  // Set JSON body limit to 5 MB
        app.use(express.urlencoded({ limit: '1mb', extended: true })); // Set URL-encoded body limit to 1 MB

        // Pass isLoggedIn globally
        app.use((req, res, next) => {
            if (!req.session) {
                return next();
            }
        
            if (typeof req.session.isLoggedIn === 'undefined') {
                req.session.isLoggedIn = false; // Default to false
            }
        
            if (typeof req.session.userRole === 'undefined') {
                req.session.userRole = 'guest';
            }
        
            res.locals.isLoggedIn = req.session.isLoggedIn; // Pass isLoggedIn to all views
            res.locals.userRole = req.session.userRole; // Pass userRole to all views
        
            next(); 
        });
        
        app.set('views', 'views'); // Specify the views directory
        app.set('view engine', 'ejs'); // Set EJS as the default view engine

        // Routes setup 
        const router = require('./router')(db); // Pass database to router
        app.use('/', router); 

        // Start the server
        app.listen(process.env.PORT || 3000, () => { 
            const port = process.env.PORT || 3000; // Use the specified port or default to 3000
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Failed to start the server:', error);
    }
}

// Start the server
startServer();
