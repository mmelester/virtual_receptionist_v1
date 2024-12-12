module.exports = {
    async getCompanies(req, res, companyModel) {
        try {
            const companies = await companyModel.getCompanies(); // Aligns with CompanyModel's method name
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

    async addCompany(req, res, companyModel) {
        try {
            if (!req.body.name || !req.body.intro || !req.body.image) {
                req.flash('errors', ['Name, intro, and image are required.']);
                return req.session.save(() => res.redirect('/admin/companies/add'));
            }

            const result = await companyModel.addCompany(req.body); // Aligns with CompanyModel's method name
            if (!result.success) {
                req.flash('errors', [result.message]);
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

    async deleteCompany(req, res, companyModel) {
        try {
            const companyId = req.params.id;
            const result = await companyModel.deleteCompany(companyId); // Aligns with CompanyModel's method name
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
    }
};
