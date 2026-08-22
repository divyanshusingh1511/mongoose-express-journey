const express = require('express')
const router = express.Router()
const {
  createNewBook,
  getAllTheBooks,
  getbybookId,
  updatetheBook,
  deleteBook,
} = require('../controllers/bookController')

router.post('/', createNewBook)
router.get('/', getAllTheBooks)
router.get('/:id', getbybookId)
router.put('/:id', updatetheBook)
router.delete('/:id', deleteBook)

module.exports = router
