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
                const lobbyMessage = notifications.SMS?.LOBBY_NOTIFICATION || "Default SMS message"; // Fallback
                
                const message = await this.twilioClient.messages.create({
                    body: lobbyMessage.replace("{name}", person.name), // Replace name dynamically
                    from: process.env.TWILIO_PHONE_NUMBER,
                    to: person.mobile,
                });

                console.log(`SMS sent to: ${person.mobile}, Record: ${message.sid}`);
            } catch (error) {
                console.error('Error sending SMS:', error);
            }
        }
    }

    // ✅ Send Email using database messages
    async sendEmail(person) {
        if (person.email) {
            try {
                const notifications = await this.getNotificationMessages(); // Get messages from DB
                const emailSubject = notifications.EMAIL?.SUBJECT || "Default Subject";
                const emailText = notifications.EMAIL?.TEXT || "Default Email Text";
                const emailHtml = notifications.EMAIL?.HTML || "<strong>Default Email HTML</strong>";

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

                // 🔎 Find the person by their mobile number
                const result = await personCollection.updateMany(
                    { 'people.mobile': fromNumber },
                    { $set: { 'people.$.consent': 'GRANTED' } }
                );

                if (result.modifiedCount > 0) {
                    console.log(`Consent updated to GRANTED for ${fromNumber}`);
                    twiml.message(notifications.SMS?.CONSENT_GRANTED || "✅ Consent granted!");
                } else {
                    console.log(`No matching record found for ${fromNumber}`);
                    twiml.message(notifications.SMS?.CONSENT_NOT_FOUND || "❌ Could not find your record.");
                }
            } catch (error) {
                console.error('Error updating consent:', error);
                twiml.message(notifications.SMS?.CONSENT_ERROR || "❌ An error occurred.");
            }
        } else if (incomingMessage === 'stop') {
            twiml.message(notifications.SMS?.UNSUBSCRIBED || "🛑 You have been unsubscribed.");
        } else {
            twiml.message(notifications.SMS?.INVALID_RESPONSE || "❓ Invalid response.");
        }

        return twiml.toString();
    }
}

module.exports = new NotificationService();
