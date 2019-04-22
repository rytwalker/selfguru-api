const express = require('express');
const router = express.Router();
const User = require('../../models/User');

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

module.exports = router;
