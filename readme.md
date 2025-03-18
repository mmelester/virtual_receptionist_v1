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

Make sure the Message Service (i.e., Low Volume Mixed A2P Messaging Service) is configured with appropriate webhook. i.e.,

1. Login to Twilio at https://console.twilio.com/
2. In the Develop tab (left sidebar), go to Message > Service
3. Select the Low Volume Mixed A2P Messaging Service with Sid MGa67f1bed601dc6a2943f8afe35485fd7
4. Select Integration (left sidebar).
5. Scroll to you see "Send a webhook".  Select it.
6. Enter https://3dayintensives.com/twilio/sms in the Request URL.  Make sure HTTP Post is selected in 
    right drop-down field.
7.  Scroll all the way to bottom and click on Save.

Recieved SMS messages will now be posted to https://3dayintensives.com/twilio/sms.

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

# Enabling Full Screen Mode on IOS Safari

The following meta tags have been included in header.ejs:

<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="viewport" content="width=device-width, initial-scale=1">

To enable full screen, open this app. Then tap the "Share" icon and select the option "Add to Home Screen".  This will create an app on the home screen that will launch the app in full screen.

# Email Server

SendGrid is used for the mail server.  You must have an active SendGrid account (currently using Matt Melester's account). If changed to another account, a new API key must be generated and a new authorized sender must be set.  See below for details on both.  With the free account, there can only be a single authorized sender.

The email server js code is contained in server.js. In this file, the sender's email address is hard coded.

**Limitation:** This site currently uses the Free SendGrid Plan. With this plan, there is 100 email/day limit and limited to single team member.

## Generating a New SendGrid API Key

To create an API Key go to https://app.sendgrid.com/guide/integrate/langs/nodejs or follow the steps below.   Note that SendGrid will only send emails from an authorized email address (go to https://app.sendgrid.com/settings/sender_auth/senders).

1.Login into the SendGrid account.  This should direct you to the Dashboard; navigate to this page if not.
2.Go to Settings at the bottom of the left sidebar. Then select "API Keys".
3.Once there click on the blue "Create API Key" located at the top-right of the page.
4.Key it a representative, unique name.  Selected "Full Access".  Click "Create and View".
5.Make sure you add the API to config.env.  This will allow server.js to access the API key.
6.Delete any API keys no longer in use.

## Defining the Authorized Sender

The authorized sender is hard coded in server.js (I should have added this to the notification setting page).  To find it, search on "const msg". This sender must be explicitly authorized in the SendGrid account associated with the API key.  Below are the steps required to setup an authorized sender:

1.1.Login into the SendGrid account.  This should direct you to the Dashboard; navigate to this page if not.
2.Go to Settings at the bottom of the left sidebar. Then select "Sender Authorization".
3.In the middle of the page, see Single Sender Verification.  At the far right of that section, click on the current sender email address.
4.This bring a page that will allow the sender information, including email address, to be changed.
5.Make sure to update the hard coded authorized sender email address in server.js.

For this application, I setup I used the existing single authorization that I setup for intensivehope.com, instead of a domain authorization. For domain authorization, see https://www.twilio.com/docs/sendgrid/ui/account-and-settings/how-to-set-up-domain-authentication

Also, please make the modifications the DNS records (see domain registrar, e.g., Go Daddy).

# Development

1. Use npm run watch.  This will launch a webpack and server console window.  All backend console logs will be displayed in the server console window.  
2. Note launching the site from LiveServer doesn't work.  Instead enter localhost:3000 into the browser. 

# Production

1. Use npm run build.
2. Stage and commit build.
3. Push changes up to GitHub (i.e., git push).
4. Go to the host server. Then cd virtual_receptionist_v1.
5. Pull changes from GitHub (i.e., git pull).
6. Go to intensivehope.com (i.e., cd intensivehope.com)
7. Enter pm2 start ./ecosystem.config.cjs




# Testing POST Route

curl -X POST -d "Body=consent&From=2146623093" -H "Content-Type: application/x-www-form-urlencoded" https://3dayintensives.com/twilio/sms
