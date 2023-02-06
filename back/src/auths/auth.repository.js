class AuthRepository {
  constructor({ Users }) {
    this.User = Users;
  }
  async getUserByInfo({ userid, password }) {
    try {
      const user = await this.User.findOne({
        raw: true,
        attributes: { exclude: ["password"] },
        where: {
          userid,
          password,
        },
      });
      return user;
    } catch (e) {
      throw new Error(e);
    }
  }
}
module.exports = AuthRepository;
