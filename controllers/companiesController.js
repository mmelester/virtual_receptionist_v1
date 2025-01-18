module.exports = {
    async getCompanies(req, res, CompanyModel) {
        try {
            const companies = await CompanyModel.getCompanies(); // Aligns with CompanyModel's method name
            const errors = req.flash('errors');
            const success = req.flash('success');
            const isLoggedIn = req.session && req.session.isLoggedIn;

            res.render('admin/companies', { companies, errors, success, isLoggedIn });
        } catch (error) {
            console.error('Error fetching companies:', error);
            req.flash('errors', ['Failed to retrieve companies.']);
            req.session.save(() => res.redirect('/admin'));
        }
    },

    async addCompany(req, res, CompanyModel) {
        try {
            if (!req.body.name || !req.body.intro || !req.body.image) {
                req.flash('errors', ['Name, intro, and image are required.']);
                return req.session.save(() => res.redirect('/admin/companies/add'));
            }

            const result = await CompanyModel.addCompany(req.body);
            if (!result.success) {
                req.flash('errors', [result.message]);
                console.log("Results failed");
                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }

            req.flash('success', 'Company added successfully!');
            req.session.save(() => res.status(200).json({ success: true, message: 'Company added successfully!' }));
        } catch (error) {
            console.error('Error adding company:', error);
            req.flash('errors', ['Failed to add company.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred on the server.' }));
        }
    },

    async deleteItem(req, res, CompanyModel) {
        try {
            const companyId = req.params.id;
            const result = await CompanyModel.deleteItem(companyId); // Aligns with CompanyModel's method name
            if (!result.success) {
                req.flash('errors', [result.message]);
                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }

            req.flash('success', 'Company deleted successfully!');
            req.session.save(() => res.status(200).json({ success: true, message: 'Company deleted successfully!' }));
        } catch (error) {
            console.error('Error deleting company:', error);
            req.flash('errors', ['Failed to delete company.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred while deleting the company.' }));
        }
    },

    async editCompany(req, res, CompanyModel) {
        try {
            const companyId = req.params.id;
    
            // Fetch the company details
            const company = await CompanyModel.getCompanyById(companyId);
    
            if (!company) {
                return res.status(404).json({ success: false, message: 'Company not found or invalid ID.' });
            }
    
            // Return the company details
            res.status(200).json({ success: true, data: company });
        } catch (error) {
            console.error('Error editing staff member:', error);
            req.flash('errors', ['Failed to edit staff member.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'Failed to fetch company information from database.' }));
        }
    },
    
    async updateCompany(req, res, CompanyModel) {
        const { name, intro, image } = req.body;
    
        // Input Validation
        if (!name || !intro || !image) {
            console.error('Validation failed:', { name, intro, image });
            req.flash('errors', ['Name, intro, and image are required.']);
            return req.session.save(() => res.status(400).json({ success: false, message: 'Name, intro, and image are required.' }));
        }
    
        try {

            const currentData = await CompanyModel.getCompanyById(req.params.id);

            // Compare incoming data with current data
            if (
                currentData.name === name &&
                currentData.intro === intro &&
                currentData.image === image
            ) {
                return res.status(200).json({ success: true, message: 'No changes detected.' });
            }

            const result = await CompanyModel.updateCompany(req.params.id, { name, intro, image });
            if (!result.success) {
                req.flash('errors', [result.message]);
                console.log("Results failed");
                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }
            req.flash('success', 'Company updated successfully!');
            req.session.save(() => res.status(200).json({ success: true, message: 'Company updated successfully!' }));
        } catch (error) {
            console.error('Error updating company:', error);
            req.flash('errors', ['Failed to edit staff member.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'Failed to update company.' }));
        }
    },

    async getCompanyById(req, res, CompanyModel, PersonModel) {
        const companyId = req.params.id;
    
        try {
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
    
            res.render('companies/company', { 
                company, 
                isLoggedIn: req.session && req.session.isLoggedIn // Pass isLoggedIn to the view
            });
        } catch (error) {
            console.error('Error fetching company details:', error);
            res.status(500).render('error', { 
                message: 'Internal server error.', 
                isLoggedIn: req.session && req.session.isLoggedIn 
            });
        }
    }
     
};
