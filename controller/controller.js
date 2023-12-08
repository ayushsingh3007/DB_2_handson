

const {generateToken} = require('../config/jwtToken.js');
const User = require('../model/userModel.js')
const asyncHandler=require("express-async-handler");
const { data } = require('../routes/data.js');
const jwt=require('jsonwebtoken')
const Cart=require('../model/cartModel.js')









//user create karne ke liye use kar raha
 const createUser =asyncHandler( async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({email:email} );

    if (!findUser) {
        ///new user crete karne ke liye 
        const newUser = await User.create(req.body);
       res.json(newUser);
    } else {
       throw new Error("User Already Exists")
    }
});












///login a user
const loginUserCtrl=asyncHandler(async (req,res)=>{
    const {email,password}=req.body;
    const findUser=await User.findOne({email})
    ///check kar rahe ki user exist hai ya nahi
    if(findUser && (await  findUser.isPasswordMatch(password))){
      res.json({
        _id:findUser?._id,
        firstname:findUser?.firstname,
        lastname:findUser?.lastname,
        email:findUser?.email,
        number:findUser?.number,
        token:generateToken(findUser?._id)

      })
    }
    else {
      res.status(401).json({ message: 'Invalid credentials, please check the password' });
    }
    
})


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
  res.sendStatus(204); 
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
  const {id}=req.body
  res.json(data)
})


const userCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    let products = [];
    const user = await User.findById(_id);
    // check if user already have product in cart
    const alreadyExistCart = await Cart.findOne({ orderby: user._id });
    if (alreadyExistCart) {
      alreadyExistCart.remove();
    }
    for (let i = 0; i < cart.length; i++) {
      let object = {};
      object.product = cart[i]._id;
    
      let getPrice = await Product.findById(cart[i]._id).select("price").exec();
      object.price = getPrice.price;
      products.push(object);
    }
    let cartTotal = 0;
    for (let i = 0; i < products.length; i++) {
      cartTotal = cartTotal + products[i].price * products[i].count;
    }
    let newCart = await new Cart({
      products,
      cartTotal,
      orderby: user?._id,
    }).save();
    res.json(newCart);
  } catch (error) {
    throw new Error(error);
  }
});

const getUserCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const cart = await Cart.findOne({ orderby: _id }).populate(
      "products.product"
    );
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

const emptyCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const user = await User.findOne({ _id });
    const cart = await Cart.findOneAndRemove({ orderby: user._id });
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});











 
module.exports = {userCart,getUserCart,emptyCart ,createUser,loginUserCtrl,getallUser,getUser,deleteUser,updateUser,blockUser,unblockUser,logout,userdata };
