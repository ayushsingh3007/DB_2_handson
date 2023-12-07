
const {default:mongoose}=require('mongoose')
const dbConnect=()=>{
    try{
        const conn=mongoose.connect(process.env.Mongourl)
    }
    catch(err){
        console.log(err);
    }
}
module.exports=dbConnect;