const axios = require("axios");
const request = axios.create({
  baseURL: "http://127.0.0.1:3000",
  withCredentials: true,
});

class BoardController {
  async getBoard(req, res, next) {
    try {
      res.render("board/board.html");
    } catch (e) {
      next(e);
    }
  }

  async getWrite(req, res, next) {
    try {
      res.render("board/write.html");
    } catch (e) {
      next(e);
    }
  }

  async postWrite(req, res, next) {
    try {
      res.redirect("/boards");
    } catch (e) {
      next(e);
    }
  }

  async getView(req, res, next) {
    try {
      const { boardidx } = req.params;
      const { data } = await request.get(`/boards/${boardidx}`);
      res.render("board/view.html", data);
    } catch (e) {
      next(e);
    }
  }

  async getModify(req, res, next) {
    try {
      res.render("board/modify.html");
    } catch (e) {
      next(e);
    }
  }

  async putModify(req, res, next) {
    try {
      res.send("good");
    } catch (e) {
      next(e);
    }
  }
}

const boardController = new BoardController();

module.exports = {
  boardController,
};
