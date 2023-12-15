const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken');
const usercollection = require('../model/userModel');
const stripe=require('stripe')("sk_test_51OK7daSAg3lXy8qLZhheRgo3J3APhi6R52IAFx3uP0NwcRhA5MXL1WkNx9p73iwoMSHmNRsEJ6LyVwnhkcrQYGIB00X6Jf63tM")

const secretkey="AYUSHSINGH"

// const {databaseName}=require("../config/db")
// const usercollection=databaseName.collection("userdetails")

const saltRound=10

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
    
   const token=jwt.sign({user:data.email},secretkey,{expiresIn:"30d"})
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



const logout = async (req, res) => {
  const { token } = req.body;

  console.log('Received Token for logout:', token);

  if (!token) {
    return res.send({ msg: "Token not provided" });
  }

  try {
    // Decode the token
    const decoded = jwt.decode(token);

    console.log('Decoded Token:', decoded);

    // Verify the decoded token
    const verified = jwt.verify(token, secretkey);

    console.log('Verified Token:', verified);

    // Check if the user exists
    const findAccount = await usercollection.findOne({ email: decoded.user });

    if (!findAccount) {
      return res.send({ msg: "User not found" });
    }

    // Perform any additional logout logic if needed

    res.send({ msg: "User logged out successfully" });
  } catch (error) {
    console.error('Error during token verification:', error);
    return res.send({ msg: "Invalid token" });
  }
};











const payment= async (req, res) => {
 const  {products}=req.body
  console.log(products)
  
  
  const lineItems=products.map((product)=>({
    price_data:{
      currency:"inr",
      product_data:{
        name:product.Name
      },
      unit_amount:product.price*100
    },
    quantity:product.qty
  }))
  const session =await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    line_items:lineItems,
    mode:"payment",
    success_url:"http://localhost:3000/",
    cancel_url:"http://localhost:3000/cart",
  });
  res.json({id:session.id})
};





module.exports={register,login,logout,payment}