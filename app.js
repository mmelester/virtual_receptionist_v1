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

const app = express();

async function startServer() {
    try {
        const db = await connectDB(); // Connect to the database
        const client = getClient(); // Retrieve the MongoClient instance

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
            if (req.session.isLoggedIn === undefined) {
                req.session.isLoggedIn = false; // Default to false
            }
            // res.locals.isLoggedIn = req.session.isLoggedIn;
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
