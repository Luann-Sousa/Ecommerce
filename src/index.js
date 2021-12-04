const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const app = express();

//conexão com banco de dados.
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to database !"))
  .catch((error) => console.log("Erroru !", error));

//iniciando o servidor
app.listen(2222, () => console.log("Start running !"));
