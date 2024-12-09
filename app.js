// ********************************************************************************************
// app.js handles the database connection, server initiation and middleware setup.
// ********************************************************************************************
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { connectDB, client } = require('./db'); // Import the database connection
const flash = require("connect-flash");
const dotenv = require('dotenv');
dotenv.config();  // Make .env file available globally

const app = express();

let sessionOptions = session({
    secret: process.env.CONNECTIONSTRING,
    store: MongoStore.create({
        clientPromise: client.connect(),
        collectionName: 'cookies'
    }), // Use clientPromise with connect-mongo
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24, httpOnly: true, sameSite: "strict" }
  })

// Set up view engine
app.set('views', 'views');
app.set('view engine', 'ejs');

async function startServer() {
    try {
        const db = await connectDB(); // Connect to the database and save in variable db

        // Middleware 
        app.use(sessionOptions)
        app.use(flash())
        app.use((req, res, next) => {
            res.locals.flash = req.flash.bind(req); // Make flash messages available globally in templates
            next();
        });
        app.use(express.static('public'));
        app.use('/media', express.static('media'));
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use((req, res, next) => {
            // Initialize isLoggedIn to not Logged in
            if (req.session.isLoggedIn === undefined) {
                req.session.isLoggedIn = false;
            }
            next();
        });
        
        // Invoke the exported exposted function from router.js and ass `db` as an argument to router.js
        const router = require('./router')(db); 
        app.use('/', router); // Attach router to the app

        // Start the server
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    } catch (error) {
        console.error('Failed to start the server:', error);
    }
}

startServer();
