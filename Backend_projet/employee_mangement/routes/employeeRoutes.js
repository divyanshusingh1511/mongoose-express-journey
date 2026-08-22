const express = require('express')
const router = express.Router()

const {createNewEmplyee} = require('../controllers/employeeController')

router.post('/add-user', createNewEmplyee)

module.exports = router
