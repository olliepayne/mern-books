const Book = require('../models/Book')

module.exports = {
  create,
  index,
  update,
}

function create(req, res) {
  Book.create(req.body)
  .then(book => res.json(book))
}

function index(req, res) {
  Book.find({})
  .then(books => {res.json(books)})
  .catch(err => {res.json(err)})
}

function update(req, res) {
  Book.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(book => {res.json(book)})
  .catch(err => {res.json(err)})
}