const Book = require('../models/Book')

module.exports = {
  create,
  index
}

function create(req, res) {
  Book.create(req.body)
  .then(book => res.json(book))
}

function index(req, res) {
  Book.find({})
  .then(books => res.json(books))
}