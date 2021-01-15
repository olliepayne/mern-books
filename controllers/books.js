const Book = require('../models/Book')

module.exports = {
  create,
  index,
  update,
  delete: deleteOne
}

function create(req, res) {
  Book.create(req.body)
  .then(book => res.json(book))
}

function index(req, res) {
  Book.find({})
  .then(books => res.json(books))
}

function update(req, res) {
  Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(book => res.json(book))
}

function deleteOne(req, res) {
  Book.findByIdAndDelete(req.params.id)
  .then(book => res.json(book))
}