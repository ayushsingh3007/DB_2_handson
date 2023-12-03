
const { response } = require('express');
const generateToken = require('../config/jwtToken.js');
const User = require('../model/userModel.js')
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
///for getting a single user
const getUser=asyncHandler(async(req,res)=>{
  const {id}=req.params;
  try{
     const getUser=await User.findById(id)
     res.json({
      getUser,
     })
  }
  catch(err){
    throw new Error(err)
  }
})
////delete a user

const deleteUser=asyncHandler(async(req,res)=>{
  const {id}=req.params;
  try{
     const deleteUser=await User.findByIdAndDelete(id)
     res.json({
      deleteUser,
     })
  }
  catch(err){
    throw new Error(err)
  }
})

///update kr rahe user ko
const  updateUser=asyncHandler(async(req,res)=>{
  const {_id}=req.params
  try{
     const updateUser=await User.findByIdAndUpdate(_id,{
      firstname:req?.body.firstname,
      lastname:req?.body.lastname,
      email:req?.body.email,
      number:req?.body.number,

     },
     {
          new:true,
     }
     );
     res.json(updateUser)
     
  }
  catch(err){
    throw new Error(err)
  }
})

///block and unblock 

const blockUser=asyncHandler(async(req,res)=>{
    const {id}=req.params
    try{
        const block=User.findByIdAndUpdate(id,
          {
            isBlocked:true,
          },
          {
            new:true,
          }
          
          )
          res.json({message:"User Blocked"})
    }
    catch(err){
      throw new Error(err)
    }
})

const unblockUser=asyncHandler(async(req,res)=>{
  const {id}=req.params
  try{
      const unblock=User.findByIdAndUpdate(id,
        {
          isBlocked:false,
        },
        {
          new:true,
        }
        
        )
        res.json({message:"User unBlocked"})
  }
  catch(err){
    throw new Error(err)
  }
})
module.exports = { createUser,loginUserCtrl,getallUser,getUser,deleteUser,updateUser,blockUser,unblockUser };
