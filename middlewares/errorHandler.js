///it is for not found item
const notfound=(req,res,next)=>{
    const error=new Error(`Not Found:${req.originalUrl()}`);
    return res.status(404 )
    next(error)
}