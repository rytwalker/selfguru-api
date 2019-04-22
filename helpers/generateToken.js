require('dotenv').config();
const jwt = require('jsonwebtoken');

function generateToken(user) {
  const payload = {
    userId: user.id,
    username: user.username,
    email: user.email
  };
  const secret = process.env.JWT_SECRET;
  const options = {
    expiresIn: '1h'
  };

  return jwt.sign(payload, secret, options);
}

module.exports = generateToken;
