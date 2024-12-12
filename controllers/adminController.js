module.exports = {
    async index(req, res, adminModel) {
        try {
            const stats = await adminModel.getAdminStats();
            const errors = req.flash('errors');
            const success = req.flash('success');
            const isLoggedIn = req.session && req.session.isLoggedIn;

            res.render('admin/index', { stats, errors, success, isLoggedIn });
        } catch (error) {
            console.error('Error loading admin dashboard:', error);
            req.flash('errors', ['Failed to load admin dashboard.']);
            req.session.save(() => res.redirect('/'));
        }
    }
};
