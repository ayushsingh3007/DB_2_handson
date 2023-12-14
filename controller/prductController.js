// Import your model and any other necessary modules
const Product = require('../model/productModel'); // Update with your actual model

const insertSingleProduct = async (req, res) => {
    try {
        // You can access the authenticated user from req.user
        const { user } = req;

        // Get the product details from the request body
        const { id, Name, price, image, cat, type, qty } = req.body;

        // Create a new product instance
        const product = new Product({
            id,
            Name,
            price,
            image,
            cat,
            type,
            qty,
            user: user.email, // Save the user's email with the product
        });

        // Save the product to the database
        await product.save();

       return res.send({ msg: 'Product added to cart successfully.' });
    } catch (error) {
        console.log(error)
     return    res.send({ msg: 'Internal server error.' });
    }
};

const deleteSingleProduct = async (req, res) => {
    try {
        // Your delete logic here

       return  res.send({ msg: 'Product removed from cart successfully.' });
    } catch (error) {
        console.log(error)
       return  res.send({ msg: 'Internal server error.' });
    }
};

module.exports = { insertSingleProduct, deleteSingleProduct };
