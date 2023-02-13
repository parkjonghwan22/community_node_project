class AdminController {
  constructor({ adminService }) {
    this.adminService = adminService;
  }

  async getUserList(req, res, next) {
    try {
      const response = await this.adminService.userList();
      console.log("@@@@@@@@@@@@@", response);
      res.json(response);
    } catch (e) {
      next(e);
    }
  }

  async putUser(req, res, next) {
    try {
      const { nickname } = req.params;
      const itemPut = await this.adminService.userModify({
        nickname,
        ...req.body,
      });
      res.json(itemPut);
    } catch (e) {
      next(e);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const { nickname } = req.params;
      const item_delete = await this.adminService.userDelete({ nickname });
      res.json(item_delete);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = AdminController;
