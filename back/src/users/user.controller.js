class UserController {
  constructor({ userService }) {
    this.userService = userService;
  }
  async postSignup(req, res, next) {
    try {
      const user = await this.userService.signup(req.body);
      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  }

  async postUserCheck(req, res, next) {
    // console.log(`con :`, req.body);
    try {
      // const { userid } = req.body;
      const user = await this.userService.userCheck(req.body);
      res.status(201).json(user);
    } catch (e) {
      next(e);
    }
  }

  async getMe(req, res, next) {
    try {
      if (!req.headers.authorization) throw new Error("No Authorization");
      const [type, token] = req.headers.authorization.split(" ");
      if (type.toLowerCase() !== "bearer") throw new Error("Authorization Type Error");
      const user = await this.userService.me(token);
      res.json(user);
    } catch (e) {
      next(e);
    }
  }

  async putProfile(req, res, next) {
    try {
      const token = await this.userService.modifyProfile(req.body);
      // console.log("check 용", req.body);
      // console.log("check 용", token);
      // res.cookie('token', token)
      res.json({ token });
    } catch (e) {
      next(e);
    }
  }

  async kakaoSignin(req, res, next) {
    try {
      const config = require("../../config");
      const { code } = req.query;
      const token = await this.userService.signinWithKakao({ code });
      res.cookie("token", token);
      res.redirect(`http://${config.server.host}:${config.server.port}`);
    } catch (e) {
      next(e);
    }
  }

  async getDetail(req, res, next) {
    try {
      const nickname = req.query?.nickname;
      if (!nickname) return;
      const post = req.query?.post || "board";
      const response = await this.userService.getDetails({ nickname, post });
      res.json(response);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = UserController;
