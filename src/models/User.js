const mongoose = require("mongoose");

const SchemaUser = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", SchemaUser); // fazendo a exportação do arquivo
