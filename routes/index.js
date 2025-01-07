const { Router } = require("express");
const index = Router();
const db = require("../db/queries");
const singleMsgController = require("../controllers/singlemsg");
const mainController = require("../controllers/maincontroller");

index.get("/", mainController.getMessages);
//res.send(`messages is ${messages.then((value) => value)}`);

index.get("/singlemsg", singleMsgController);
// index.get("/singlemsg", (req, res) => {
//   console.log(req.query.user);
//   res.render("singlemsg", { msg: req.query.user });
// });
index.get("/new", (req, res) => {
  res.render("form");
});

index.post("/new", mainController.postMessage);
//   (req, res) => {
//   messages.push({
//     text: req.body.text,
//     user: req.body.username,
//   });
//   res.redirect("../");
// }

module.exports = index;
