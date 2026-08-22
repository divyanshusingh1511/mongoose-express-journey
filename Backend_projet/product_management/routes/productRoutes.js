const express = require('express')
const router = express.Router()

const {createNewProduct} = require('../controllers/productController')

router.post('/add-product', createNewProduct)

module.exports = router
