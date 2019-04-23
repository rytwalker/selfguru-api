const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const uuid = require('uuid/v4');
const User = require('../../models/User');
const generateToken = require('../../helpers/generateToken');

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

    // create id
    userData.id = uuid();
    // hash password
    const hash = bcrypt.hashSync(password, 12);
    userData.password = hash;
    // create new User instance
    const newUser = new User(userData);
    // save User to db (returns email)
    const [newUserEmail] = await newUser.save();
    // get the user by email
    const returnNewUser = await User.getUserByEmail(newUserEmail);
    // dont't return password
    returnNewUser.password = null;
    // return user object
    res.status(200).json(returnNewUser);
  } catch (err) {
    res.status(500).json({
      error: 'There was an error accessing the database to register.'
    });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const loginData = req.body;
  if (!loginData.email || !loginData.password) {
    return res
      .status(400)
      .json({ message: 'A username and password is required to login.' });
  }

  try {
    const user = await User.getUserByEmail(loginData.email);
    if (user && bcrypt.compareSync(loginData.password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({ message: `Welcome back ${user.username}`, token });
    }
  } catch (err) {
    res
      .status(500)
      .json({ error: 'There was an error accessing the database to login' });
  }
});

module.exports = router;
