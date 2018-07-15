# rapido-bot
This is a very simple messaging bot server with help of Dialogflow Ai api.
Any one can clone this repository  and try it.

You just need a client token of dialogflow api.
Go to this https://dialogflow.com/ , make account , make a agent and collect your client api key.

Install process is also very simple just clone it with 
1. git clone https://github.com/AtiqulHaque/rapido-bot.git
2. cd rapido-bot
3. npm install 
4. Got to the app.js page and enter your client key
 const apiaiApp = require('apiai')("enter your client key");     
  
4. npm run start 
6. Send post  request in localhost:5000/webhook with message field. It will send you response.
 
