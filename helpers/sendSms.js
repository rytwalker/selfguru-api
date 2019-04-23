require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

function scheduleMessage(msg) {
  client.messages
    .create({
      to: '+13305401036',
      from: '+13305744114',
      body: msg
    })
    .then(message => console.log(message.sid))
    .catch(err => console.log(err));
}

module.exports = scheduleMessage;
