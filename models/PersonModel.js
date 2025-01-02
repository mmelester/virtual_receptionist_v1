const BaseModel = require('./BaseModel');
const { ObjectId } = require('mongodb'); // Import ObjectId for MongoDB operations

class PersonModel extends BaseModel {
    constructor(database) {
        super(database, 'companies'); // Pass the database and collection name to BaseModel
    }

    async addPerson(personData) {
        const { name, reply, mobile, email, outlet, image } = personData;

        console.log("addPerson ", name);

        // Validation
        if (!name || !reply || !image) {
            return { success: false, message: 'Name, reply, and logo image are required.' };
        }

        try {
            return await this.add({ name, reply, mobile, email, outlet, image }); // Use BaseModel's `add` method
        } catch (error) {
            console.error('Database error:', error);
            return { success: false, message: 'Failed to add the person due to a database error.' };
        }
    }

    async getPeople() {
        try {
            return await this.getAll(); // Use BaseModel's `getAll` method
        } catch (error) {
            console.error('Database error:', error);
            throw new Error('Failed to retrieve people.');
        }
    }

    async getCompanyPeople(companyId) {
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

    async deletePersonFromCompany(companyId, personId) {
    
        if (!ObjectId.isValid(companyId)) {
            console.error('Invalid Company ID');
            return { success: false, message: 'Invalid Company ID.' };
        }
    
        try {
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

    async editPersonFromCompany(companyId, personId) {
    
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
        
    async getPersonById(personId) {
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

    async updateCompanyPeople(companyId, personData) {

        console.log("From PersonModel.update ", companyId);

        if (!ObjectId.isValid(companyId)) {
            console.error('Invalid ObjectId');
            return { success: false, message: 'Invalid Company ID.' };
        }
    
        try {
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

    async updatePerson(companyId, personId, personData) {
        console.log("PersonModel.updatePerson called", companyId, personId, personData.name);
    
        if (!ObjectId.isValid(companyId)) {
            return { success: false, message: 'Invalid Company ID.' };
        }
    
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
    
    
}

module.exports = PersonModel;
