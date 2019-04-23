const express = require('express');
const router = express.Router();
const protected = require('../../middleware/protected');
const User = require('../../models/User');
const Message = require('../../models/Message');

// get all users
// this should be a protected route in future
router.get('/', async (req, res) => {
  try {
    const users = await User.getUser();
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ error: 'There was an error accessing the database' });
  }
});

// get user by id and messages associated with
router.get('/:id', protected, async (req, res) => {
  const id = req.params.id;
  try {
    const [user] = await User.getUserById(id);
    const messages = await Message.getMessagesByUserId(id);
    user.messages = messages;
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
