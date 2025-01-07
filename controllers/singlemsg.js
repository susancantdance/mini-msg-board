const asyncHandler = require("express-async-handler");
const db = require("../db/queries");

//const messages = require("../messages");

const singlemsg = asyncHandler(async (req, res) => {
  const userId = req.query.username;
  const messages = await db.getAllMessages();
  const msg = messages.find((msg) => msg.username == userId);

  if (!msg) {
    res.status(404).send("Message not found");
    return;
  }

  res.render("singlemsg", { msg: msg });
});

module.exports = singlemsg;
