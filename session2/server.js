// populate /
//  MVC  ===> structuring our code ==> model view controller
const mongoose = require("mongoose");
const express = require("express");
const main = require("./connection");

const Product = require("./Models/productModel");
const userRoute = require("./Routers/userRoutes");
const app = express();

// middleware
app.use(express.json());
const port = 3000;

// basic routes - product
app.post("/products/create", async (req, res) => {
  try {
    let data = req.body;
    let newProduct = await Product.create(data);
    res.send(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Can not create a new user" });
  }
});

app.get("/products", async (req, res) => {
  // populate
  try {
    let products = await Product.find().populate("owner");
    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("can not get ");
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    let newValue = req.body;
    let id = req.params.id;
    await Product.updateOne({ _id: id }, newValue);
    res.send("updated");
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: "can not update" });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    let id = req.params.id;
    await Product.deleteOne({ _id: id });
    res.send({ msg: "deleted" });
  } catch (error) {
    console.log(err);
    res.status(500).send({ msg: "can not delete" });
  }
});

// use user route

app.use("/users", userRoute);

app.listen(port, () => {
  console.log(`server is start listening on port ${port}`);
});
