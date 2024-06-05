import Product from "../models/Product.js";

async function list(req, res) {
  try {
    const products = await Product.find().populate("category");
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function find(req, res) {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function create(req, res) {
  try {
    const newProduct = await Product.create({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      image: req.body.image,
    });
    res.status(201).json("Product created");
  } catch (err) {
    res.status(500).json("Error del servidor");
  }
}

async function update() {}

async function destroy() {}

export default {
  list,
  find,
  create,
  update,
  destroy,
};
