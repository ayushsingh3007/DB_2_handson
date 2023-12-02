
const { response } = require('express');
const generateToken = require('../config/jwtToken.js');
const User = require('../model/userModel.js');
const asyncHandler=require("express-async-handler")

///user create karne ke liye use kar raha
const createUser =asyncHandler( async (req, res) => {
    const email = req.body.email;
    const finduser = await User.findOne({email} );

    if (!finduser) {
        ///new user crete karne ke liye 
        const newuser = await User.create(req.body);
        return res.json(newuser);
    } else {
       throw new Error("User Already Exists")
    }
});
///login a user
const loginUserCtrl=asyncHandler(async (req,res)=>{
    const {email,password}=req.body;
    const findUSER=await User.findOne({email})
    ///check kar rahe ki user exist hai ya nahi
    if(findUSER && await  findUSER.isPasswordMatch(password)){
      res.json({
        _id:findUSER?._id,
        firstname:findUSER?.firstname,
        lastname:findUSER?.lastname,
        email:findUSER?.email,
        number:findUSER?.number,
        token:generateToken(findUSER?._id)

      })
    }
    else{
        throw new Error('invalid candentials please check the password')
    }
})

/////get all tha users
const getallUser=asyncHandler(async(req,res)=>{
  try{
    const getUsers=await User.find()
    res.json(getUsers);

  }
  catch(err){
        throw new Error(err)
  }
})


module.exports = { createUser,loginUserCtrl };
