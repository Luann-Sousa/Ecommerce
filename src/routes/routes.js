const { Router } = require("express"); //pegando a função do express para lidarmos com routeamento
const router = Router();

const UserController = require("../controllers/UsersControllers"); //user controller
const SessionController = require("../controllers/SessionControllers"); // sesão de usuário
const ProductController = require(".././controllers/ProductController");
const CartController = require("../controllers/CartController");

//USUÁRIOS
router.post("/users", UserController.createUser); // criar usuários
router.get("/users", UserController.getUsers); // buscar todos usuários
router.get("/users/:user_id", UserController.getUserById); // buscar usuário especifico
router.post("/login", SessionController.createSessionUser); // fazer login do usuário

//PRODUTOS
router.post("/products/:user_id", ProductController.createProduct); //criar pruduto(passar o ud para sabermos quem foi que crio o produto)
router.get("/products", ProductController.getUserAllProduct); // listagem de todos os produtos
router.get("/products/:user_id"); // buscar produto de um usuario especifico
router.get("/products/:product_id", ProductController.getProductById); // buscar um produto especifico
router.put("/products/:user_id/:product_id", ProductController.updateProduct); // atualizar um produto
router.delete(
  "/products/:user_id/:product_id",
  ProductController.deleteProduct
); // deletar o produto tem que manda id_user e id_product

//CARD/COMPRA
router.post("/carts/:user_id", CartController.createCart); // fazer um comprar
router.get("/carts/:product_id", CartController.cartGetAll); // todos os cartão de um usuário
router.get("/cart/:cart_id"); // bucar cartão

module.exports = router; // exportando nosso arquivo de rotas
