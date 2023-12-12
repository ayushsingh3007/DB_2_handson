const jwt=require('jsonwebtoken')
const secretkey=process.env.SECRET_KEY






const auth=(req,res,next)=>{
     const data=req.headers['authorization']
     console.log(data,"data");
     const token=data.split(' ')[1]
     console.log("token",token);
     jwt.verify(token,process.env.SECRET_KEY,(err,validate)=>{
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