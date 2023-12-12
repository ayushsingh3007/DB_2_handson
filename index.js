const express = require('express');

const cors=require('cors')

const app = express();  // Create an instance of the Express application
const dotenv=require('dotenv');
const userRouter = require('./router/userRouter');
const store = require('./router/data');
dotenv.config();
const port=process.env.PORT
app.use(express.json());

app.use(cors({
    origin:"*"
}))
app.use("/api/user",userRouter);
app.use("/api/user",store)

app.listen(port, () => {
    console.log("Server is running fine");
});
