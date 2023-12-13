const express = require('express');

const cors=require('cors')

const app = express();  // Create an instance of the Express application
const dotenv=require('dotenv');
const userRouter = require('./router/userRouter');
const store = require('./router/data');
const connection = require('./config/db');


dotenv.config();
const port=process.env.PORT
app.use(express.json());

app.use(cors())
app.use("/api/user",userRouter);
app.use("/api/user",store)

app.listen(port, async() => {
    try{
       await connection()
        console.log(`server running fine ${port}`);
    }
    catch(err){
        console.log(err,"server failed to start");
    }
});
