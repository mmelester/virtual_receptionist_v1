module.exports = {
    async getPeople(req, res, PersonModel) {
        try {
            const people = await PersonModel.getPeople(); // Aligns with Person Model's method name
            const errors = req.flash('errors');
            const success = req.flash('success');
            const isLoggedIn = req.session && req.session.isLoggedIn;

            res.render('admin/people', { people, errors, success, isLoggedIn });
        } catch (error) {
            console.error('Error fetching people:', error);
            req.flash('errors', ['Failed to retrieve people.']);
            req.session.save(() => res.redirect('/admin'));
        }
    },

    // async getCompanyById(req, res, PersonModel) {
    //     try {
    //         const companyId = req.params.id;
    
    //         // Fetch the company details
    //         const company = await Model.getCompanyById(companyId);
    
    //         if (!company) {
    //             return res.status(404).json({ success: false, message: 'Company not found or invalid ID.' });
    //         }
    
    //         // Return the company details
    //         res.status(200).json({ success: true, data: company });
    //     } catch (error) {
    //         console.error('Error fetching company data:', error);
    //         res.status(500).json({ success: false, message: 'Failed to fetch company data.' });
    //     }
    // },
    async getPeopleByCompanyId(req, res, PersonModel, isApiRequest = false) {
        try {
            const companyId = req.params.id;
    
            console.log('Fetching people for company ID:', companyId);
    
            // Fetch the people array for the company
            const people = await PersonModel.getCompanyPeople(companyId);
    
            if (isApiRequest) {
                // Respond with JSON for API requests
                return res.status(200).json({ success: true, data: people });
            }
    
            // Render the EJS template for browser requests
            const errors = req.flash('errors');
            const success = req.flash('success');
            const isLoggedIn = req.session && req.session.isLoggedIn;
            res.render('admin/people', { people, errors, success, isLoggedIn, companyId }); // Pass companyId here
        } catch (error) {
            console.error('Error fetching people for company:', error);
            if (isApiRequest) {
                return res.status(500).json({ success: false, message: 'Failed to fetch people.' });
            }
            req.flash('errors', ['Failed to retrieve people for the company.']);
            req.session.save(() => res.redirect('/admin'));
        }
    },
    
    async addPerson(req, res, PersonModel) {

        try {
            const { person } = req.body;
            const companyId = req.params.id;

            console.log("addPerson from controller ", companyId)
    
            if (!person || !companyId) {
                return res.status(400).json({ success: false, message: 'Invalid data or missing company ID.' });
            }
    
            const result = await PersonModel.updateCompanyPeople(companyId, person);
    
            if (!result.success) {
                return res.status(500).json({ success: false, message: 'Failed to add person to the company.' });
            }
    
            res.status(200).json({ success: true, message: 'Person added successfully!' });
        } catch (error) {
            console.error('Error adding person:', error);
            res.status(500).json({ success: false, message: 'An unexpected error occurred on the server.' });
        }
},
    
    async deletePerson(req, res, peopleModelInstance, companyId, personId) {
        console.log('Controller - Company ID:', companyId);
        console.log('Controller - Person ID:', personId);

        try {
            const result = await peopleModelInstance.deletePersonFromCompany(companyId, personId);
            if (result.success) {
                res.status(200).json({ success: true, message: 'Person deleted successfully.' });
            } else {
                res.status(400).json({ success: false, message: result.message });
            }
        } catch (error) {
            console.error('Controller Error:', error);
            res.status(500).json({ success: false, message: 'An internal server error occurred.' });
        }
    },

    async editPerson(req, res, peopleModelInstance, companyId, personId) {
        console.log('Controller - Company ID:', companyId);
        console.log('Controller - Person ID:', personId);

        try {
            const result = await peopleModelInstance.editPersonFromCompany(companyId, personId);

            if (result.success) {
                res.status(200).json({ success: true, data: result.data, message: 'Person edited successfully.' });
            } else {
                res.status(400).json({ success: false, message: result.message });
            }
        } catch (error) {
            console.error('Controller Error:', error);
            res.status(500).json({ success: false, message: 'An internal server error occurred.' });
        }
    },
    
    async updatePerson(req, res, PersonModel) {
        const { name, reply, image } = req.body;
    
        // Input Validation
        if (!name || !reply || !image) {
            console.error('Validation failed:', { name, reply, image });
            return res.status(400).json({ success: false, message: 'Name, reply, and image are required.' });
        }
    
        try {
            const result = await PersonModel.updatePerson(req.params.id, { name, reply, mobile, email, outlet, image });
            if (!result.success) {
                return res.status(400).json({ success: false, message: result.message });
            }
    
            res.status(200).json({ success: true, message: 'Person updated successfully!' });
        } catch (error) {
            console.error('Error updating person:', error);
            res.status(500).json({ success: false, message: 'Failed to update person.' });
        }
    }    
    
};
