module.exports = {
    async index(req, res, adminModel, buildingModel) {
        try {
            const stats = await adminModel.getAdminStats();
            let building = null;
            let buildingExists = false;

            try {
                // Attempt to fetch building data
                building = await buildingModel.getBuilding();
                if (building) {
                    buildingExists = true; // Flag that building record exists
                }
            } catch (buildingError) {
                console.error('Error fetching building data:', buildingError);
                req.flash('errors', ['Failed to load building information.']);
            }

            const errors = req.flash('errors');
            const success = req.flash('success');
            const isLoggedIn = req.session && req.session.isLoggedIn;

            // Render the admin dashboard with stats, building data, and buildingExists flag
            res.render('admin/index', { stats, building, buildingExists, errors, success, isLoggedIn });
        } catch (error) {
            console.error('Error loading admin dashboard:', error);
            req.flash('errors', ['Failed to load admin dashboard.']);
            req.session.save(() => res.redirect('/'));
        }
    }
};
