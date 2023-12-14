const mongoose=require('mongoose')
mongoose.set("strictQuery",true);

const cloudurl="mongodb+srv://ayushsingh6394:mrayush123@cluster0.3caz3os.mongodb.net/?retryWrites=true&w=majority"


const connection=async()=>{
    try{
       await mongoose.connect(cloudurl)
       console.log("db connected successfully");
    }
    catch(err){
         console.log(err);
    }
}
module.exports=connection

