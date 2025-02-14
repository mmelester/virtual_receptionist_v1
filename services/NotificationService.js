/**
 * NotificationService Class
 *
 * This class centralizes all notification-related functionality for the application.
 * It integrates with external services and APIs to:
 * 
 * - Send SMS messages using Twilio.
 * - Send emails using SendGrid.
 * - Control smart plugs using the TP-Link Smart Home API.
 *
 * Key Methods:
 *  • getNotificationMessages(): Retrieves notification configuration from the database, using default messages as fallback.
 *  • sendSMS(person): Sends an SMS to a person’s mobile number with a lobby notification message.
 *  • sendEmail(person): Sends an email to a person using pre-configured email messages.
 *  • toggleOutlet(person): Uses the TP-Link API to turn a smart plug on (and then off after a delay) if the person has an outlet specified.
 *  • processIncomingSms(message, fromNumber): Processes incoming SMS messages to handle consent (or withdrawal) for notifications,
 *       updating the database accordingly and responding with the appropriate message.
 *  • scanOutlets(): Discovers available Kasa smart plugs on the network within a specified timeout period.
 *
 * The service fetches notification messages from the database and falls back to centralized defaults from the Messages module
 * when necessary. It is designed to handle errors gracefully, ensuring that notifications are sent reliably.
 */

// Import required modules
const twilio = require('twilio');
const sgMail = require('@sendgrid/mail');
const { Client } = require('tplink-smarthome-api');
const { connectDB } = require('../db');
const Messages = require('../src/messages');  // Import centralized messages

// Define the NotificationService class with key methods    
class NotificationService {
    // Initialize the Twilio, SendGrid, and TP-Link clients
    constructor() {
        this.twilioClient = twilio(process.env.SMS_ACCOUNT_SID, process.env.SMS_AUTH_TOKEN);
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        this.tplinkClient = new Client();
    }

    // ✅ Fetch notifications from the database
    async getNotificationMessages() {
        try {
            const db = await connectDB();
            const notifications = await db.collection('notifications').findOne();
            return notifications || {};  // Return empty object if no record exists
        } catch (error) {
            console.error('Error fetching notifications:', error);
            return {};  // Fallback to prevent crashes
        }
    }

    // ✅ Send SMS using database messages
    async sendSMS(person) {
        // Check if the person has a mobile number
        if (person.mobile) {

            try {
                // Fetch SMS messages from the database or use default messages
                const notifications = await this.getNotificationMessages(); // Get messages from DB
                const lobbyMessage = notifications.SMS?.LOBBY_NOTIFICATION || Messages.SMS.LOBBY_NOTIFICATION; // Fallback
                
                const message = await this.twilioClient.messages.create({
                    // body: lobbyMessage.replace("{name}", person.name), // Replace name dynamically
                    body: lobbyMessage,
                    from: process.env.TWILIO_PHONE_NUMBER,
                    to: person.mobile,
                });

                console.log(`SMS sent to: ${person.mobile}, Record: ${message.sid}`);

            } catch (error) {
                console.error('No mobile number provided:', error);
            }
        }
    }

    // ✅ Send Email using database messages
    async sendEmail(person) {
        if (person.email) {

            try {
                // Fetch email messages from the database or use default messages
                const notifications = await this.getNotificationMessages(); // Get messages from DB
                const emailSubject = notifications.EMAIL?.SUBJECT || Messages.EMAIL.SUBJECT;
                const emailText = notifications.EMAIL?.TEXT || Messages.EMAIL.TEXT;
                const emailHtml = notifications.EMAIL?.HTML || Messages.EMAIL.HTML;

                // Send email using SendGrid
                const msg = {
                    to: person.email,
                    from: "matt@intensivehope.com",
                    subject: emailSubject,
                    text: emailText,
                    html: emailHtml,
                };

                // Send email using SendGrid
                await sgMail.send(msg);
                console.log('Email sent successfully!');

            } catch (error) {
                console.error('Error sending email:', error);
            }
        }
    }

