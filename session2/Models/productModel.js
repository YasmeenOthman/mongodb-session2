const mongoose = require("mongoose");

// schema
const productSchema = new mongoose.Schema({
  product: String,
  price: Number,
  //   owner: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

// model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
