const express = require('express');
const { register, login, addtocart, payment } = require('../controller/userController');
const authenticate = require('../middleware/authenticate');
const route = express.Router();


route.post("/register",register );

route.post("/create-checkout-session",authenticate,payment)
route.post('/add-to-cart',authenticate,addtocart)
route.post("/login", login);
// route.get("/getuserdatafromdatabase", (req, res) => {
//     return res.send(arr);
// });

module.exports = route;
