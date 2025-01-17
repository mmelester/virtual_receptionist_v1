// src/messages.js

const Messages = {
    SMS: {
        LOBBY_NOTIFICATION: (name) => `Hello, ${name}! It's Vivi. You have someone waiting for you in the lobby.\n\nReply STOP if you no longer wish to receive notifications from this number.`,
        CONSENT_GRANTED: '✅ Consent granted! You will now receive notifications.',
        CONSENT_NOT_FOUND: "❌ Could not find your record. Please contact support.",
        CONSENT_ERROR: "❌ An error occurred while updating your consent. Please try again later.",
        UNSUBSCRIBED: '🛑 You have been unsubscribed from notifications.',
        INVALID_RESPONSE: "❓ Invalid response. Please reply with 'CONSENT' to receive notifications or 'STOP' to unsubscribe.",
    },
    EMAIL: {
        SUBJECT: 'You have a client waiting for you in the lobby!',
        TEXT: 'This is an email sent using SendGrid!',
        HTML: '<strong>Vivi is hard at work!</strong>',
    }
};

module.exports = Messages;
