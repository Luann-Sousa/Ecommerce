const Product = require("../../models/Product");

module.exports = {
  //criação de um produto
  async createProduct(request, response) {
    const dateProdutcs = request.body;
    const { user_id } = request.params;

    const data = { user_id, ...dateProdutcs };

    try {
      const product = await Product.create(data);

      return response.status(201).json({
        error: false,
        messeger: "Produto foi criando",
        produtuc: product,
      });
    } catch (error) {}
    if (error) {
      return response.status(201).json({
        error: true,
        messeger: "Não foi possivel criar seu produto, tente mais tarde !",
      });
    }
  },
  //buscar por apenas um produto
  async getProduct(request, response) {
    const { product_id } = request.params;

    const product = await Product.findById({});
  },
  //listagem ou buscar de todos usuarios que criaram produtos
  async getUserProduct(request, response) {
    const produtcs = await Product.find();

    return response.status(200).json({
      error: "false",
      products: produtcs,
    });
  },
  //atualização de um produto
  async updateProduct(request, response) {},
  //exclusão de um produto
  async deleteProduct(request, response) {},
  //buscar todos os produto
  async getProductById(request, response) {},
};
