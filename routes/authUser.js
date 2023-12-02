// authUser.js
const express = require('express');
const { createUser } = require('../controller/controller');
const router = express.Router();

router.post('/register', createUser);

module.exports = router;
