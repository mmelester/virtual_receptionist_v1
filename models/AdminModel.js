/**
 * AdminModel Module
 *
 * This class is responsible for fetching administrative statistics from the database.
 * The getAdminStats() method currently retrieves the total count of companies (and can be extended to include more stats)
 * and handles errors by logging them and throwing an error if retrieval fails.
 */
class AdminModel {
    constructor(database) {
        this.db = database;
    }

    // Fetches admin-specific statistics
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
