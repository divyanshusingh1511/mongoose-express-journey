const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoutes = require('./routes/userRoutes')

dotenv.config()

const app = express()
app.use(express.json())

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('DB Server Connected Successfully')
  })
  .catch(error => {
    console.log('Error', error)
  })

app.use('/users', userRoutes)

const PORT = process.env.PORT || 3000

if (require.main === module) {
  app.listen(PORT, () => {
    console.log('Server Started')
  })
}

module.exports = app
