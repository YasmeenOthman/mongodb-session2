const mongoose = require("mongoose");

// schema
const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, default: "yasmeen" },
    email: { type: String, lowercase: true },
  },
  { timestamps: true }
);

// model
const User = mongoose.model("User", userSchema);

module.exports = User;
