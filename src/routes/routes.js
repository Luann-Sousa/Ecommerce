const { Router } = require("express"); //pegando a função do express para lidarmos com routeamento

const router = Router();

router.get("/index", (request, response) => {
  response.json({
    error: false,
    messeger: "Olá, ProgramadorWL",
  });
});

module.exports = router; // exportando nosso arquivo de rotas
