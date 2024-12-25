const BaseModel = require('./BaseModel');
const { ObjectId } = require('mongodb'); // Import ObjectId for MongoDB operations

class PersonModel extends BaseModel {
    constructor(database) {
        super(database, 'companies'); // Pass the database and collection name to BaseModel
    }

    async addPerson(personData) {
        const { name, reply, mobile, email, outlet, image } = personData;

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
        console.log('Company ID:', companyId);
        console.log('Person ID:', personId);
    
        if (!ObjectId.isValid(companyId)) {
            console.error('Invalid Company ID');
            return { success: false, message: 'Invalid Company ID.' };
        }
    
        try {
            const result = await this.collection.updateOne(
                { _id: ObjectId.createFromHexString(companyId) },
                { $pull: { people: { id: personId } } }
            );
    
            console.log('Database Update Result:', result);
    
            return { success: result.modifiedCount > 0 };
        } catch (error) {
            console.error('Database Error:', error);
            return { success: false, message: 'Failed to delete person.' };
        }
    }    

    async editPersonFromCompany(companyId, personId) {
        console.log('Company ID:', companyId);
        console.log('Person ID:', personId);
    
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
        if (!ObjectId.isValid(companyId)) {
            throw new Error('Invalid ObjectId.');
        }
    
        try {
            const result = await this.collection.updateOne(
                { _id: ObjectId.createFromHexString(companyId) }, // Match the company by its ID
                { $push: { people: personData } } // Push the new person into the `people` array
            );
            return { success: result.modifiedCount > 0 };
        } catch (error) {
            console.error('Error updating company people:', error);
            return { success: false, message: 'Failed to update people.' };
        }
    }
    
}

module.exports = PersonModel;
