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
  async cartGetAll(request, response) {
    try {
      const { product_id } = request.params;
      const getcartALl = await Cart.findById(product_id);
      console.log(getcartALl);

      return response.json({
        error: false,
        cards: getcartALl,
      });
    } catch (error) {
      if (error) {
        return response.json({
          error: true,
          getcartALl,
        });
      }
    }
  },
};
