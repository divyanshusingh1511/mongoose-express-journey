const BookLibrary = require('../models/Book')

const createNewBook = async (req, res) => {
  try {
    const {bookId, title, author, isbn, price, stock, createdAt} = req.body

    const newBook = new BookLibrary({
      bookId,
      title,
      author,
      isbn,
      price,
      stock,
      createdAt,
    })

    const saveBookInfo = await newBook.save()
    res.status(201).json(saveBookInfo)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

// Get all the books

const getAllTheBooks = async (req, res) => {
  try {
    const books = await BookLibrary.find()
    res.status(200).json(books)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

// Get by the particular book id

const getbybookId = async (req, res) => {
  try {
    const bookId = await BookLibrary.findOne({bookId: req.params.id})
    if (!bookId) {
      return res.status(404).json({message: 'Book not found'})
    }
    res.status(200).json(bookId)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

// Updte the book library mangement system
const updatetheBook = async (req, res) => {
  try {
    const updateBook = await BookLibrary.findOneAndUpdate(
      {bookId: req.params.id},
      req.body,
      {new: true, runValidators: true},
    )
    if (!updateBook) {
      return res.status(404).json({message: 'Book not found'})
    }
    res.status(200).json(updateBook)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

// delete the book mangement from the library mangement system

const deleteBook = async (req, res) => {
  try {
    const deleteBook = await BookLibrary.findByIdAndDelete(req.params.id)
    if (!deleteBook) {
      return res.status(404).json({message: 'Book not found'})
    }
    res.status(200).json({message: 'Book deleted successfully'})
  } catch (error) {
    res.status(400).json({message: error.message})
  }
}

module.exports = {
  createNewBook,
  getAllTheBooks,
  getbybookId,
  updatetheBook,
  deleteBook,
}
