const { Router } = require("express");
const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form");
});

newRouter.post("/", (req, res) => {
  messages.push({ text: req.body.msg, user: req.body.user, added: new Date() });
  res.redirect("../");
});

module.exports = newRouter;
