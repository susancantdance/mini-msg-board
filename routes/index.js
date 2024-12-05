const { Router } = require("express");
const index = Router();
const singleMsgController = require("../controllers/singlemsg");
const messages = require("../messages");

index.get("/", (req, res) => {
  res.render("index", { messages: messages });
});
index.get("/singlemsg", singleMsgController);
// index.get("/singlemsg", (req, res) => {
//   console.log(req.query.user);
//   res.render("singlemsg", { msg: req.query.user });
// });
index.get("/new", (req, res) => {
  res.render("form");
});

index.post("/new", (req, res) => {
  messages.push({ text: req.body.msg, user: req.body.user, added: new Date() });
  res.redirect("../");
});
module.exports = index;
