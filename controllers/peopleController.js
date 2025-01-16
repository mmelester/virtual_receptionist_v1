// peopleController.js - handle HTTP requests and coordinate between the model, view, and services.
const notificationService = require('../services/NotificationService');

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
                console.log("peopleController.getPeopleByCompanyId API request");
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
            req.flash('errors', ['Failed to retrieve staff member from company.']);
            req.session.save(() => res.redirect('/admin'));
        }
    },
    
    async addPerson(req, res, PersonModel) {

        console.log("peopleController.addPerson called", req.params.id);

        try {
            const { id: companyId } = req.params; // Retrieve companyId from route parameters

            const { people } = req.body; // Retrieve person data from request body
            const personId = people.id;
            const consentFlag = req.body.people.consent;
            const mobile = req.body.people.mobile;

            // Debug statements  
            console.log(companyId);
            console.log(mobile, consentFlag);
            console.log('Person ID: ', personId);    
            // console.log('Request Body:', people); 
            console.log('Company ID:', companyId); 

            if (!req.body.people.name || !req.body.people.reply || !req.body.people.image) {
                req.flash('errors', ['Name, reply, and image are required.']);
                return req.session.save(() => res.redirect('/admin/companies/companyId/people/edit/personId'));
            }
            if (!(req.body.people.mobile || !req.body.people.email || !req.body.people.outlet)) {
                console.log("At least mobile number, email address or outlet address is required");
                req.flash('errors', ['At least mobile number, email address or outlet address is required.']);
                return req.session.save(() => res.redirect('/admin/companies/companyId/people'));
            }
    
            if (!people || !companyId) {

                req.flash('errors', ['Invalid database entry or missing company ID.']);
                return req.session.save(() => res.redirect('/admin/companies/companyId/people/edit/personId'));
            }
    
            const result = await PersonModel.updateCompanyPeople(companyId, people);
    
            if (!result.success) {
                req.flash('errors', [result.message]);
                console.log("Results failed");
                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }
            if (consentFlag === "PENDING") {
                // If person was added successfully, send consent SMS
                if (result.success && mobile) {
                    await notificationService.twilioClient.messages.create({
                        body: "Reply CONSENT if you wish to receive client notifications from this number.",
                        from: process.env.TWILIO_PHONE_NUMBER,
                        to: mobile
                    });
                    console.log(`Consent SMS sent to: ${mobile}`);
                }   
            }

            req.flash('success', 'Staff member added/updated successfully!');
            req.session.save(() => res.status(200).json({ success: true, message: 'Staff member added successfully!' }));
    
        } catch (error) {
            console.error('Error adding company:', error);
            req.flash('errors', ['Failed to add new staff member.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred on the server.' }));
        }
    },
    
    async deletePerson(req, res, peopleModelInstance, companyId, personId) {
        console.log('Controller - Company ID:', companyId);
        console.log('Controller - Person ID:', personId);

        try {
            const result = await peopleModelInstance.deletePersonFromCompany(companyId, personId);
            if (result.success) {
                req.flash('success', 'Staff member deleted successfully!');
                res.status(200).json({ success: true, message: 'Person deleted successfully.' });
            } else {
                req.flash('errors', [result.message]);
                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }
        } catch (error) {
            req.flash('errors', ['Failed to delete staff member.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred while deleting the company.' }));
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
            console.error('Error editing staff member:', error);
            req.flash('errors', ['Failed to edit staff member.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An internal server error occurred.' }));
        }
    },
    
    async updatePerson(req, res, PersonModel) {
        const { companyId, id: personId } = req.params; // Extract IDs
        const personData = req.body.people; // Extract person data from the request body
    
        // console.log("Controller.updatePerson called", companyId, personId, personData);
    
        // Input Validation
        if (!personData.name || !personData.reply || !personData.image) {
            console.error('Validation failed:', { personData });
            req.flash('errors', ['Name, intro, and image are required.']);
            return req.session.save(() =>res.status(400).json({ success: false, message: 'Name, reply, and image are required.' }));
        }
    
        try {
            const result = await PersonModel.updatePerson(companyId, personId, personData);
            if (!result.success) {
                req.flash('errors', [result.message]);
                console.log("Results failed");
                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }
            req.flash('success', 'Staff member updated successfully!');
            req.session.save(() => res.status(200).json({ success: true, message: 'Company updated successfully!' }));
        } catch (error) {
            console.error("Error updating staff member's information:", error);
            req.flash('errors', ["Failed to update staff member's information."]);
            req.session.save(() => res.status(500).json({ success: false, message: "Failed to update staff member's information." }));
        }
    },
    async getPersonById(req, res, PersonModel, personId) {
        try {
            // Determine if the ID is a valid MongoDB ObjectId
            const isObjectId = /^[a-fA-F0-9]{24}$/.test(personId);
            const person = isObjectId
                ? await PersonModel.getPersonById(personId)
                : await PersonModel.getPersonByCustomId(personId);

            if (!person) {
                return res.status(404).render('error', {
                    message: 'Staff member not found.',
                    isLoggedIn: req.session && req.session.isLoggedIn
                });
            }

            // Send notifications using NotificationService
            await Promise.all([
                notificationService.sendSMS(person),
                notificationService.sendEmail(person),
                notificationService.toggleOutlet(person)
            ]);

            // Render the person's detail page
            res.render('companies/person', {
                person,
                isLoggedIn: req.session && req.session.isLoggedIn
            });
        } catch (error) {
            console.error("Error fetching staff member's details:", error);
            res.status(500).render('error', {
                message: 'Internal server error.',
                isLoggedIn: req.session && req.session.isLoggedIn
            });
        }
    },   
    
    // async renderPeoplePageByCompanyId(req, res, PersonModel) {
    //     try {
    //         const companyId = req.params.id;

    //         // Fetch the people array associated with the company
    //         const people = await PersonModel.getCompanyPeople(companyId);

    //         if (!people || people.length === 0) {
    //             req.flash('errors', ['No people found for this company.']);
    //             return req.session.save(() => res.redirect(`/companies/${companyId}`));
    //         }

    //         // Render the people page
    //         res.render('companies/people', {
    //             people,
    //             companyId,
    //             errors: req.flash('errors'),
    //             success: req.flash('success'),
    //             isLoggedIn: req.session && req.session.isLoggedIn,
    //         });
    //     } catch (error) {
    //         console.error('Error rendering people page:', error);
    //         req.flash('errors', ['Failed to load people for the company.']);
    //         req.session.save(() => res.redirect(`/companies/${req.params.id}`));
    //     }
    // },

    async receiveSms(req, res) {
        const incomingMessage = req.body.Body;
        const fromNumber = req.body.From;

        console.log("Message Received");

        // Delegate the processing to NotificationService
        const responseMessage = await notificationService.processIncomingSms(incomingMessage, fromNumber);

        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(responseMessage);
    },
      
    async errorHandler(req, res, PersonModel) {

        console.log("peopleController.errorHandler called");
        req.flash('errors', req.body.errors);
        console.log("Results failed");
        return req.session.save(() => res.status(400).json({ success: false, message: 'Failed to add new staff member' }));
    },
};
