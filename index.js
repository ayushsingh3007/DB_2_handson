const express = require('express');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;

const authUser = require('./routes/authUser');
const bodyParser = require('body-parser');
const { notfound, errorHandler } = require('./middlewares/errorHandler');

dbConnect();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/user', authUser);
app.use(notfound)
app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});
