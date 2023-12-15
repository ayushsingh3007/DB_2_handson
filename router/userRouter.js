const express = require('express');
const { register, login,  payment } = require('../controller/userController');
const authenticate = require('../middleware/authenticate');
const route = express.Router();


route.post("/register",register );

route.post("/create-checkout-session",payment)

route.post("/login", login);
// route.get("/getuserdatafromdatabase", (req, res) => {
//     return res.send(arr);
// });

module.exports = route;
