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

app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    { username: "proxy" },
    { username: "proxy1" },
    { new: true }
  );

  res.send(updatedUser);
});

app.get("/read", async (req, res) => {
  let users = await userModel.find();

  res.send(users);
});

app.listen(3000);
