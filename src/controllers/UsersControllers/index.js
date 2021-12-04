const User = require("../../models/User");

module.exports = {
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
};
