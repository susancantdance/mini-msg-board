const { Router } = require("express");
const newMsg = Router();

newMsg.get("/", (req, res) => res.send("new message"));

module.exports = newMsg;
