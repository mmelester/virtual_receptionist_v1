# This Application
## Overview

This web-based check-in system notifies building staff when a client or visitor is waiting in the lobby. The app supports multiple businesses. The user first selects the business they have an appointment with, after which a secondary page displays the participating staff members for that company. The user then taps or clicks on the staff member's image to notify them via one or more of the following methods:

1.  SMS
2.  Email
3.  A smart outlet (turning it on or off)

For privacy reasons, the app does not require clients or visitors to enter their names during check-in.

The method of contact depends on each staff member's setup, with at least one option required. Note that a Kasa smart outlet is needed for the third option.

## Launching the Application

Upon entering the URL, users are directed to a welcome screen prompting them to log in to access the dashboard. This login requirement prevents malicious users from sending fraudulent notifications, as the app operates on a public URL. The login form is located in the top-right corner of the screen.  

See next section for setting up login credentials.

## Adding or Editing General Users or Admins

There are two types of login credentials: user and administrator (admin). Only an admin account can create or manage these credentials. During the initial setup, the system recognizes a default "admin" username with the password "admin123", granting access to all admin pages.

User and admin accounts are managed through the "User Credentials" button on the admin page (/admin). Clicking this button opens the /admin/user page. If the default admin account is still active, a warning message will appear, advising the user to delete or modify the default credentials. (Note: The default username and password are widely known and, if left unchanged, pose a significant security risk.)

User accounts provide access only to client/visitor screens. After logging in with a valid user credential, the visitor is redirected to the main dashboard (/dashboard), which displays the logos of participating businesses. Admin accounts do not have access to visitor pages to prevent the risk of inadvertently leaving an admin session open to visitors.

### Going to Full Screen (i.e., eliminating the URL bard)

## Adding, Editing, or Deleting Businesses

## Adding, Editing, or Deleting Staff Members

## Changing Messages

add here

## Lobby Notifications

The SMS notification option is automatically enabled when a mobile number is entered while adding a new staff member or updating an existing one. Upon saving the staff member’s details, a consent request message is automatically sent to the provided number, requesting a reply of "CONSENT" (without quotes). Due to legal requirements, prior consent is required by any recipient before any notifications can be sent.  All SMS notifications include instructions on how to withdraw consent by replying "STOP".

Similarly, the email and smart outlet notification options are automatically enabled when an email address or outlet IP address is entered, respectively. Unlike SMS, no prior consent is currently required for email or smart outlet notifications (although implementing email consent would be advisable).

The smart outlet option is only compatible with Kasa Smart Plugs.
 

# Going to Production

1.  Remove public/main-bundled.js from the gitignore file
2.  Rebuild webpack (i.e., npx webpack --mode development)
3.  Rebuild main-bundled.js (npm run watch)

take a look if i need to change package.json

# Webpack

## Development Mode

1.  Enter npx webpack --mode development
2.  Then rebuild, i.e., npm run watch

## Production Mode

1.  Enter npx webpack --mode development
2.  Then rebuild, i.e., npm run watch

# Setting Up Twilio to Receive SMS Messages

## Production

1.  Update the Messaging Service webhook URL to:

    https://your-domain.com/twilio/sms
    

## Development Only (this didn't completely worked)

1.  Install ngrok if not already installed.

    npm install -g ngrok

2.  Create an ngrok account at https://dashboard.ngrok.com/.  Go to Your Authtoken (left sidebar).  Copy and save your token.

3.  Authenticate ngrok (First-Time Setup only)

    ngrok config add-authtoken YOUR_AUTH_TOKEN  (from step 2)

4.  Run ngrok to get webhook URL i.e.,

    ngrok http 3000  (or whatever port your using)

    This is output a screen similar to:

    Forwarding https://abcd1234.ngrok.io -> http://localhost:3000

5.  Update the webhook URL in Twilio. this the first URL above followed by /twilio/sms

     Go to Phone numbers > Manage > Active numbers, then select the number. 
 
    Look for Messaging Service neat the bottom and update the URL

Note:

1.  ngrok must be live to test, ngrok http 3000.

2.  When using the free account, every time ngrok is restarted, it generates a new webhook URL.  Make sure it updated in the Twilio webhook.

3. To manually test, 

    Invoke-WebRequest -Uri "https://9f91-2603-8080-fb04-9486-5109-317d-7cfd-2071.ngrok-free.app/twilio/sms" `
    -Method POST `
    -Body @{ Body = "CONSENT"; From = "+12146623093" }

    or from VS Command Prompt (not powershell),

    curl -X POST https:/9f91-2603-8080-fb04-9486-5109-317d-7cfd-2071.ngrok-free.app/twilio/sms ^
     --data-urlencode "Body=Matt" ^
     --data-urlencode "From=+12146623093"

    Note this bypasses Twilio entirely show it wont show in the message log.

4.  To inspect the ngrok message log, go to http://127.0.0.1:4040
