/**
 * People Controller Module
 *
 * This module is responsible for handling HTTP requests related to people (staff members) within the application.
 * It coordinates between the data models, views, and external services to manage operations such as retrieving,
 * adding, updating, and deleting people, as well as handling SMS notifications and error processing.
 *
 * Available Functions:
 *
 * 1. getPeople(req, res, PersonModel)
 *    - Retrieves all people records using the PersonModel.
 *    - Renders the 'admin/people' view with the list of people, along with flash messages for errors and successes,
 *      and the user's login status.
 *
 * 2. getPeopleByCompanyId(req, res, PersonModel, isApiRequest = false)
 *    - Fetches people associated with a specific company ID.
 *    - Returns a JSON response for API requests or renders the 'admin/people' view for browser requests,
 *      including the company ID and session information.
 *
 * 3. addPerson(req, res, PersonModel)
 *    - Adds or updates a person (staff member) for a given company.
 *    - Validates required fields (name, reply, image) and ensures at least one contact method (mobile, email, or 
 * outlet) is provided.
 *    - Updates the company’s people list via PersonModel.
 *    - If the consent flag is "PENDING" and a mobile number is provided, sends a consent SMS using 
 * NotificationService.
 *    - Returns a JSON response indicating success or failure.
 *
 * 4. deletePerson(req, res, peopleModelInstance, companyId, personId)
 *    - Deletes a person from a company based on the provided company and person IDs.
 *    - Returns a JSON response with the outcome and flashes corresponding success or error messages.
 *
 * 5. editPerson(req, res, peopleModelInstance, companyId, personId)
 *    - Retrieves details for a specific person within a company for editing purposes.
 *    - Returns the person's data as a JSON response along with a success message.
 *
 * 6. updatePerson(req, res, PersonModel)
 *    - Updates a person's details after validating input fields (name, reply, image) and comparing them with 
 * existing data.
 *    - If no changes are detected, it informs the user; otherwise, it updates the record using PersonModel.
 *    - Returns a JSON response indicating success or failure.
 *
 * 7. getPersonById(req, res, PersonModel, personId)
 *    - Retrieves a person by their ID, validating whether the ID is a proper MongoDB ObjectId.
 *    - If the person is found, triggers notifications (SMS, email, outlet) via NotificationService and renders the
 *      person's detail page; if not, renders an error view.
 *
 * 8. receiveSms(req, res)
 *    - Handles incoming SMS messages.
 *    - Processes the message using NotificationService and responds with an XML-formatted message.
 *
 * 9. errorHandler(req, res, PersonModel)
 *    - Manages errors that occur during person-related operations.
 *    - Flashes error messages and returns a JSON response indicating failure.
 *
 * Error Handling and Notifications:
 *    - All functions include error handling with logging, flash messaging, and session management to ensure that 
 * errors
 *      are communicated effectively to the user.
 *    - The module integrates with external notification services to send SMS, email, and control outlet behavior as 
 * needed.
 */

// Required modules and files for the people controller module
const notificationService = require('../services/NotificationService');

