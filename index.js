// server.js
const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT||5000;

const authUser = require('./routes/authUser');
const bodyParser = require('body-parser');



dbConnect()
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user', authUser);



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
