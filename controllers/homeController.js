const CompanyModel = require('../models/CompanyModel');

exports.home = async function (req, res, db) {
    const companyModel = new CompanyModel(db);

    try {
        const companies = await companyModel.getCompanies();
        res.render('home/index.ejs', { companies, error: null }); // Include error: null if no errors
    } catch (error) {
        console.error('Error retrieving companies:', error);
        res.render('home/index.ejs', { companies: [], error: 'Failed to load companies.' });
    }
};

