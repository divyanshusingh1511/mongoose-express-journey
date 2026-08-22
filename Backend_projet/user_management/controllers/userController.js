const User = require('../models/User')

const createUser = async (req, res) => {
  try {
    const {name, email, password, role, isActive} = req.body

    const usertosave = new User({
      name,
      email,
      password,
      role,
      isActive,
    })
    const savedUser = await usertosave.save()
    res.status(201).json(savedUser)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

module.exports = {createUser}
