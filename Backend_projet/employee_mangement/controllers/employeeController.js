const Employee = require('../models/Employee')

const createNewEmplyee = async (req, res) => {
  try {
    const {
      name,
      email,
      department,
      salary,
      experience,
      position,
      joiningDate,
    } = req.body

    const newEmployee = new Employee({
      name,
      email,
      department,
      salary,
      experience,
      position,
      joiningDate,
    })

    const savedEmployee = await newEmployee.save()

    res.status(201).json(savedEmployee)
  } catch (error) {
    res.status(400).json({
      message: error.message,
    })
  }
}

module.exports = { createNewEmplyee }