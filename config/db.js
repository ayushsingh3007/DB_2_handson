const {MongoClient}=require("mongodb")
const mongodburl="mongodb://localhost:27017"

const mongoserver=new MongoClient(mongodburl)

const connection =async()=>{
    try{
     await mongoserver.connect()
     console.log("connection established");
    }
    catch(err){
        console.log(`error accur ${err}`);
    }
}

module.exports=connection