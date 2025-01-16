const twilio = require('twilio');
const sgMail = require('@sendgrid/mail');
const { Client } = require('tplink-smarthome-api');
const { connectDB } = require('../db');

class NotificationService {
    constructor() {
        this.twilioClient = twilio(process.env.SMS_ACCOUNT_SID, process.env.SMS_AUTH_TOKEN);
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        this.tplinkClient = new Client();
    }

    async sendSMS(person) {
        if (person.mobile) {
            try {
                const message = await this.twilioClient.messages.create({
                    body: `Hello, ${person.name}! It's Vivi. You have someone waiting for you in the lobby.\n\nReply STOP if you no longer wish to receive notifications from this number.`,
                    from: process.env.TWILIO_PHONE_NUMBER,
                    to: person.mobile,
                });
                console.log(`SMS sent to: ${person.mobile}, Record: ${message.sid}`);
            } catch (error) {
                console.error('Error sending SMS:', error);
            }
        }
    }

    async sendEmail(person) {
        if (person.email) {
            const msg = {
                to: person.email,
                from: "matt@intensivehope.com",
                subject: 'You have a client waiting for you in the lobby!',
                text: 'This is an email sent using SendGrid!',
                html: '<strong>Vivi is hard at work!</strong>',
            };
            try {
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

    // New method for handling incoming SMS
    async processIncomingSms(message, fromNumber) {
        const MessagingResponse = twilio.twiml.MessagingResponse;
        const twiml = new MessagingResponse();
        const incomingMessage = message.trim().toLowerCase();

        console.log(`Received SMS from ${fromNumber}: ${incomingMessage}`);

        // Remove the leading +1 if present
        if (fromNumber.startsWith('+1')) {
            fromNumber = fromNumber.slice(2);  // Removes '+1'
        }

        if (incomingMessage === 'consent') {
            try {
                const db = await connectDB();  // Connect to the database
                const personCollection = db.collection('companies');

                // 🔎 Find the person by their mobile number
                const result = await personCollection.updateMany(
                    { 'people.mobile': fromNumber },  // Match mobile number
                    { $set: { 'people.$.consent': 'GRANTED' } }  // Update consent
                );

                if (result.modifiedCount > 0) {
                    console.log(`Consent updated to GRANTED for ${fromNumber}`);
                    twiml.message('✅ Consent granted! You will now receive notifications.');
                } else {
                    console.log(`No matching record found for ${fromNumber}`);
                    twiml.message("❌ Could not find your record. Please contact support.");
                }
            } catch (error) {
                console.error('Error updating consent:', error);
                twiml.message("❌ An error occurred while updating your consent. Please try again later.");
            }
        } else if (incomingMessage === 'stop') {
            twiml.message('🛑 You have been unsubscribed from notifications.');
            // (Optional) Add logic to update the consent to 'REVOKED' if needed.
        } else {
            twiml.message("❓ Invalid response. Please reply with 'CONSENT' to receive notifications or 'STOP' to unsubscribe.");
        }

        return twiml.toString();
    }
}

module.exports = new NotificationService();
