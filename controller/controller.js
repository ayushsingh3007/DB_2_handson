// controller.js
console.log('Before import');
const User = require('../model/userModel.js');
console.log('After import');
const createUser = async (req, res) => {
    const email = req.body.email;
    const finduser = await User.findOne({email} );

    if (!finduser) {
        const newuser = await User.create(req.body);
        return res.json(newuser);
    } else {
        res.json({
            msg: "User already exists",
            success: false
        });
    }
};

module.exports = { createUser };
