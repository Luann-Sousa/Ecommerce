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
