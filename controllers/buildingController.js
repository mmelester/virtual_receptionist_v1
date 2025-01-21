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
                    return res.status(200).json({ success: true, message: 'Building updated successfully!' });
                } else {
                    return res.status(400).json({ success: false, message: 'Failed to update the building.' });
                }
            } else {
                // Create a new record
                const result = await BuildingModel.addBuilding({ name, intro, image });
                if (result.success) {
                    return res.status(200).json({ success: true, message: 'Building created successfully!' });
                } else {
                    return res.status(400).json({ success: false, message: 'Failed to create the building.' });
                }
            }
        } catch (error) {
            console.error('Error saving building:', error);
            res.status(500).json({ success: false, message: 'An unexpected error occurred.' });
        }
    },

    async getBuilding(req, res, BuildingModel) {
        try {
            const building = await BuildingModel.getBuilding();
            const buildingExists = !!building;
            return res.status(200).json({ success: true, data: building, buildingExists });
        } catch (error) {
            console.error('Error fetching building:', error);
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
    }
    
    
};
