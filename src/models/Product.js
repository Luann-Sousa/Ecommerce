const mongoose = require("mongoose");

const SchemaProduct = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productQuatity: {
    type: Number,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", SchemaProduct); // fazendo a exportação do arquivo
