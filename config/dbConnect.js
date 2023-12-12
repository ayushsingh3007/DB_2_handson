const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect(process.env.Mongourl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('MongoDB connected successfully');
        })
        .catch((err) => {
            console.error('MongoDB connection error:', err.message);
        });
};

module.exports = dbConnect;
