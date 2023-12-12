

const {generateToken} = require('../config/jwtToken.js');
const User = require('../model/userModel.js')
const asyncHandler=require("express-async-handler");
const { data } = require('../routes/data.js');
const jwt=require('jsonwebtoken')






// routes/data.js - Assuming this is your registration route
const createUser = asyncHandler(async (req, res) => {
  const email = req.body;

  try {
    const findUser = await User.findOne({ email: email });

    if (!findUser) {
      const user = await User.create(req.body);
      return res.send({ msg: "successfully register" });
    } else {
      return res.send({ msg: "user already exists" });
    }
  } catch (err) {
    return res.send({ msg: err.message });
  }
});


const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.isPasswordMatch(password))) {
      const token = generateToken(user._id);

      return res.status(200).json({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        number: user.number,
        token,
        msg: "Successfully logged in",
      });
    } else {
      return res.status(401).json({ msg: "Invalid Credentials" });
    }
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
});







// logout functionality

const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204); // forbidden
  }
  await User.findOneAndUpdate(refreshToken, {
    refreshToken: "",
  });
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.sendStatus(204); // forbidden
});














/////get all tha users
const getallUser=asyncHandler(async(req,res)=>{
  try{
    const getUsers=await User.find()
    res.json(getUsers);

  }
  catch(err){
        console.log(err);
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
    console.log(err)
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
 
const userdata=asyncHandler(async(req,res)=>{
  const {_id}=req.body
  res.json(data)
})




///add to cart


const add_to_cart = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ status: 'error', message: 'User not found' });
    }

    const product = req.body.product;

    
    const existingProductIndex = user.cart.findIndex((item) => item.product.id === product._id);

    if (existingProductIndex !== -1) {
      
      user.cart[existingProductIndex].qty += 1;
    } else {
    
      user.cart.push({ product, qty: 1 });
    }

    
    const updatedUser = await user.save();

    
    res.status(200).json({ status: 'success', message: 'Added to cart successfully', cart: updatedUser.cart });
  } catch (error) {
    console.error('Error adding to cart:', error.message);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
});






 
module.exports = {add_to_cart,createUser,login,getallUser,getUser,deleteUser,updateUser,blockUser,unblockUser,logout,userdata };
