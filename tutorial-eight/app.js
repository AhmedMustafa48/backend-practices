const express = require("express");

const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hello");
});



app.listen(3000);
