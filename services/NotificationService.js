// services/NotificationService.js - Manages application/process business logic (sending notifications).
const twilio = require('twilio');
const sgMail = require('@sendgrid/mail');
const { Client } = require('tplink-smarthome-api');

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
                    body: `Hello, ${person.name}! It's Vivi. You have someone waiting for you in the lobby.
                    
                    Reply STOP if you no longer wish to receive notifications from this number.`,
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
}

module.exports = new NotificationService();
