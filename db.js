// ********************************************************************************************
// db.js manages the MongoDB connection to the virtual_receptionist collection using MongoClient
// ********************************************************************************************
const { MongoClient } = require('mongodb');  // Import a specific object, {MangoClient} from the mongodb library
const dotenv = require('dotenv');
dotenv.config();

const client = new MongoClient(process.env.CONNECTIONSTRING); // Create a new instance of the MangoClient class 

async function connectDB() {
    try {
        await client.connect(); // Connect to MongoDB using the MongoClient connect() method
        console.log('Connected to MongoDB successfully!');
        // Return a reference to a database object (database name) using the db() method
        return client.db('virtual_receptionist');  
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}
// Export the database connection function and the new instance of MongoClient
module.exports = { connectDB, client };  
