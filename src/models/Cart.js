const mongoose = require("mongoose");

const SchemaCart = new mongoose.Schema({
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  ],
  username: {
    type: mongoose.Schema.Types.ObjectId,
    required: "User",
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  pavement: {
    card: {
      type: String,
    },
    cvc: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Cart", SchemaCart); // fazendo a exportação do arquivo
