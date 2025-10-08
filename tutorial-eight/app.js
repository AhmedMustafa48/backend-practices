const express = require("express");

const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "faisal",
    email: "xyz@gmail.com",
    username: "jan",
  });

  res.send(createdUser);
});



app.listen(3000);
