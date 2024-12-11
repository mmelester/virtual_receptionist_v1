module.exports = {
    async addCompany(req, res, adminView) {
        try {

            if (req.body.errors && req.body.errors.length > 0) {
                req.flash('errors', req.body.errors);
                return req.session.save(() => {
                    res.redirect('/admin/add');
                });
            }
    
            const result = await adminView.addCompany(req.body);
    
            if (!result.success) {
                req.flash('errors', [result.message]);
                return req.session.save(() => {
                    // res.redirect('/admin');
                    res.status(400).json({ success: false, message: result.message });
                });
            }
    
            req.flash('success', 'Company added successfully!');
            // res.status(200).json({ success: true });
            req.session.save(() => { 
                res.status(200).json({ success: true, message: 'Company added successfully!' });
            });

        } catch (error) {
            console.error('Error adding company:', error);
            req.flash('errors', ['An unexpected error occurred.']);
            req.session.save(() => {
                res.redirect('/admin');
            });
        }
    },

    async deleteCompany(req, res, adminView) {
        try {
            const companyId = req.params.id; // Assuming the ID is sent as a URL parameter
            const result = await adminView.deleteCompany(companyId);
    
            if (!result.success) {
                req.flash('errors', [result.message]);
                return res.status(400).json({ success: false, message: result.message });
            }
    
            req.flash('success', 'Company deleted successfully!');
            res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error deleting company:', error);
            req.flash('errors', ['An unexpected error occurred.']);
            res.status(500).json({ success: false, message: 'An unexpected error occurred.' });
        }
    },
    
    async companies(req, res, adminView) {
        try {
            const companies = await adminView.getCompanies();
            const errors = req.flash('errors');
            const success = req.flash('success');
            const isLoggedIn = req.session && req.session.isLoggedIn; // Check login state

            res.render('admin/index', { companies, errors, success, isLoggedIn });
        } catch (error) {
            req.flash('errors', [error.message || 'An error occurred while fetching companies.']);
            const isLoggedIn = req.session && req.session.isLoggedIn; // Ensure isLoggedIn is passed even on error
            req.session.save(() => {res.render('admin', { companies: [], errors: req.flash('errors'), success: [], isLoggedIn});
            });
        }
    }
};
