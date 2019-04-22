const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const uuid = require('uuid/v4');
const User = require('../../models/User');

// Register new user
// POST to users
router.post('/register', async (req, res) => {
  const userData = req.body;
  let { email, password, username } = userData;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }
  if (!password) {
    return res.status(400).json({ message: 'Password is required.' });
  }
  if (!username) {
    return res.status(400).json({ message: 'Username is required.' });
  }

  try {
    const usernameExists = await User.getUserByUsername(username);
    if (usernameExists) {
      return res.status(401).json({ message: 'That username is taken.' });
    }

    const userExists = await User.getUserByEmail(email);
    if (userExists) {
      return res.status(401).json({ message: 'That email already exists.' });
    }

    userData.id = uuid();
    const hash = bcrypt.hashSync(password, 12);
    userData.password = hash;
    const newUser = new User(userData);
    const [newUserEmail] = await newUser.save();
    const returnNewUser = await User.getUserByEmail(newUserEmail);
    returnNewUser.password = null;
    res.status(200).json(returnNewUser);
  } catch (err) {
    res.status(500).json({
      error: 'There was an error accessing the database to register.'
    });
  }
});

module.exports = router;
