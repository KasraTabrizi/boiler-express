require("dotenv").config();
var express = require("express");
var app = express();

const absolutePath = __dirname + "/public";
const htmlPagePath = __dirname + "/views/index.html";

app.use("/public", express.static(absolutePath));

app.get("/", (req, res) => {
  res.sendFile(htmlPagePath);
});

app.get("/json", (req, res) => {
  process.env.MESSAGE_STYLE === "uppercase"
    ? res.json({ message: "HELLO JSON" })
    : res.json({ message: "Hello json" });
});

module.exports = app;
