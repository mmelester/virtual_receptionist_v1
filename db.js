/**
 * Database Connection Module (db.js)
 *
 * This module is responsible for establishing and managing the MongoDB connection for the "virtual_receptionist" 
 * application.
 * 
 * It uses the MongoClient from the 'mongodb' package to connect to the database using a connection string provided 
 * in environment variables.
 *
 * Key functionalities:
 * - connectDB(): An asynchronous function that connects to MongoDB and returns a reference to the "
 * virtual_receptionist" database.
 *              If a connection already exists, it reuses the existing connection.
 * - getClient(): Returns the initialized MongoClient instance, which is useful for session middleware and other 
 * operations.
 * - Exports the MongoClient instance for potential reuse elsewhere in the application.
 *
 * Error Handling:
 * - Logs and throws errors encountered during the connection process to ensure proper error reporting.
 */

// Import required modules
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from the .env file

let _db; // Store the initialized database connection
let _client; // Store the MongoClient instance

const client = new MongoClient(process.env.CONNECTIONSTRING);

// Connect to MongoDB and return the database reference
async function connectDB() {
    if (_db) return _db; // Return the existing connection if already initialized

    try {
        // Connect to MongoDB using the connection string
        await client.connect(); // Connect to MongoDB
        console.log('Connected to MongoDB successfully!');
        _db = client.db('virtual_receptionist'); // Reference the database
        _client = client; // Store the client for session middleware
        return _db; // Return the database reference

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

// Return the initialized MongoClient instance for reuse in other modules
function getClient() {
    if (!_client) throw new Error('MongoClient not initialized. Call connectDB() first.');
    return _client;
}

// Export the functions and the MongoClient instance
module.exports = { connectDB, getClient, client };

