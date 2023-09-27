// basic routes - user

const express = require("express");
const router = express.Router();
const User = require("../Models/userModel");

router.post("/create", async (req, res) => {
  try {
    let data = req.body;
    let newUser = await User.create(data);
    res.send(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Can not create a new user" });
  }
});

router.get("/", async (req, res) => {
  try {
    let users = await User.find().sort({ createdAt: 1 }).limit(2);
    res.send(users);
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    let newValue = req.body;
    let id = req.params.id;
    await User.updateOne({ _id: id }, newValue);
    res.send("updated");
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "can not update" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    await User.deleteOne({ _id: id });
    res.send({ msg: "deleted" });
  } catch (error) {
    console.log(err);
    res.status(500).send({ msg: "can not delete" });
  }
});

module.exports = router;
