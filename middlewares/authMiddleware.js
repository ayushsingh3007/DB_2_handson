// authMiddleware.js

const User = require('../model/userModel.js');
const jwt = require("jsonwebtoken");
const asyncHandler = require('express-async-handler');

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;

  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];

    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        
        if (user) {
          req.user = user;
          next();
        } else {
          res.status(401).json({ message: 'User not found.' });
        }
      }
    } catch (err) {
      res.status(401).json({ message: 'Authorization has failed. Please log in again.' });
    }
  } else {
    res.status(401).json({ message: 'Authorization header is missing or invalid.' });
  }
});

// isAdmin.js
const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;

  try {
    const adminUser = await User.findOne({ email });

    if (adminUser && adminUser.role === 'admin') {
      next();
    } else {
      res.status(403).json({ status: 'fail', message: 'You do not have permission to perform this action.' });
    }
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Internal Server Error' });
  }
});



module.exports = { authMiddleware, isAdmin };
