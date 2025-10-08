const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/mongopractice")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("Connection error:", err));

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});

module.exports = mongoose.model("user", userSchema);
