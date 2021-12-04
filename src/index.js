const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/routes");
const app = express();

//conexão com banco de dados.
mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Connected to database !"))
  .catch((error) => console.log("Erroru !", error));

app.use(cors()); // nossa aplicão deixa ou
app.use(express.json()); //para nossa api trabalhar com dados do formato JSON

app.use(routes); // aqui nossa aplicação inicia as rotas

app.listen(2222, () => console.log("Start running !")); //iniciando o servidor
