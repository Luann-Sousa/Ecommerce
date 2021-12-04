const Produtc = require("../../models/Product");

module.exports = {
  //criação de um produto
  async createProduct(request, response) {
    const {
      productName,
      productDescription,
      productPrice,
      productQuatity,
      productImage,
      username,
    } = request.body;
    const { user_id } = request.params;

    try {
      const newProduct = await Produtc(
        {
          productName,
          productDescription,
          productPrice,
          productQuatity,
          productImage,
          username,
        },
        user_id
      );

      return response.status(201).json({
        error: false,
        product: newProduct,
      });
    } catch (error) {
      if (error) {
        return response.status(400).json({
          error: true,
          messeger: "Error em buscar usuários tente mais tarde !",
        });
      }
    }
  },
  //listagem ou buscar de todos usuarios que criaram produtos
  async getUserProduct(request, response) {},
  //atualização de um produto
  async updateProduct(request, response) {},
  //exclusão de um produto
  async deleteProduct(request, response) {},
  //buscar todos os produto
  async getProduct(request, response) {},
  //buscar por apenas um produto
  async getProductById(request, response) {},
};
