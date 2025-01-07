const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  //   console.log(`rows is ${rows}`);
  //   console.log(`row 0 is ${rows[0].username}`);
  //   console.log(`row 1 is ${rows[1].username}`);
  return rows;
}

async function postAMessage(message) {
  await pool.query("INSERT INTO messages (username, text) VALUES ($1,$2)", [
    message.username,
    message.text,
  ]);
}

module.exports = {
  getAllMessages,
  postAMessage,
};
