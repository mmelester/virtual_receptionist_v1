# Setting Up Twilio to Receive SMS Messages

## Production

1.  Update the Messaging Service webhook URL to:

    https://your-domain.com/twilio/sms
    

## Development Only
1.  Install ngrok if not already installed.

    npm install -g ngrok

2.  Create an ngrok account at https://dashboard.ngrok.com/.  Go to Your Authtoken (left sidebar).  Copy and save your token.

3.  Authenticate ngrok (First-Time Setup only)

    ngrok config add-authtoken YOUR_AUTH_TOKEN  (from step 2)

4.  Run ngrok to get webhook URL i.e.,

    ngrok http 3000  (or whatever port your using)

    This is output a screen similar to:

    Forwarding https://abcd1234.ngrok.io -> http://localhost:3000

5.  Update the webhoork URL in Twilio. this the first URL above followed by /twilio/sms

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
