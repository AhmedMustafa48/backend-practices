const express = require("express");

const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/read", async (req, res) => {
  let users = await userModel.find({ username: "proxy1" });

  res.send(users);
});

app.get("/readAll", async (req, res) => {
  let allUsers = await userModel.find();

  res.send(allUsers);
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

app.get("/delete", async (req, res) => {
  let deletedUser = await userModel.findOneAndDelete({ username: "jan" });

  res.send(deletedUser);
});

// findone will give you even object without array , whereas find is if object is not found then it will return empty array like []

app.listen(3000);
