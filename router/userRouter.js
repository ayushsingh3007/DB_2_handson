const express = require('express');
const { register, login,  payment,  cart_collection, auth} = require('../controller/userController');
const authenticate = require('../middleware/authenticate');
const route = express.Router();



route.post("/register",register );

route.post("/create-checkout-session",payment)
route.get('/auth',authenticate,auth)


route.post("/login", login);
route.post('/add-to-cart',authenticate,cart_collection)
// route.post("/logout", logout);
// route.get("/getuserdatafromdatabase", (req, res) => {
//     return res.send(arr);a
// });

module.exports = route;
