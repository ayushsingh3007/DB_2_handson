const express = require('express');
const { register, login,  payment ,auth} = require('../controller/userController');
const authenticate = require('../middleware/authenticate');
const route = express.Router();



route.post("/register",register );
route.post("/login", login);

route.get('/auth',authenticate,auth)
route.post("/create-checkout-session",payment)




// route.post('/add-to-cart',authenticate)
// route.post("/logout", logout);
// route.get("/getuserdatafromdatabase", (req, res) => {
//     return res.send(arr);a
// });

module.exports = route;
