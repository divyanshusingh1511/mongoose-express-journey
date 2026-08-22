const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const employeeRouter = require('./employeeRoutes')

dotenv.config()

const app = express()

app.use(express.json())

app.use('/user', employeeRouter)

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('DB connected successfully')
  })
  .catch(error => {
    console.log('Error connecting to DB', error)
  })

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server started running on port ${PORT}`)
})

module.exports = app
