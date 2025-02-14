/**
 * Admin Dashboard Controller
 *
 * This module exports an asynchronous function `index` that handles the rendering of the admin dashboard.
 * 
 * When invoked, the function performs the following steps:
 * 1. Logs a message indicating that the admin dashboard route has been accessed.
 * 2. Retrieves administrative statistics using the provided admin model (currently not used anywhere).
 * 3. Attempts to fetch building data using the building model:
 *    - If building data is found, a flag (`buildingExists`) is set to true.
 *    - If an error occurs during building data retrieval, an error message is flashed.
 * 4. Retrieves any flashed error or success messages.
 * 5. Checks if the user is logged in via session data.
 * 6. Renders the admin dashboard view (`admin/index`) with the following data:
 *    - Administrative statistics (`stats`)
 *    - Building data (`building`) and existence flag (`buildingExists`)
 *    - Flashed error (`errors`) and success messages (`success`)
 *    - User's login status (`isLoggedIn`)
 *
 * In the event of an error while retrieving the admin statistics, the function logs the error,
 * flashes an error message, saves the session, and redirects the user to the home page.
 */

module.exports = {
    // Handle rendering of the admin dashboard
    async index(req, res, adminModel, buildingModel) {

        console.log("adminController.index called");

        try {
            // Fetch admin stats
            const stats = await adminModel.getAdminStats();
            let building = null;
            let buildingExists = false;

            try {
                // Attempt to fetch building data
                building = await buildingModel.getBuilding();
                // console.log("building = ", building);
                if (building) {
                    buildingExists = true; // Flag that building record exists
                    console.log("Building Record Present")
                } else {
                    buildingExists = false; // Flag the no building record has been created
                }
            } catch (buildingError) {
                // Log error and flash error message
                console.error('Error fetching building data:', buildingError);
                req.flash('errors', ['Failed to load building information.']);
            }

            // Retrieve flashed messages
            const errors = req.flash('errors');
            const success = req.flash('success');
            const isLoggedIn = req.session && req.session.isLoggedIn;

            // Render the admin dashboard with stats, building data, and buildingExists flag
            res.render('admin/index', { 
                stats, 
                building, 
                buildingExists, 
                errors, 
                success, 
                isLoggedIn,
            });
            
        } catch (error) {
            // Log error and flash error message
            console.error('Error loading admin dashboard:', error);
            req.flash('errors', ['Failed to load admin dashboard.']);
            req.session.save(() => res.redirect('/'));
        }
    }
};
