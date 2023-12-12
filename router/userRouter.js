const express = require('express');
const route = express.Router();
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
const secretkey="AYUSHSINGH"
const saltRound = 10;
let arr = [];

route.post("/register", (req, res) => {
    const data = req.body;
    let findAccount = arr.find(item => item.email === data.email);
    if(findAccount){
        return res.send({msg:"this email is already register"})
    }
    const hashPassword = bcrypt.hashSync(data.password, saltRound);
    data.password=hashPassword
    arr.push(data);
    console.log(secretkey);
   const token=jwt.sign({user:data.email},secretkey,{expiresIn:"3d"})
   console.log(token);
    console.log(arr)
    res.send({msg:"User registered successfully!", jwtToken:token});
});


route.post("/login", (req, res) => {
    const loginData = req.body;
    console.log(loginData, "login data");

    let findAccount = arr.find(item => item.email === loginData.email);

    if (!findAccount) {
        return res.send({ msg: "Email not registered" });
    }

    const validate = bcrypt.compareSync(loginData.password, findAccount.password);

    if (validate) {
        return res.send({ msg: "User login successfully" });
    } else {
        return res.send({ msg: "Password not match" });
    }
});
route.get("/getuserdatafromdatabase", (req, res) => {
    return res.send(arr);
});

module.exports = route;