    // ✅ Toggle smart plug outlet using TP-Link API
    async toggleOutlet(person) {
        // Check if the person has an outlet specified
        if (person.outlet) {
            const controlPlug = (device) => {
                device.setPowerState(true).then(() => console.log('Plug turned ON'));
                setTimeout(() => device.setPowerState(false).then(() => console.log('Plug turned OFF')), 5000);
            };

            try {
                // Connect to the smart plug using its IP address   
                const device = await this.tplinkClient.getDevice({ host: '192.168.1.100' });
                controlPlug(device);

            } catch {
                console.error('Failed to connect to smart plug.');
            }
        }
    }

    // ✅ Process incoming SMS using database messages
    async processIncomingSms(message, fromNumber) {
        // Initialize Twilio MessagingResponse object
        const MessagingResponse = twilio.twiml.MessagingResponse; // Import Twilio module
        const twiml = new MessagingResponse(); // Create a new response object
        const incomingMessage = message.trim().toLowerCase(); // Normalize message

        console.log(`Received SMS from ${fromNumber}: ${incomingMessage}`);

        // Remove the leading +1 if present
        if (fromNumber.startsWith('+1')) {
            fromNumber = fromNumber.slice(2);  // Removes '+1'
        }

        // Fetch latest notification messages
        const notifications = await this.getNotificationMessages();

        if (incomingMessage === 'consent') {

            try {
                // Connect to the database and collection
                const db = await connectDB();
                const personCollection = db.collection('companies'); // Use the companies collection

                // 🔎 Find the person by their mobile number and update their consent
                const result = await personCollection.updateMany(
                    { 'people.mobile': fromNumber },
                    { $set: { 'people.$.consent': 'GRANTED' } }
                );

                // Check if any records were modified
                if (result.modifiedCount > 0) {
                    console.log(`Consent updated to GRANTED for ${fromNumber}`);
                    twiml.message(notifications.SMS?.CONSENT_GRANTED || Messages.SMS.CONSENT_GRANTED);
                } else {
                    console.log(`No matching record found for ${fromNumber}`);
                    twiml.message(notifications.SMS?.CONSENT_NOT_FOUND || Messages.SMS.CONSENT_NOT_FOUND);
                }

            } catch (error) {
                console.error('Error updating consent:', error);
                twiml.message(notifications.SMS?.CONSENT_ERROR || Messages.SMS.CONSENT_ERROR);
            }
        // Handle 'stop' keyword to withdraw consent
        } else if (incomingMessage === 'stop') {
            // 🔎 Find the person by their mobile number and withdraw their consent
            const result = await personCollection.updateMany(
                { 'people.mobile': fromNumber },
                { $set: { 'people.$.consent': 'WITHDRAWN' } }
            );
            twiml.message(notifications.SMS?.UNSUBSCRIBED || Messages.SMS.UNSUBSCRIBED);
        } else {
            twiml.message(notifications.SMS?.INVALID_RESPONSE || Messages.SMS.INVALID_RESPONSE);s
        }

        return twiml.toString();
    }

    // ✅ Scan for Kasa smart plugs on the network
    async scanOutlets() {
        // Scan for Kasa smart plugs on the network
        return new Promise((resolve, reject) => {
            const kasaClient = new Client(); // Create a new client instance each time
            let devicesFound = []; 
    
            console.log("Scanning for Kasa smart plugs...");
    
            // Start device discovery   
            kasaClient.startDiscovery({ discoveryTimeout: 5000 })
                .on('device-new', (device) => {
                    devicesFound.push({
                        alias: device.alias,
                        ip: device.host,
                        model: device.model,
                        mac: device.mac
                    });
                });
    
            // Stop discovery after timeout
            setTimeout(() => {
                console.log("Stopping Kasa device discovery...");
                kasaClient.stopDiscovery(); // Correct method to stop discovery
                resolve(devicesFound);
            }, 6000);
        });
    }
    
}

module.exports = new NotificationService();
