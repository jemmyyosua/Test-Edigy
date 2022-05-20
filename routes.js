const express = require('express')
const path = express.Router()
const { uploadFile } = require('./middleware/uploud')

// Controller Product
  const {
    getProduct,
    getProducts,
    addProduct,
    deleteProduct,
    updateProduct
  } = require("./controller/product")

// Route 
path.get("/products", getProducts)
path.get("/product/:id", getProduct)
path.post("/product", uploadFile("image") ,addProduct)
path.patch("/product/:id", uploadFile("image") ,updateProduct)
path.delete("/product/:id", deleteProduct)

module.exports = path