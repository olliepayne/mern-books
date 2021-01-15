const express = require('express')
const router = express.Router()

const booksCtrl = require('../controllers/books')

router.post('/', booksCtrl.create)
router.get('/', booksCtrl.index)
router.put('/:id', booksCtrl.update)

module.exports = router