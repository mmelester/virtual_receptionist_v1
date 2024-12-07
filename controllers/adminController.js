module.exports = {
    async addCompany(req, res, adminView) {
        try {

            if (req.body.errors && req.body.errors.length > 0) {
                req.flash('errors', req.body.errors);
                return req.session.save(() => {
                    res.redirect('/admin');
                });
            }
    
            const result = await adminView.addCompany(req.body);
    
            if (!result.success) {

                req.flash('errors', [result.message]);
                // res.render('admin', { 
                //     companies, 
                //     errors: req.flash('errors'), 
                //     success: req.flash('success') 
                // });
                // return;
                return req.session.save(() => {
                    console.log("Errors - ", errors);
                    res.redirect('/admin');
                });
                
            }
    
            req.flash('success', 'Company added successfully!');
            res.status(200).json({ success: true });
            
        } catch (error) {
            console.error('Error adding company:', error);
            req.flash('errors', ['An unexpected error occurred.']);
            req.session.save(() => {
                // res.render('admin', { 
                //     companies: [], 
                //     errors: req.flash('errors'), 
                //     success: [] 
                // });
            });
        }
    },
    
    async companies(req, res, adminView) {

        try {
            const companies = await adminView.getCompanies();
            const errors = req.flash('errors');
            const success = req.flash('success');

            console.log('Flash errors:', errors);
            console.log('Success message:', success);
     

            res.render('admin/index', { 
                companies, 
                errors: errors,
                success: success
            });


        } catch (error) {
            req.flash('errors', [error.message || 'An error occurred while fetching companies.']);
            req.session.save(() => {
                res.render('admin/index', { 
                    companies: [], 
                    errors: req.flash('errors'), 
                    success: [] 
                });
            });
        }
    }
    
};
