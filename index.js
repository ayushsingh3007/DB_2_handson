const express=require('express')
const app=express()
const donenv=require('dotenv').config()
const PORT=process.env.PORT||4000;////agar port number number env file me nhi ho to 
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})