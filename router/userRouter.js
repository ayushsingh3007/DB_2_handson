const express = require('express');
const { register, login } = require('../controller/userController');
const route = express.Router();


route.post("/register",register );


route.post("/login", login);
// route.get("/getuserdatafromdatabase", (req, res) => {
//     return res.send(arr);
// });

module.exports = route;
