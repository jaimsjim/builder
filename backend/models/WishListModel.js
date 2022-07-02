const mongoose = require("mongoose");

const wishListSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Please enter your product name"],
  },
  productPrice: {
    type: Number,
    required: [true, "Please enter your product price"],
  },
  productImage: {
    type: String,
    required: [true, "Please enter your product image"],
  },
  quantity: {
    type: Number,
    required: [true, "Please enter your product quantity"],
  },
  userId: {
    type: String,
    required: [true, "Please enter your user id"],
  },
});

module.exports = mongoose.model("Wishlist", wishListSchema);
