/**
 * PersonModel Module
 *
 * This module defines the PersonModel class which extends the BaseModel to manage operations 
 * related to staff members ("people") within a company record in the 'companies' collection.
 *
 * Key functionalities include:
 * - Retrieving all people or people for a specific company.
 * - Adding a new person to a company.
 * - Updating or editing an existing person's details within a company's "people" array.
 * - Deleting a person from a company.
 * - Fetching a person by either their MongoDB ObjectId or a custom ID.
 *
 * The class employs proper validation (e.g., ObjectId checks) and error handling to ensure 
 * reliable database operations. Additionally, it integrates with the NotificationService to support 
 * notification-related features.
 */

// Import BaseModel and ObjectId
const BaseModel = require('./BaseModel');
const { ObjectId } = require('mongodb'); // Import ObjectId for MongoDB operations
const notificationService = require('../services/NotificationService'); // Import NotificationService

// Define the PersonModel class by extending BaseModel
class PersonModel extends BaseModel {
    constructor(database) {
        super(database, 'companies'); // Pass the database and collection name to BaseModel
    }

    //  Define the getPeople method to fetch all people from the database
    async getPeople() {
        try {
            return await this.getAll(); // Use BaseModel's `getAll` method
        } catch (error) {
            console.error('Database error:', error);
            throw new Error('Failed to retrieve people.');
        }
    }

    // Define the addPerson method to insert a new person into the database
    async getCompanyPeople(companyId) {
        // Validate the company ID
        if (!ObjectId.isValid(companyId)) {
            throw new Error('Invalid ObjectId.');
        }
    
        try {
            const company = await this.getById(companyId); // Fetch the company by ID
            return company && company.people ? company.people : []; // Return 'people' or an empty array
        } catch (error) {
            console.error('Error fetching company people:', error);
            throw new Error('Database error.');
        }
    }

    // Define the addPerson method to insert a new person into the database
    async deletePersonFromCompany(companyId, personId) {
    
        // Validate the company and person IDs
        if (!ObjectId.isValid(companyId)) {
            console.error('Invalid Company ID');
            return { success: false, message: 'Invalid Company ID.' };
        }
    
        try {
            // Perform a nested update to remove the person from the company
            const result = await this.collection.updateOne(
                { _id: ObjectId.createFromHexString(companyId) },
                { $pull: { people: { id: personId } } }
            );
    
            return { success: result.modifiedCount > 0 };
        } catch (error) {
            console.error('Database Error:', error);
            return { success: false, message: 'Failed to delete person.' };
        }
    }    

    // Define the addPerson method to insert a new person into the database
    async editPersonFromCompany(companyId, personId) {
    
        // Validate the company and person IDs
        if (!ObjectId.isValid(companyId)) {
            console.error('Invalid Company ID');
            return { success: false, message: 'Invalid Company ID.' };
        }
    
        try {
            const company = await this.getById(companyId); // Fetch the company by its ID
            if (!company || !company.people) {
                return { success: false, message: 'Company or people not found.' };
            }
    
            const person = company.people.find(p => p.id === personId); // Locate the person by ID

            if (!person) {
                return { success: false, message: 'Person not found.' };
            }
    
            return { success: true, data: person }; // Return the person's data
        } catch (error) {
            console.error('Database Error:', error);
            return { success: false, message: 'Failed to fetch person data.' };
        }
    }     
    
    // Define the addPerson method to insert a new person into the database
    async getPersonById(personId) {
        // Validate the person ID
        if (!ObjectId.isValid(personId)) {
            throw new Error('Invalid ObjectId.');
        }

        try {
            return await this.getById(personId); // Use BaseModel's `getById` method
        } catch (error) {
            console.error('Database error:', error);
            throw new Error('Failed to retrieve person data.');
        }
    }

    // Define the addPerson method to insert a new person into the database
    async updateCompanyPeople(companyId, personData) {

        console.log("From PersonModel.update ", companyId); 

        //  Validate the company ID
        if (!ObjectId.isValid(companyId)) {
            console.error('Invalid ObjectId');
            return { success: false, message: 'Invalid Company ID.' };
        }
    
        try {
            // Perform a nested update to push the new person into the company
            const result = await this.collection.updateOne(
                { _id: ObjectId.createFromHexString(companyId) }, // Match the company by its ID
                { $push: { people: personData } } // Push the new person into the `people` array
            );
            if (result.modifiedCount === 0) {
                return { success: false, message: 'No staff members found.' };
            }
            return { success: true, message: 'Success.  Staff members updated/loaded.' };
        } catch (error) {
            console.error('Error updating company people:', error);
            return { success: false, message: 'Failed to update people.' };
        }
    }

    // Define the addPerson method to insert a new person into the database
    async updatePerson(companyId, personId, personData) {
        console.log("PersonModel.updatePerson called", companyId, personId, personData.name);
    
        // Validate the company and person IDs
        if (!ObjectId.isValid(companyId)) {
            return { success: false, message: 'Invalid Company ID.' };
        }
    
        // Validate the person data
        if (!personData.name || !personData.reply || !personData.image) {
            return { success: false, message: 'Invalid data for update.' };
        }
    
        try {
            // Perform a nested update directly in PersonModel
            const result = await this.collection.updateOne(
                { _id: ObjectId.createFromHexString(companyId), 'people.id': personId },
                { $set: { 'people.$': personData } } // `$` refers to the matched element in the array
            );
    
            return { success: result.modifiedCount > 0 };
        } catch (error) {
            console.error('Error updating person in company:', error);
            return { success: false, message: 'Failed to update person due to a database error.' };
        }
    }
    
    // Define the addPerson method to insert a new person into the database
    async getPersonByCustomId(customId) {
        try {
            // Find the person by their custom ID
            const person = await this.collection.findOne(
                { 'people.id': customId }, 
                { projection: { 'people.$': 1 } } // Projection to return only the matched person
            );
            return person?.people?.[0] || null;
        } catch (error) {
            console.error('Database error:', error);
            throw new Error('Failed to retrieve person data.');
        }
    }
    
}

module.exports = PersonModel;
