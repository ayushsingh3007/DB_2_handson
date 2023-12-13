const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
const secretkey="AYUSHSINGH"
const saltRound = 10;

const arr=[]

const register=(req, res) => {
    const data = req.body;
    let findAccount = arr.find(item => item.email === data.email);
    if(findAccount){
        return res.send({msg:"this email is already register"})
    }
    const hashPassword = bcrypt.hashSync(data.password, saltRound);
    data.password=hashPassword
    console.log(arr)
    arr.push(data);
    console.log(arr)
    console.log(secretkey);
   const token=jwt.sign({user:data.email},secretkey,{expiresIn:"3d"})
   const refreshtoken=jwt.sign({user:data.email},secretkey)
   console.log(token);
    console.log(arr)
    res.send({msg:"User registered successfully!", jwtToken:token});
};



const login=(req, res) => {
    const loginData = req.body;
    console.log(loginData, "login data");

    let findAccount = arr.find(item => item.email === loginData.email);

    if (!findAccount) {
        return res.send({ msg: "Email not registered" });
    }

    const validate = bcrypt.compareSync(loginData.password, findAccount.password);
       console.log(validate)
    if (validate) {
        console.log("User login successful:", loginData.email);

        return res.send({ msg: "User login successfully" });
    } else {
        console.log("Password not match:", loginData.email);

        return res.send({ msg: "Password not match" });
    }
}

module.exports={register,login}