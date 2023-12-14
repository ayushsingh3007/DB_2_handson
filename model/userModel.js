const mongoose=require('mongoose')

const userModel= new mongoose.Schema({
   firstname:{
      type:String,
      
   },
   lastname:{
        type:String,
        
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
      
   }



})
const usercollection=mongoose.model("user",userModel)
module.exports=usercollection;