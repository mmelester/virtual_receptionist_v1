module.exports = {
    async saveBuilding(req, res, BuildingModel) {
        const { name, intro, image } = req.body;

        if (!name || !intro || !image) {
            return res.status(400).json({ success: false, message: 'Name, intro, and image are required.' });
        }

        try {
            const existingBuilding = await BuildingModel.getBuilding();

            if (existingBuilding) {
                // Update the existing record
                const result = await BuildingModel.updateBuilding(existingBuilding._id, { name, intro, image });
                if (result.success) {
                    return req.session.save(() => res.status(200).json({ success: true, message: 'Building updated successfully!' }));
                } else {
                    req.flash('errors', [result.message]);
                    return req.session.save (() =>res.status(400).json({ success: false, message: 'Failed to retrieve the building record.' }));
                }
            } else {
                // Create a new record
                const result = await BuildingModel.addBuilding({ name, intro, image });
                if (result.success) {
                    req.flash('success', 'Building record added successfully!');
                    return req.session.save(() => res.status(200).json({ success: true, refresh: true, message: 'Building added successfully!' }));
                } else {
                    req.flash('errors', [result.message]);
                    return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
                }
            }
        } catch (error) {
            console.error('Error saving building:', error);
            req.flash('errors', ['Failed to add building.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred on the server.' }));
        }
    },

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
    async deleteItem(req, res, buildingModel) {
        try {
            const buildingId = req.params.id;
            const result = await buildingModel.deleteItem(buildingId); 
            if (!result.success) {
                req.flash('errors', [result.message]);
                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }

            req.flash('success', 'Building record deleted successfully!');
            req.session.save(() => res.status(200).json({ success: true, message: 'Building record deleted successfully!' }));
        } catch (error) {
            console.error('Error deleting building record:', error);
            req.flash('errors', ['Failed to delete building.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred while deleting the building record.' }));
        }
    },
    
};
