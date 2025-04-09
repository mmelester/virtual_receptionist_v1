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
 *  • sendSMS(person): Sends an SMS to a person’s mobile number if the number exists, is valid, and consent is granted.
 *  • sendEmail(person): Sends an email to a person if an email address exists.
 *  • toggleOutlet(person): Uses the TP-Link API to turn a smart plug on (and then off after a delay) if the person has a valid outlet IP.
 *  • processIncomingSms(message, fromNumber): Processes incoming SMS messages to handle consent (or withdrawal) for notifications.
 *  • scanOutlets(): Discovers available Kasa smart plugs on the network.
 */

const twilio = require('twilio');
const sgMail = require('@sendgrid/mail');
const { Client } = require('tplink-smarthome-api');
const { connectDB } = require('../db');
const Messages = require('../src/messages');  // Import centralized messages

class NotificationService {
    constructor() {
        this.twilioClient = twilio(process.env.SMS_ACCOUNT_SID, process.env.SMS_AUTH_TOKEN);
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        this.tplinkClient = new Client();
    }

    // Helper method to validate phone numbers (E.164 format)
    isValidPhoneNumber(phone) {
        const phoneRegex = /^\+?[1-9]\d{1,14}$/;
        return phoneRegex.test(phone);
    }

    // Helper method to validate IPv4 addresses
    isValidIP(ip) {
        const ipRegex = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
        return ipRegex.test(ip);
    }

    // Retrieves notification messages from the database, using defaults if necessary
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

    // Sends an SMS if a valid mobile number exists and consent is granted
// Sends an SMS if a valid mobile number exists and consent is granted
async sendSMS(person, checkinData) {
    if (!person.mobile) {
        console.error('SMS not sent: No mobile number provided.');
        return;
    }
    if (!this.isValidPhoneNumber(person.mobile)) {
        console.error('SMS not sent: Invalid mobile number format.', person.mobile);
        return;
    }
    if (person.consent !== "GRANTED") {
        console.log('SMS not sent: Consent not granted.');
        return;
    }
    try {
        const notifications = await this.getNotificationMessages();
        
        // Extract dynamic fields from checkinData
        let { name, apptTime, notes } = checkinData || {};

        if(notes === undefined || notes === "" || notes === null) {
            notes = "No message provided.";
        }

        console.log('Message', notes);
            
        // If notifications from DB provide a function, use it;
        // otherwise, call the default function from Messages.
        const lobbyMessage = Messages.SMS.LOBBY_NOTIFICATION(apptTime, name, notes);

        const message = await this.twilioClient.messages.create({
            body: lobbyMessage,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: person.mobile,
        });
        console.log(`SMS sent to: ${person.mobile}, Record: ${message.sid}`);
    } catch (error) {
        console.error('Error sending SMS:', error);
    }
}

// Sends an email if an email address exists
async sendEmail(person, checkinData) {
    if (person.email) {
        try {
            const notifications = await this.getNotificationMessages();
            
            // Extract dynamic fields from checkinData
            const { name, apptTime, notes } = checkinData || {}; 

            // Use the dynamic SUBJECT function if available.
            // const emailSubject = (notifications.EMAIL && typeof notifications.EMAIL.SUBJECT === 'function')
            //     ? notifications.EMAIL.SUBJECT(apptTime, name, notes)
            //     : Messages.EMAIL.SUBJECT(apptTime, name, notes);
            
            const emailSubject = Messages.EMAIL.SUBJECT(apptTime, name);
            const emailText = Messages.EMAIL.TEXT(notes);
            const emailHtml = Messages.EMAIL.HTML(notes);

            if (emailHtml === undefined || emailHtml === "") {
                emailHtml = '<p>No content provided.</p>';
            };

            const msg = {
                to: person.email,
                from: "matt@intensivehope.com",
                subject: emailSubject,
                text: emailText,
                html: emailHtml,
            };
            await sgMail.send(msg);
            console.log('Email sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }
}


    // Toggles a smart plug outlet if a valid outlet IP is provided
    async toggleOutlet(person) {
        if (!person.outlet) {
            console.error('Outlet toggle not performed: No outlet provided.');
            return;
        }
        if (!this.isValidIP(person.outlet)) {
            console.error('Outlet toggle not performed: Invalid IP address.', person.outlet);
            return;
        }
        const controlPlug = (device) => {
            device.setPowerState(true)
                .then(() => console.log('Plug turned ON'))
                .catch((err) => console.error('Error turning plug ON:', err));
            setTimeout(() => {
                device.setPowerState(false)
                    .then(() => console.log('Plug turned OFF'))
                    .catch((err) => console.error('Error turning plug OFF:', err));
            }, 5000);
        };
        try {
            const device = await this.tplinkClient.getDevice({ host: person.outlet });
            controlPlug(device);
        } catch (error) {
            console.error('Failed to connect to smart plug:', error);
        }
    }

    // Processes incoming SMS messages to handle consent updates
    async processIncomingSms(message, fromNumber) {
        const MessagingResponse = twilio.twiml.MessagingResponse;
        const twiml = new MessagingResponse();
        const incomingMessage = message.trim().toLowerCase();

        console.log(`Received SMS from ${fromNumber}: ${incomingMessage}`);

        if (fromNumber.startsWith('+1')) {
            fromNumber = fromNumber.slice(2);
        }

        const notifications = await this.getNotificationMessages();

        if (incomingMessage === 'consent') {
            try {
                const db = await connectDB();
                const personCollection = db.collection('companies');
                const result = await personCollection.updateMany(
                    { 'people.mobile': fromNumber },
                    { $set: { 'people.$[elem].consent': 'GRANTED' } },
                    { arrayFilters: [{ 'elem.mobile': fromNumber }] }
                  );
                console.log('Update result:', result);

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
        } else if (incomingMessage === 'stop') {
            // Assuming personCollection is defined here for the 'stop' case.
            try {
                const db = await connectDB();
                const personCollection = db.collection('companies');
                const result = await personCollection.updateMany(
                    { 'people.mobile': fromNumber },
                    { $set: { 'people.$.consent': 'WITHDRAWN' } }
                );
                twiml.message(notifications.SMS?.UNSUBSCRIBED || Messages.SMS.UNSUBSCRIBED);
            } catch (error) {
                console.error('Error processing stop request:', error);
                twiml.message(notifications.SMS?.CONSENT_ERROR || Messages.SMS.CONSENT_ERROR);
            }
        } else {
            twiml.message(notifications.SMS?.INVALID_RESPONSE || Messages.SMS.INVALID_RESPONSE);
        }

        return twiml.toString();
    }

    // Scans for Kasa smart plugs on the network
    async scanOutlets() {
        return new Promise((resolve, reject) => {
            const kasaClient = new Client();
            let devicesFound = [];
    
            console.log("Scanning for Kasa smart plugs...");
    
            kasaClient.startDiscovery({ discoveryTimeout: 10000 })
                .on('device-new', (device) => {
                    devicesFound.push({
                        alias: device.alias,
                        ip: device.host,
                        model: device.model,
                        mac: device.mac
                    });
                });
    
            setTimeout(() => {
                console.log("Stopping Kasa device discovery...");
                kasaClient.stopDiscovery();
                resolve(devicesFound);
            }, 6000);
        });
    }
}

module.exports = new NotificationService();
