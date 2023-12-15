const express = require('express');
const cart_route = express.Router();
const { addtocart } = require('../controller/prductController');
const authenticate = require('../middleware/authenticate');

cart_route.post('/add-to-cart', addtocart);

module.exports = cart_route;
