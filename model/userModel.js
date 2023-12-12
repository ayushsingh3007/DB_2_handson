const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  cart: [
    {
      product: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        Name: {
          type: String,
          required: true,
        },
        price: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        cat: {
          type: String,
          required: true,
        },
        type: {
          type: String,
          required: true,
        },
      },
      qty: {
        type: Number,
        default: 0,
      },
    },
  ],
}, { timestamps: true });



module.exports = mongoose.model('User', userSchema);