module.exports = {
    async getPeople(req, res, PersonModel) {

        try {
            // Fetch all people records from the database using the PersonModel
            const people = await PersonModel.getPeople(); // Aligns with Person Model's method name
            const errors = req.flash('errors');
            const success = req.flash('success');
            const isLoggedIn = req.session && req.session.isLoggedIn;
            res.render('admin/people', { people, errors, success, isLoggedIn });

        } catch (error) {
            // Handle errors by logging and redirecting with a flash message
            console.error('Error fetching people:', error);
            req.flash('errors', ['Failed to retrieve people.']);
            req.session.save(() => res.redirect('/admin'));
        }
    },

    // Fetch people associated with a specific company ID and return a JSON response for API requests
    async getPeopleByCompanyId(req, res, PersonModel, isApiRequest = false) {

        try {
            //  Extract the company ID from the request parameters
            const companyId = req.params.id;
    
            console.log('Fetching people for company ID:', companyId);
    
            // Fetch the people array for the company using the PersonModel
            const people = await PersonModel.getCompanyPeople(companyId);
    
            //  If no people are found, flash an error message and redirect to the admin page
            if (isApiRequest) {
                console.log("peopleController.getPeopleByCompanyId API request");
                // Respond with JSON for API requests
                return res.status(200).json({ success: true, data: people });
            }
    
            // Render the EJS template for browser requests
            const errors = req.flash('errors');
            const success = req.flash('success');
            const isLoggedIn = req.session && req.session.isLoggedIn;
            // Render the people page with the retrieved data and flash messages for errors and successes
            res.render('admin/people', { people, errors, success, isLoggedIn, companyId }); 

        } catch (error) {
            // Handle errors by logging and redirecting with a flash message
            console.error('Error fetching people for company:', error);
            // Respond with JSON for API requests
            if (isApiRequest) {
                return res.status(500).json({ success: false, message: 'Failed to fetch people.' });
            }
            // Redirect to the admin page with an error message for browser requests
            req.flash('errors', ['Failed to retrieve staff member from company.']);
            req.session.save(() => res.redirect('/admin'));
        }
    },
    
    //  Add or update a person (staff member) for a given company and return a JSON response
    async addPerson(req, res, PersonModel) {

        console.log("peopleController.addPerson called", req.params.id);

        try {
            //  Extract the company ID from the request parameters  
            const { id: companyId } = req.params; // Retrieve companyId from route parameters

            const { people } = req.body; // Extract people object from request body
            const personId = people.id; // Extract person ID from people object
            const consentFlag = req.body.people.consent; // Extract consent flag from request body
            const mobile = req.body.people.mobile; // Extract mobile number from request body

            // Debug statements  
            console.log(companyId);
            console.log(mobile, consentFlag);
            console.log('Person ID: ', personId);    
            // console.log('Request Body:', people); 
            console.log('Company ID:', companyId); 

            // Input Validation
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
    
            // If person ID is provided, update the person; otherwise, add a new person
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

            //  Flash a success message and return a JSON response
            req.flash('success', 'Staff member added/updated successfully!');
            req.session.save(() => res.status(200).json({ success: true, message: 'Staff member added successfully!' }));
    
        } catch (error) {
            //  Handle errors by logging and flashing an error message
            console.error('Error adding company:', error);
            req.flash('errors', ['Failed to add new staff member.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred on the server.' }));
        }
    },
    
    // Delete a person from a company based on the provided company and person IDs and return a JSON response
    async deletePerson(req, res, peopleModelInstance, companyId, personId) {
        console.log('Controller - Company ID:', companyId);
        console.log('Controller - Person ID:', personId);

        try {
            //  Delete the person from the company using the peopleModelInstance
            const result = await peopleModelInstance.deletePersonFromCompany(companyId, personId);
            if (result.success) {
                req.flash('success', 'Staff member deleted successfully!');
                res.status(200).json({ success: true, message: 'Person deleted successfully.' });
            } else {
                req.flash('errors', [result.message]);
                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }
        } catch (error) {
            //  Handle errors by logging and flashing an error message
            req.flash('errors', ['Failed to delete staff member.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An unexpected error occurred while deleting the company.' }));
        }
    },

    // Retrieve details for a specific person within a company for editing purposes and return a JSON response
    async editPerson(req, res, peopleModelInstance, companyId, personId) {
        console.log('Controller - Company ID:', companyId);
        console.log('Controller - Person ID:', personId);

        try {
            //  Edit the person from the company using the peopleModelInstance
            const result = await peopleModelInstance.editPersonFromCompany(companyId, personId);

            if (result.success) {
                res.status(200).json({ success: true, data: result.data, message: 'Person edited successfully.' });
            } else {
                res.status(400).json({ success: false, message: result.message });
            }
        } catch (error) {
            //  Handle errors by logging and flashing an error message
            console.error('Error editing staff member:', error);
            req.flash('errors', ['Failed to edit staff member.']);
            req.session.save(() => res.status(500).json({ success: false, message: 'An internal server error occurred.' }));
        }
    },
    
    // Update a person's details after validating input fields and comparing them with existing data, and return a JSON response
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
            // Fetch existing person data
            const existingPersonResult = await PersonModel.editPersonFromCompany(companyId, personId);
            if (!existingPersonResult.success) {
                return res.status(404).json({ success: false, message: 'Person not found.' });
            }

            const existingPerson = existingPersonResult.data;

            // Compare incoming data with existing data
            if (
                existingPerson.name === personData.name &&
                existingPerson.title === personData.title &&
                existingPerson.reply === personData.reply &&
                existingPerson.mobile === personData.mobile &&
                existingPerson.email === personData.email &&
                existingPerson.outlet === personData.outlet &&
                existingPerson.image === personData.image
            ) {
                return res.status(200).json({ success: true, message: 'No changes detected.' });
            }

            // Proceed with update if data has changed
            const result = await PersonModel.updatePerson(companyId, personId, personData);
            if (!result.success) {
                req.flash('errors', [result.message]);
                console.log("Results failed");
                return req.session.save(() => res.status(400).json({ success: false, message: result.message }));
            }
            req.flash('success', 'Staff member updated successfully!');
            req.session.save(() => res.status(200).json({ success: true, message: 'Company updated successfully!' }));

        } catch (error) {
            // Handle errors by logging and flashing an error message
            console.error("Error updating staff member's information:", error);
            req.flash('errors', ["Failed to update staff member's information."]);
            req.session.save(() => res.status(500).json({ success: false, message: "Failed to update staff member's information." }));
        }
    },

    // Retrieve a person by their ID, validate the ID, trigger notifications, and render the person's detail page
    async getPersonById(req, res, PersonModel, personId) {
        try {
            // Validate the personId and retrieve the person data
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
    
            // Retrieve the check-in data from the session (if it exists)
            const checkinData = req.session.checkinData || null;
            // Remove the check-in data so it's not reused
            delete req.session.checkinData;

            if(checkinData.notes === undefined || checkinData.notes === null) {
                checkinData.notes = "No message provided.";
            }
    
            // Pass the check-in data to the notification service methods
            await Promise.all([
                notificationService.sendSMS(person, checkinData),
                notificationService.sendEmail(person, checkinData),
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
    
    // Handle incoming SMS messages and respond with an XML-formatted message
    async receiveSms(req, res) {
        const incomingMessage = req.body.Body; // Extract the incoming message
        const fromNumber = req.body.From; // Extract the sender's number

        console.log("Consent Message Received");

        // Delegate the processing to NotificationService
        const responseMessage = await notificationService.processIncomingSms(incomingMessage, fromNumber);

        res.writeHead(200, { 'Content-Type': 'text/xml' });
        res.end(responseMessage);
    },
    
    // Manage errors that occur during person-related operations and return a JSON response
    async errorHandler(req, res, PersonModel) {

        console.log("peopleController.errorHandler called");
        req.flash('errors', req.body.errors);
        console.log("Results failed");
        return req.session.save(() => res.status(400).json({ success: false, message: 'Failed to add new staff member' }));
    },
};
