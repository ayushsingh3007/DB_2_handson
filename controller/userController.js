const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const usercollection = require('../model/userModel');
const secretkey="AYUSHSINGH"

// const {databaseName}=require("../config/db")
// const usercollection=databaseName.collection("userdetails")

const saltRound=10
// const arr=[]
const register=async(req, res) => {
    const data = req.body;
    console.log(data)
    let findAccount =await usercollection.findOne({email:data.email})
    
    if(findAccount){
        return res.send({msg:"this email is already register"})
    }
    const hashPassword = bcrypt.hashSync(data.password, saltRound);
    data.password=hashPassword
    // console.log(arr)
    // arr.push(data);
    // console.log(arr)
    const result=await usercollection.insertMany(data)
    
   const token=jwt.sign({user:data.email},secretkey,{expiresIn:"30h"})
   const refreshtoken=jwt.sign({user:data.email},secretkey)
   console.log(token);
    // console.log(arr)
    res.send({msg:"User registered successfully!", jwtToken:token});
};



const login=async(req, res) => {
    const loginData = req.body;
    console.log(loginData, "login data");

    let findAccount =await usercollection.findOne({email:loginData.email});

    if (!findAccount) {
        return res.send({ msg: "Email not registered" });
    }

    const validate = bcrypt.compareSync(loginData.password, findAccount.password);
       console.log(validate)
    if (validate) {
        console.log("User login successful:", loginData.email);

        return res.send({ msg: "User login successfully" });
    } else {
        console.log("Password not match:", loginData.email);

        return res.send({ msg: "Password not match" });
    }
}






let cart = [];

// Route to add an item to the cart
const addtocart=async(req, res) => {
  const { product } = req.body;

  if (!product) {
    return res.status(400).json({ error: 'Product information is required' });
  }

  // Check if the product is already in the cart
   const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    // If the product is already in the cart, update the quantity
    existingProduct.qty += 1;
  } else {
    // If the product is not in the cart, add it
    cart.push({ ...product, qty: 1 });
  }

  res.json({ cart });
}












module.exports={register,login,addtocart}