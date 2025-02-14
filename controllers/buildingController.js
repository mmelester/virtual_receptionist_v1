/**
 * Building Controller Module
 *
 * This module exports functions to handle CRUD operations for building records in the application.
 * It interacts with the BuildingModel to perform the following tasks:
 *
 * - saveBuilding(req, res, BuildingModel):
 *     Validates that all required fields (name, intro, image) are provided.
 *     Checks for an existing building record:
 *       - If one exists, updates it with the new data.
 *       - If none exists, creates a new building record.
 *     Returns a JSON response indicating success or failure and uses session flash messages for notifications.
 *
 * - getBuilding(req, res, BuildingModel):
 *     Retrieves the current building record from the database.
 *     Returns a JSON response containing the building data, a flag indicating the existence of a building record,
 *     any flash messages, and the user's login status.
 *
 * - updateBuilding(req, res, BuildingModel):
 *     Validates that all required fields (name, intro, image) are provided.
 *     Checks if a building record exists and if the new data differs from the existing data.
 *     If changes are detected, updates the building record.
 *     Returns a JSON response indicating the outcome of the update operation.
 *
 * - deleteItem(req, res, BuildingModel):
 *     Deletes a building record based on the ID provided in the request parameters.
 *     Returns a JSON response indicating success or failure, along with appropriate flash messages.
 *
 * Each function handles errors by logging the error, flashing appropriate error messages,
 * and saving the session before sending a JSON response with the error details.
 */

module.exports = {

    // Save a new building record or update an existing one
    async saveBuilding(req, res, BuildingModel) {
        const { name, intro, image } = req.body;

        // Validate the input
        if (!name || !intro || !image) {
            return res.status(400).json({ success: false, message: 'Name, intro, and image are required.' });
        }
        // Check if a building record already exists
        try {
            const existingBuilding = await BuildingModel.getBuilding();

            if (existingBuilding) {
                // Update the existing record
                const result = await BuildingModel.updateBuilding(existingBuilding._id, { name, intro, image });
                if (result.success) {
                    return req.session.save(() => res.status(200).json({ success: true, message: 'Building updated successfully!' }));
                } else {
                    // Error updating the record
                    req.flash('errors', [result.message]);
                    return req.session.save (() =>res.status(400).json({ success: false, message: 'Failed to retrieve the building record.' }));
                }
            } else {
                // Create a new record
                const result = await BuildingModel.addBuilding({ name, intro, image });
                if (result.success) {
                    // Record added successfully, save session, and return a success response
                    req.flash('success', 'Building record added successfully!');
                    return req.session.save(() => res.status(200).json({ success: true, refresh: true, message: 'Building added successfully!' }));
                } else {
                    // Error adding the record, save session, and return an error response
                    req.flash('errors', [result.message]);
                    return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
                }
            }
        } catch (error) {
            // Log the erro, save session and return a server error response
            console.error('Error saving building:', error);
            req.flash('errors', ['Failed to add building.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred on the server.' }));
        }
    },

    // Get the current building record
    async getBuilding(req, res, BuildingModel) {
        try {
            const building = await BuildingModel.getBuilding();
            const buildingExists = !!building;
            const errors = req.flash('errors');
            const success = req.flash('success');
            const isLoggedIn = req.session && req.session.isLoggedIn;
            return res.status(200).json({ success: true, data: building, buildingExists, isLoggedIn });
        } catch (error) {
            console.error('Error fetching building:', error);
            req.flash('errors', ['Failed to retrieve building record from database.']);
            res.status(500).json({ success: false, message: 'An unexpected error occurred.' });
        }
    },

    // Update the building record
    async updateBuilding(req, res, BuildingModel) {
        console.log("buildingController.updateBuilding Called");
        const { name, intro, image } = req.body;
    
        if (!name || !intro || !image) {
            return res.status(400).json({ success: false, message: 'Name, intro, and image are required.' });
        }
    
        try {
            const existingBuilding = await BuildingModel.getBuilding();
            console.log('Updating building with ID:', existingBuilding._id, 'Type:', typeof existingBuilding._id);
    
            if (!existingBuilding || !existingBuilding._id) {
                return res.status(404).json({ success: false, message: 'Building record not found.' });
            }
            // Check if the new data is identical to the existing data
            const isUnchanged = 
            existingBuilding.name === name &&
            existingBuilding.intro === intro &&
            existingBuilding.image === image;

            if (isUnchanged) {
                return res.status(200).json({ success: true, message: 'No changes detected.' });
            }

            // Proceed with the update
    
            const result = await BuildingModel.updateBuilding(existingBuilding._id, { name, intro, image });
    
            if (result.success) {
                return res.status(200).json({ success: true, message: 'Building updated successfully!' });
            } else {
                return res.status(400).json({ success: false, message: 'Failed to update the building.' });
            }
        } catch (error) {
            console.error('Error updating building:', error);
            res.status(500).json({ success: false, message: 'An unexpected error occurred.' });
        }
    },
   
    // async editBuilding(req, res, BuildingModel) {
    //     try {
    
    //         // Fetch the building details
    //         const building = await BuildingModel.getBuilding();
    
    //         if (!building) {
    //             return res.status(404).json({ success: false, message: 'Building not found or invalid ID.' });
    //         }
    
    //         // Return the building details
    //         res.status(200).json({ success: true, data: building });
    //     } catch (error) {
    //         console.error('Error editing staff member:', error);
    //         req.flash('errors', ['Failed to edit staff member.']);
    //         req.session.save(() => res.status(500).json({ success: false, message: 'Failed to fetch building information from database.' }));
    //     }
    // },

    // Delete a building record
    async deleteItem(req, res, BuildingModel) {
        try {
            // Get the building ID from the request parameters
            const buildingId = req.params.id;
            const result = await BuildingModel.deleteItem(buildingId); 
            if (!result.success) {
                // Error deleting the record - save session and return an error response
                req.flash('errors', [result.message]);
                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }

            // Record deleted successfully - save session and return a success response
            req.flash('success', 'Building record deleted successfully!');
            req.session.save(() => res.status(200).json({ success: true, message: 'Building record deleted successfully!' }));
        } catch (error) {
            // Log the error, save session, and return a server error response
            console.error('Error deleting building record:', error);
            req.flash('errors', ['Failed to delete building.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred while deleting the building record.' }));
        }
    },
    
};
