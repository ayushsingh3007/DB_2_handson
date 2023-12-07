
const {default:mongoose}=require('mongoose')
const dbConnect=()=>{
    try{
        const conn=mongoose.connect(process.env.Mongourl)
    }
    catch(err){
        throw new Error(err);
    }
}
module.exports=dbConnect;