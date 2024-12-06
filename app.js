const express = require("express");
const app = express();
const path = require("node:path");
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const index = require("./routes/index");

app.use("/", index);

const port = process.env.PORT || 3000;

// Listen on `port` and 0.0.0.0
app.listen(port, "0.0.0.0", function () {
  console.log(`listening on ${port}`);
});
