const express = require('express')
const mongoose = require('mongoose')
const dotEnv = require('dotenv')

const bookRoutes = require('./routes/bookRoutes')

const app = express()
dotEnv.config()
app.use(express.json())
app.use(express.json())
app.use('/books', bookRoutes)



mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('DB connected successfully')
  })
  .catch(error => {
    console.log('Error', error)
  })

const PORT = 3000
app.listen(PORT, () => {
  console.log('Server Started on port', PORT)
})

module.exports = app
