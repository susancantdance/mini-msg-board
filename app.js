const express = require("express");
const app = express();
const path = require("node:path");
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const index = require("./routes/index");

app.use("/", index);

const PORT = 3;

app.listen(PORT, () => console.log(`running on port ${PORT}!`));
