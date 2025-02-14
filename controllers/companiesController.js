/**
 * Company Controller Module
 *
 * This module exports functions to manage company-related operations within the application.
 * It interfaces with the CompanyModel (and optionally the PersonModel) to perform CRUD operations
 * on company records and handles both JSON responses and view rendering.
 *
 * Available Functions:
 *
 * - getCompanies(req, res, CompanyModel)
 *     Retrieves all company records using CompanyModel.getCompanies.
 *     Renders the 'admin/companies' view with the list of companies along with any flash messages 
 *     (errors and success) and the user's login status.
 *
 * - addCompany(req, res, CompanyModel)
 *     Validates required input fields (name, intro, and image) before adding a new company record.
 *     Uses CompanyModel.addCompany to create the record and sends a JSON response indicating success 
 *     or failure, while also flashing appropriate messages.
 *
 * - deleteItem(req, res, CompanyModel)
 *     Deletes a company record based on the company ID provided in the request parameters.
 *     Utilizes CompanyModel.deleteItem to remove the record and returns a JSON response with the result,
 *     along with flashing messages as feedback.
 *
 * - editCompany(req, res, CompanyModel)
 *     Retrieves the details of a specific company by its ID using CompanyModel.getCompanyById.
 *     Returns a JSON response containing the company data, or an error if the company is not found.
 *
 * - updateCompany(req, res, CompanyModel)
 *     Validates the input data (name, intro, image) and checks if there are any changes compared to
 *     the current company record.
 *     If differences are detected, it updates the company record using CompanyModel.updateCompany and
 *     sends a JSON response with the outcome.
 *
 * - getCompanyById(req, res, CompanyModel, PersonModel)
 *     Fetches a company by its ID using CompanyModel.getCompanyById.
 *     If the company has only one associated person, redirects to that person's detail page.
 *     Otherwise, renders the company detail view, passing in the company data and the user's login status.
 *
 * Error Handling:
 *     Each function includes robust error handling by logging errors, flashing appropriate error messages,
 *     saving the session, and returning suitable JSON responses or rendering error views.
 */

