const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  // Sign a token with the user ID, using a secret from the environment and setting an expiration time of 30 days
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Export the generateToken function
module.exports = generateToken;
