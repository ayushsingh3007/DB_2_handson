// server.js
const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();

const PORT =process.env.PORT||5000
const authUser = require('./routes/authUser');
const bodyParser = require('body-parser');




app.use(cors({
  origin:"*"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user', authUser);



app.listen(PORT,async ()=>{
  try{
      await dbConnect();
      console.log("server is running with",PORT)
  }
  catch(error){
      console.log(error)
  }
})
