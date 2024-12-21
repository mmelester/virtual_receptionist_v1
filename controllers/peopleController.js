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

    async addPerson(req, res, PersonModel) {
        try {
            if (!req.body.name || !req.body.reply || !req.body.image) {
                req.flash('errors', ['Name, reply, and reply are required.']);
                return req.session.save(() => res.redirect('/admin/companies/people/add'));
            }

            const result = await PersonModel.addPerson(req.body);
            if (!result.success) {
                req.flash('errors', [result.message]);
                console.log("Results failed");

                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }

            req.flash('success', 'Person added successfully!');
            req.session.save(() => res.status(200).json({ success: true, message: 'Person added successfully!' }));
        } catch (error) {
            console.error('Error adding person:', error);
            req.flash('errors', ['Failed to add person.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred on the server.' }));
        }
    },

    async deleteItem(req, res, PersonModel) {

        try {
            const personId = req.params.id;
            console.log(`Received ID in backend: ${personId}`); // Log the received ID

            const result = await PersonModel.deleteItem(personId); // Aligns with Person Model's method name
            if (!result.success) {
                req.flash('errors', [result.message]);
                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }

            req.flash('success', 'Person deleted successfully!');
            req.session.save(() => res.status(200).json({ success: true, message: 'Person deleted successfully!' }));
        } catch (error) {
            console.error('Error deleting person:', error);
            req.flash('errors', ['Failed to delete person.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred while deleting the person.' }));
        }
    },

    async editPerson(req, res, PersonModel) {
        try {
            const personId = req.params.id;
    
            // Fetch the person details
            const person = await PersonModel.getPersonById(personId);
    
            if (!person) {
                return res.status(404).json({ success: false, message: 'Person not found or invalid ID.' });
            }
    
            // Return the person details
            res.status(200).json({ success: true, data: person });
        } catch (error) {
            console.error("Error fetching person's data:", error);
            res.status(500).json({ success: false, message: "Failed to fetch person's data." });
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
