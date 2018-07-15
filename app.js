const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const apiaiApp = require('apiai')("enter your client key");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
	res.status(200).send("Hello welcome to Rapido Bot. If you any query send" +
        " post request in /weebhook endpoin with message field?");
});

app.post('/webhook', (req, res) => {

  if (req.body.message) {
      sendMessage(req.body.message).then((respone)=>{
          res.status(200).end(respone);
      }).catch((error)=>{
          console.log(error);
      })
  }
});

function sendMessage(message) {

  return new Promise((resolve,reject)=>{
      let text = message;

      let apiai = apiaiApp.textRequest(text, {
          sessionId: 'my-rapido-bot' // use any arbitrary id
      });

      apiai.on('response', (response) => {
          let aiText = response.result.fulfillment.speech;
          resolve(aiText)
      });

      apiai.on('error', (error) => {
          reject(error);''
      });

      apiai.end();
  });

}

const server = app.listen(PORT, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

