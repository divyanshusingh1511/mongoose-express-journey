const Product = require('../models/Product')

const createNewProduct = async (req, res) => {
  try {
    const {name, category, description, price, stock} = req.body
    const newProduct = new Product({
      name,
      category,
      description,
      price,
      stock,
    })
    const productSave = await newProduct.save()
    res.status(201).json(productSave)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

module.exports = {createNewProduct}
