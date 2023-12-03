const mongoose=require('mongoose')
 const bcrypt=require('bcrypt')
var userSchema=new mongoose.Schema({
      firstname:{
        type:String,
       required:true
    },
      lastname:{
         type:String,
         required:true
      },
      email:{
        type:String,
        required:true,
        unique:true
      },
      password:{
        type:String,
        required:true,
        unique:true
      },
      number:{
        type:String,
        required:true,
        
      },
      role:{
        type:String,
        default:"user"
      },
      isBlocked:{
       type:Boolean,
       default:false,
      },
      cart:{
        type:Array,
        default:[]
      },
      address:[{type:mongoose.Schema.Types.ObjectId,ref:"Address"}],
      wishlist:[{type:mongoose.Schema.Types.ObjectId,ref:"Wishlist"}],
    },
   
{typestamps:true}
   



)

userSchema.pre('save',async function (next){
  const salt=bcrypt.genSaltSync(10);
  this.password=await bcrypt.hash(this.password,salt)
})

userSchema.methods.isPasswordMatch=async function(enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password);
  
}

const User = mongoose.model('User', userSchema);
module.exports = User;