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
            const { id: companyId } = req.params; // Retrieve companyId from route parameters
            const { people } = req.body; // Retrieve person data from request body
            const personId = people.id

            console.log('Person ID: ', personId);    
            console.log('Request Body:', people); // Debugging: Log the request body
            console.log('Company ID:', companyId);  // Debugging: Log the companyId

            if (!req.body.people.name || !req.body.people.reply || !req.body.people.image) {
                req.flash('errors', ['Name, reply, and image are required.']);
                return req.session.save(() => res.redirect('/admin/companies/add'));
            }
            if (!req.body.people.mobile || !req.body.people.email || !req.body.people.outlet) {
                req.flash('errors', ['At least mobile number, email address or outlet address is required']);
                return req.session.save(() => res.redirect('/admin/companies/companyId/people/edit/personId'));
            }
    
            if (!people || !companyId) {
                return res.status(400).json({ success: false, message: 'Invalid data or missing company ID.' });
            }
    
            const result = await PersonModel.updateCompanyPeople(companyId, people);
    
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
        const { companyId, id: personId } = req.params; // Extract IDs
        const personData = req.body.people; // Extract person data from the request body
    
        console.log("Controller.updatePerson called", companyId, personId, personData);
    
        // Input Validation
        if (!personData.name || !personData.reply || !personData.image) {
            console.error('Validation failed:', { personData });
            return res.status(400).json({ success: false, message: 'Name, reply, and image are required.' });
        }
    
        try {
            const result = await PersonModel.updatePerson(companyId, personId, personData);
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
