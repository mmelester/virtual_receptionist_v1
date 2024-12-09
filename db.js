// ********************************************************************************************
// db.js manages the MongoDB connection to the virtual_receptionist collection using MongoClient
// ********************************************************************************************
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

let _db; // Store the initialized database connection
let _client; // Store the MongoClient instance

const client = new MongoClient(process.env.CONNECTIONSTRING);

async function connectDB() {
    if (_db) return _db; // Return the existing connection if already initialized

    try {
        await client.connect(); // Connect to MongoDB
        console.log('Connected to MongoDB successfully!');
        _db = client.db('virtual_receptionist'); // Reference the database
        _client = client; // Store the client for session middleware
        return _db;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

function getClient() {
    if (!_client) throw new Error('MongoClient not initialized. Call connectDB() first.');
    return _client;
}

module.exports = { connectDB, getClient, client };

