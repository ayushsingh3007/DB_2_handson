const mongoose = require("mongoose"); // Erase if already required

const  cartSchema=mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
      type:String,
      required:true
    },
    cat:{
      type:String,
      required:true
    },
    type:{
      type:String,
      required:true
    }

})
module.exports=mongoose.model("Cart",cartSchema)
