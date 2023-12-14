const mongoose=require('mongoose')

const productModel= new mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    Name :{
        type:String,
        required:true
    },
    price :{
       type:Number,
       required:true
    },
    image:{
       type:String,
       required:true
    } ,
    cat :{
        type:String,
        required:true
    },
    type:{
       type:String,
       required:true
    } ,
    qty:{
       type:Number,
       required:true
    }
})
const productcollection=("product",productModel)