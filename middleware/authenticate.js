const jwt=require('jsonwebtoken')
const secretkey="AYUSHSINGH"






const auth=(req,res,next)=>{
     const data=req.headers['authorization']
     console.log(data,"data");
     const token=data.split(' ')[1]
     console.log("token",token);
     jwt.verify(token,secretkey,(err,validate)=>{
        if(err){
            return res.send(err)
        }
        if(validate){
            return  next();
            }
            return res.send({msg:"user not authorized"})

     })
   
}
module.exports=auth;