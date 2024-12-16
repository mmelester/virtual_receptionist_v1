class BaseModel {
    constructor(database, collectionName) {
        this.db = database;
        this.collection = database.collection(collectionName);
    }

    async add(data) {
        try {
            const result = await this.collection.insertOne(data);
            return { success: true, result };
        } catch (error) {
            console.error('Error adding data:', error);
            return { success: false, message: 'Database error.' };
        }
    }

    async getAll() {
        try {
            return await this.collection.find({}).toArray();
        } catch (error) {
            console.error('Error fetching data:', error);
            throw new Error('Database error.');
        }
    }

    async getById(id) {
        try {
            return await this.collection.findOne({ _id: new ObjectId(id) });
        } catch (error) {
            console.error('Error fetching data by ID:', error);
            throw new Error('Database error.');
        }
    }

    async delete(id) {
        try {
            return await this.collection.deleteOne({ _id: new ObjectId(id) });
        } catch (error) {
            console.error('Error deleting data:', error);
            return { success: false, message: 'Database error.' };
        }
    }

    async update(id, data) {
        try {
            const result = await this.collection.updateOne(
                { _id: new ObjectId(id) },
                { $set: data }
            );
            return { success: result.modifiedCount > 0 };
        } catch (error) {
            console.error('Error updating data:', error);
            return { success: false, message: 'Database error.' };
        }
    }
}
