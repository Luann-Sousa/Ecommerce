const Product = require("../../models/Product");

module.exports = {
  //criação de um produto
  async createProduct(request, response) {
    const dateProdutcs = request.body;
    const { user_id } = request.params;

    const data = { ...dateProdutcs, username: user_id };

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
  async getProductById(request, response) {
    const { product_id } = request.params;

    try {
      const productOne = await Product.findById(product_id);

      return response.status(200).json({
        error: false,
        product: productOne,
      });
    } catch (error) {
      if (error) {
        return response.status(400).json({
          error: true,
          messeger: "Error em buscar um produto tente mais tarde !",
        });
      }
    }
  },
  //listagem ou buscar de todos usuarios que criaram produtos
  async getUserAllProduct(request, response) {
    const produtcs = await Product.find();

    return response.status(200).json({
      error: "false",
      products: produtcs,
    });
  },
  //atualização de um produto
  async updateProduct(request, response) {
    const { product_id } = request.params;
    const body = request.body;
    try {
      const productUpdated = await Product.findByIdAndUpdate(product_id, body);

      return response.status(200).json({
        error: true,
        product: productUpdated,
      });
    } catch (error) {
      if (error) {
        return response.status(400).json({
          error: true,
          messeger: "Error em atualizar um produto tente mais tarde !",
        });
      }
    }
  },
  //exclusão de um produto
  async deleteProduct(request, response) {
    const { product_id } = request.params;

    try {
      const productDeleted = await Product.findByIdAndDelete(product_id);

      response.status(200).json({
        error: false,
        productDeleted: productDeleted,
      });
    } catch (error) {
      if (error) {
        return response.status(400).json({
          error: true,
          messeger: "Error em excluir um produto tente mais tarde !",
        });
      }
    }
  },
  //buscar todos os produto
  async getProductBy(request, response) {},
};
