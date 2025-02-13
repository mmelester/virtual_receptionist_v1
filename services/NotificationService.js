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
        if (person.mobile) {
            try {
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
                const notifications = await this.getNotificationMessages(); // Get messages from DB
                const emailSubject = notifications.EMAIL?.SUBJECT || Messages.EMAIL.SUBJECT;
                const emailText = notifications.EMAIL?.TEXT || Messages.EMAIL.TEXT;
                const emailHtml = notifications.EMAIL?.HTML || Messages.EMAIL.HTML;

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

    async toggleOutlet(person) {
        if (person.outlet) {
            const controlPlug = (device) => {
                device.setPowerState(true).then(() => console.log('Plug turned ON'));
                setTimeout(() => device.setPowerState(false).then(() => console.log('Plug turned OFF')), 5000);
            };
            try {
                const device = await this.tplinkClient.getDevice({ host: '192.168.1.100' });
                controlPlug(device);
            } catch {
                console.error('Failed to connect to smart plug.');
            }
        }
    }

    // ✅ Process incoming SMS using database messages
    async processIncomingSms(message, fromNumber) {
        const MessagingResponse = twilio.twiml.MessagingResponse;
        const twiml = new MessagingResponse();
        const incomingMessage = message.trim().toLowerCase();

        console.log(`Received SMS from ${fromNumber}: ${incomingMessage}`);

        // Remove the leading +1 if present
        if (fromNumber.startsWith('+1')) {
            fromNumber = fromNumber.slice(2);  // Removes '+1'
        }

        // Fetch latest notification messages
        const notifications = await this.getNotificationMessages();

        if (incomingMessage === 'consent') {
            try {
                const db = await connectDB();
                const personCollection = db.collection('companies');

                // 🔎 Find the person by their mobile number and update their consent
                const result = await personCollection.updateMany(
                    { 'people.mobile': fromNumber },
                    { $set: { 'people.$.consent': 'GRANTED' } }
                );

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

    async scanOutlets() {
        const devicesFound = [];
        
        try {
            console.log("Scanning for Kasa smart plugs...");
            this.tplinkClient.startDiscovery({ discoveryTimeout: 5000 })
                .on('device-new', (device) => {
                    devicesFound.push({
                        alias: device.alias,
                        ip: device.host,
                        model: device.model,
                        mac: device.mac
                    });
                });
    
            // Wait for devices to be discovered
            await new Promise(resolve => setTimeout(resolve, 6000));
            return devicesFound;
        } catch (error) {
            console.error("Error scanning for smart plugs:", error);
            throw new Error("Failed to scan for smart plugs");
        }
    }

}

module.exports = new NotificationService();
