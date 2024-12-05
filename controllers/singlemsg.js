const asyncHandler = require("express-async-handler");
const messages = require("../messages");

const singlemsg = asyncHandler(async (req, res) => {
  const userId = req.query.user;
  const msg = messages.find((msg) => msg.user == userId);

  if (!msg) {
    res.status(404).send("Message not found");
    return;
  }

  res.render("singlemsg", { msg: msg });
});

module.exports = singlemsg;
