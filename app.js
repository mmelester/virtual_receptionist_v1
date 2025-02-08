// ********************************************************************************************
// app.js handles the database connection, server initiation and middleware setup.
// ********************************************************************************************
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { connectDB, getClient } = require('./db');
const flash = require("connect-flash");
const dotenv = require('dotenv');
dotenv.config();
const UserModel = require('./models/UserModel');
const NotificationModel = require('./models/NotificationModel');
const Messages = require('./src/messages');

const app = express();

// Check if user data record exist and if not create it.
async function initializeUsers(db) {
    try {
        const userModel = new UserModel(db);
        const users = await userModel.getUsers();

        console.log("Users = ", users);
        
        if (!users || users.length === 0) {
            console.log('No users found. Creating default user record...');
            const defaultUser = {
                username: process.env.DEFAULT_USERNAME,
                password: process.env.DEFAULT_PASSWORD,
                email: "dummyemail@gmail.com"
            };
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
        const notificationModel = new NotificationModel(db);
        const notifications = await notificationModel.getNotifications();
        
        if (!notifications || notifications.length === 0) {
            console.log('No notifications found. Creating default notification record...');
            const defaultNotification = {
                SMS: Messages.SMS,
                EMAIL: Messages.EMAIL,
                createdAt: new Date(),
                updatedAt: new Date()
            };
            await db.collection('notifications').insertOne(defaultNotification);
            console.log('Default notifications created successfully.');
        } else {
            console.log('Notifications record found.');
        }
    } catch (error) {
        console.error('Error initializing notifications:', error);
    }
}

async function startServer() {
    try {
        const db = await connectDB(); // Connect to the database
        const client = getClient(); // Retrieve the MongoClient instance

        await initializeUsers(db); // Check and create users if absent at startup
        await initializeNotifications(db); // Check and create notifications if absent  at startup

        // Session options
        const sessionOptions = session({
            secret: process.env.CONNECTIONSTRING,
            store: MongoStore.create({
                client, // Use the initialized client
                collectionName: 'cookies'
            }),
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true, sameSite: "strict" }
        });

        // Middleware setup
        app.use(sessionOptions);
        app.use(flash());
        app.use((req, res, next) => {
            res.locals.flash = req.flash.bind(req); // Flash messages globally
            next();
        });
        app.use('/frontend-js', express.static(__dirname + '/frontend-js'));
        app.use(express.static('public'));
        app.use(express.json({ limit: '5mb' }));
        app.use(express.urlencoded({ limit: '1mb', extended: true })); // Set URL-encoded body limit to 1 MB

        // Pass isLoggedIn globally
        app.use((req, res, next) => {
            if (!req.session) {
                return next();
            }
        
            if (typeof req.session.isLoggedIn === 'undefined') {
                req.session.isLoggedIn = false;
            }
        
            if (typeof req.session.userRole === 'undefined') {
                req.session.userRole = 'guest';
            }
        
            res.locals.isLoggedIn = req.session.isLoggedIn;
            res.locals.userRole = req.session.userRole;
        
            next();
        });
        
        app.set('views', 'views'); // Specify the views directory
        app.set('view engine', 'ejs'); // Set EJS as the default view engine

        // Routes
        const router = require('./router')(db); // Pass database to router
        app.use('/', router);

        // Start the server
        app.listen(process.env.PORT || 3000, () => { 
            const port = process.env.PORT || 3000;
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Failed to start the server:', error);
    }
}

startServer();
