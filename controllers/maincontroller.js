const db = require("../db/queries");

async function getMessages(req, res) {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index", { messages: messages });
}

async function postMessage(req, res) {
  const message = req.body;
  await db.postAMessage(message);
  res.redirect("/");
}

module.exports = {
  getMessages,
  postMessage,
};

// let messages = [];
// messagepromise.then((value) => {
//   messages = value.slice();
//   console.log(`value is`);
//   console.log(value);
// });