module.exports = {

    // Function to get all companies from the database using the CompanyModel
    async getCompanies(req, res, CompanyModel) {

        try {
            //  Call the getCompanies method from the CompanyModel
            const companies = await CompanyModel.getCompanies(); // Aligns with CompanyModel's method name
            const errors = req.flash('errors');
            const success = req.flash('success');
            const isLoggedIn = req.session && req.session.isLoggedIn;
            //  Render the 'admin/companies' view with the list of companies
            res.render('admin/companies', { companies, errors, success, isLoggedIn });

        } catch (error) {
            //  Log the error, save session, and redirect to the admin page with an error message
            console.error('Error fetching companies:', error);
            req.flash('errors', ['Failed to retrieve companies.']);
            req.session.save(() => res.redirect('/admin'));
        }
    },

    // Function to add a new company to the database using the CompanyModel
    async addCompany(req, res, CompanyModel) {

        try {
            //  Validate the input fields (name, intro, and image) before adding a new company
            if (!req.body.name || !req.body.intro || !req.body.image) {
                req.flash('errors', ['Name, intro, and image are required.']);
                return req.session.save(() => res.redirect('/admin/companies/add'));
            }

            //  Call the addCompany method from the CompanyModel to create a new company
            const result = await CompanyModel.addCompany(req.body);

            if (!result.success) {
                //  Flash an error message and redirect to the add company page
                req.flash('errors', [result.message]);
                console.log("Results failed");
                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }

            //  Flash a success message and redirect to the admin companies page
            req.flash('success', 'Company added successfully!');
            req.session.save(() => res.status(200).json({ success: true, message: 'Company added successfully!' }));

        } catch (error) {

            //  Log the error, flash an error message, save session and return a JSON response with an error status
            console.error('Error adding company:', error);
            req.flash('errors', ['Failed to add company.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred on the server.' }));
        }
    },

    // Function to delete a company from the database using the CompanyModel and the company ID
    async deleteItem(req, res, CompanyModel) {

        try {
            //  Get the company ID from the request parameters
            const companyId = req.params.id;
            const result = await CompanyModel.deleteItem(companyId); // Aligns with CompanyModel's method name
            if (!result.success) {
                req.flash('errors', [result.message]);
                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }

            //  Flash a success message and return a JSON response with a success status
            req.flash('success', 'Company deleted successfully!');
            req.session.save(() => res.status(200).json({ success: true, message: 'Company deleted successfully!' }));

        } catch (error) {
            //  Log the error, flash an error message, save session and return a JSON response with an error status
            console.error('Error deleting company:', error);
            req.flash('errors', ['Failed to delete company.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred while deleting the company.' }));
        }
    },

    // Function to edit a company using the CompanyModel and the company ID from the request parameters
    async editCompany(req, res, CompanyModel) {

        try {
            //  Get the company ID from the request parameters and fetch the company details
            const companyId = req.params.id;
    
            // Fetch the company details
            const company = await CompanyModel.getCompanyById(companyId);
    
            if (!company) {
                return res.status(404).json({ success: false, message: 'Company not found or invalid ID.' });
            }
    
            // Return the company details
            res.status(200).json({ success: true, data: company });

        } catch (error) {
            //  Log the error, flash an error message, save session and return a JSON response with an error status
            console.error('Error editing staff member:', error);
            req.flash('errors', ['Failed to edit staff member.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'Failed to fetch company information from database.' }));
        }
    },
    
    // Function to update a company using the CompanyModel and the company ID from the request parameters 
    async updateCompany(req, res, CompanyModel) {
        // Get the name, intro, and image from the request body and the company ID from the request parameters
        const { name, intro, image } = req.body;
    
        // Input Validation
        if (!name || !intro || !image) {
            console.error('Validation failed:', { name, intro, image });
            req.flash('errors', ['Name, intro, and image are required.']);
            return req.session.save(() => res.status(400).json({ success: false, message: 'Name, intro, and image are required.' }));
        }
    
        try {

            // Fetch the current data of the company from the database using the CompanyModel
            const currentData = await CompanyModel.getCompanyById(req.params.id);

            // Compare incoming data with current data
            if (
                currentData.name === name &&
                currentData.intro === intro &&
                currentData.image === image
            ) {
                return res.status(200).json({ success: true, message: 'No changes detected.' });
            }

            // Update the company record using the CompanyModel and the company ID from the request parameters
            const result = await CompanyModel.updateCompany(req.params.id, { name, intro, image });
            if (!result.success) {
                //  Flash an error message and return a JSON response with an error status
                req.flash('errors', [result.message]);
                console.log("Results failed");
                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }
            req.flash('success', 'Company updated successfully!');
            req.session.save(() => res.status(200).json({ success: true, message: 'Company updated successfully!' }));

        } catch (error) {
            //  Log the error, flash an error message, save session and return a JSON response with an error status
            console.error('Error updating company:', error);
            req.flash('errors', ['Failed to edit staff member.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'Failed to update company.' }));
        }
    },

    // Function to get a company by its ID using the CompanyModel and render the company detail view 
    async getCompanyById(req, res, CompanyModel, PersonModel) {
        // Get the company ID from the request parameters
        const companyId = req.params.id;
    
        try {
            // Fetch the company details
            const company = await CompanyModel.getCompanyById(companyId);
    
            if (!company) {
                return res.status(404).render('error', { message: 'Company not found.', isLoggedIn: req.session && req.session.isLoggedIn });
            }
    
            // Check if there's only one person in the company
            const people = company.people || [];
            if (people.length === 1) {
                const personId = people[0].id;
                return res.redirect(`/companies/person/${personId}`);
            }
    
            // Render the company detail view with the company data and the user's login status
            res.render('companies/company', { 
                company, 
                isLoggedIn: req.session && req.session.isLoggedIn // Pass isLoggedIn to the view
            });

        } catch (error) {
            // Log the error, render an error view, and pass the user's login status
            console.error('Error fetching company details:', error);
            res.status(500).render('error', { 
                message: 'Internal server error.', 
                isLoggedIn: req.session && req.session.isLoggedIn 
            });
        }
    }
     
};
