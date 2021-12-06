const Cart = require("../../models/Cart");

module.exports = {
  //criando card
  async createCart(request, response) {
    const { user_id } = request.params;
    const data = request.body;

    const card = await Cart.create({ ...data, username: user_id });

    return response.status(201).json({
      error: false,
      cart: card,
    });
  },
  //buscando todas as compras
  async cartGetAll(request, resposse) {},
};
