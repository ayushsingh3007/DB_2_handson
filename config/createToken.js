const { generateToken } = require('../config/jwtToken');

// Assuming you have a user ID (e.g., retrieved during user registration or login)
const userId = username;

// Generate a token for the user
const token = generateToken(userId);

console.log(token); // Use the generated token as needed (e.g., send it to the client)
