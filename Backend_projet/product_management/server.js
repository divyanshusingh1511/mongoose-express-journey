const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes')

dotenv.config()

const app = express()
app.use(express.json())

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('DB connected successfully')
  })
  .catch(error => {
    console.log('Error', error)
  })

app.use('/products', productRoutes)

app.listen(3000, () => {
  console.log('Server started on port 3000')
})

module.exports = app
