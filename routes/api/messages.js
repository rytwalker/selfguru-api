const express = require('express');
const uuid = require('uuid/v4');
const router = express.Router();
const protected = require('../../middleware/protected');
const scheduleMessage = require('../../helpers/sendSms');
const Message = require('../../models/Message');

// get all users
// this should be a protected route in future
router.get('/', async (req, res) => {
  try {
    const messages = await Message.getMessage();
    res.status(200).json(messages);
  } catch (err) {
    res
      .status(500)
      .json({ error: 'There was an error accessing the database' });
  }
});

// Add new message by user
router.post('/', protected, async (req, res) => {
  const userId = req.decodedToken.userId;
  const messageData = req.body;

  if (!userId) {
    return res.status(400).json('Something went wrong!');
  }

  if (!messageData.title || !messageData.date_time_to_post) {
    return res.status(400).json('Message needs a title and time to post!');
  }

  if (userId !== messageData.user_id) {
    return res.status(400).json('The wrong user is signed in.');
  }

  // create id
  messageData.id = uuid();
  const newMessage = new Message(messageData);

  try {
    const [message] = await newMessage.save();

    // SCHEDULE WITH TWILIO
    let nowInMS = Date.now();
    let futureInMS = new Date(newMessage.message.date_time_to_post).getTime();
    let scheduledTime = futureInMS - nowInMS;

    if (scheduledTime < 0) {
      return res
        .status(400)
        .json({ message: 'You cannot schedule a message for the past.' });
    } else {
      res.status(200).json({
        message: `Your message, "${message}" was scheduled for ${
          newMessage.message.date_time_to_post
        }`
      });
      setTimeout(() => scheduleMessage(message), scheduledTime);
    }
  } catch (err) {
    res.status(500).json({ message: 'There was an error adding the message!' });
  }
});

module.exports = router;
