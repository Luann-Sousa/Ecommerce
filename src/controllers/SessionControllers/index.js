const User = require("../../models/User");
module.exports = {
  async createSessionUser(request, response) {
    const { username } = request.body;

    try {
      const user = await User.findOne({ username });

      return response.status(200).json({
        error: false,
        session: user,
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
