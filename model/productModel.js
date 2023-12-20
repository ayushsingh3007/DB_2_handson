const mongoose=require('mongoose');

const Cartschema=mongoose.Schema({
   
    Name:{
          type:String,
          required:true
    },
    image:{
         type:String,
         required:true
    },
    price:{
         type:Number,
         required:true
    },
    des:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
   cart:
         [
            {
            id:{
                type:Number,
                required:true
            },
            qty:{
                 type:Number,
                 required:true
            },
        }
         ]
   
})
const productcollection=mongoose.model("product",Cartschema)
module.exports=productcollection;
