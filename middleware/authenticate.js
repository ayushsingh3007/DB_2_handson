const jwt =require('jsonwebtoken')
const secretkey="AYUSHSINGH"


const authenticate=(req,res,next)=>{
  const data=req.headers["authorization"]
  console.log(data);
  const token=data.split(' ')[1]
  console.log(token);
  jwt.verify(token,secretkey,(err,validate)=>{
    if(err){
      return res.send({msg:err})
    }
    if(validate){
      return next()
     }
     return res.send({msg:"user not found"})
  })
  
  
}

module.exports=authenticate;

