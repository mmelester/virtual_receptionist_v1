class AdminModel {
    constructor(database) {
        this.db = database;
    }

    async getAdminStats() {
        try {
            const stats = {
                companyCount: await this.db.collection('companies').countDocuments(),
                // Add more admin-specific stats here
            };
            return stats;
        } catch (error) {
            console.error('Error fetching admin stats:', error);
            throw new Error('Failed to retrieve admin stats.');
        }
    }
}

module.exports = AdminModel;
