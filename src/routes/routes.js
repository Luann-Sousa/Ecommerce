const { Router } = require("express"); //pegando a função do express para lidarmos com routeamento
const router = Router();

const UserController = require("../controllers/UsersControllers"); //user controller

router.get("/index", (request, response) => {
  response.json({
    error: false,
    messeger: "Olá, ProgramadorWL",
  });
});

//USUÁRIOS
router.post("/users", UserController.createUser); // criar usuários
router.get("/users", UserController.getUsers); // buscar todos usuários
router.get("/users/:user_id"); // buscar usuário especifico
router.post("/login"); // fazer login do usuário

//PRODUTOS
router.post("/product/:user_id"); //criar pruduto(passar o ud para sabermos quem foi que crio o produto)
router.get("/products"); // listagem de todos os produtos
router.get("/products/:user_id"); // buscar produto de um usuario especifico
router.get("/products/:product_id"); // buscar um produto especifico
router.patch("/products/user_id/:product_id"); // atualizar um produto
router.delete("/products/:user_id/:product_id"); // deletar o produto tem que manda id_user e id_product

//CARD/COMPRA
router.post("/cart/:user_id"); // fazer um comprar
router.get("/cart/user_id"); // todos os cartão de um usuário
router.get("/cart/:cart_id"); // bucar cartão

module.exports = router; // exportando nosso arquivo de rotas
