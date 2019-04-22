const express = require('express');
const router = express.Router();
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

module.exports = router;
