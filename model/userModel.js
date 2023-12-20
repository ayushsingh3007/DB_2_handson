const mongoose=require('mongoose')

const userModel= new mongoose.Schema({
   firstname:{
      type:String,
      required:true
      
   },
   lastname:{
        type:String,
        required:true

        
   },
   password:{
       type:String,
       required:true
   },
   email:{
        type:String,
        required:true
   },
   number:{
      type:Number,
      required:true
      
   },
   cart: [
      {
          product: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'product',
          },
          qty: {
              type: Number,
              required: true,
          },
      },
  ],



})
const usercollection=mongoose.model("user",userModel)
module.exports=usercollection;
