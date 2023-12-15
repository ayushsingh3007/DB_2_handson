const mongoose=require('mongoose');

const Cartschema=mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
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
    type:{
        type:String,
        required:true
    },
    qty:{
         type:Number,
         required:true
    }
})
const productcollection=mongoose.model("product",Cartschema)
module.exports=productcollection;