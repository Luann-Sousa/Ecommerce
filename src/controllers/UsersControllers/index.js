const User = require("../../models/User");

module.exports = {
  //criar um usuário
  async createUser(request, response) {
    const { username } = request.body;

    try {
      const newUser = await User.create({
        username,
      });

      return response.status(201).json({
        error: false,
        usuario: newUser,
      });
    } catch (error) {
      if (error) {
        return response.status(400).json({
          error: true,
          messeger: "Error em criar usuário tente mais tarde !",
        });
      }
    }
  },

  //buscar todos usuario
  async getUsers(request, response) {
    try {
      const users = await User.find();

      return response.status(200).json({
        error: false,
        users: users,
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
};
