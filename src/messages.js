/**
 * Messages Module /src/messages.js
 *
 * This module defines the default SMS and EMAIL notification messages for the Virtual Receptionist application.
 *
 * SMS Messages:
 * - LOBBY_NOTIFICATION: Notifies a user when someone is waiting in the lobby and provides instructions for unsubscribing.
 * - CONSENT_GRANTED: Confirms that consent was successfully granted for notifications.
 * - CONSENT_NOT_FOUND: Indicates that the user's record could not be found.
 * - CONSENT_ERROR: Notifies the user of an error during the consent update process.
 * - UNSUBSCRIBED: Confirms that the user has been unsubscribed from notifications.
 * - INVALID_RESPONSE: Alerts the user when an invalid response is received and provides correct reply instructions.
 *
 * EMAIL Messages:
 * - SUBJECT: Specifies the email subject line for lobby notifications.
 * - TEXT: Provides the plain text content for email notifications.
 * - HTML: Provides the HTML formatted content for email notifications.
 *
 * The Messages object is exported for use in notification services throughout the application.
 */


const Messages = {
    SMS: {
        LOBBY_NOTIFICATION: `🙂‍ Hello! It's Vivi. You have someone waiting for you in the lobby.\n\nReply STOP if you no longer wish to receive notifications from this number.`,
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
