const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

const booksRouter = require('./routes/books')

const app = express()
const port = process.env.PORT || 3001

require('dotenv').config()
require('./config/database')

app.use(logger('dev'))
app.use(express.json())
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

// API routers
app.use('/api/books', booksRouter)

// 'catch all' route. sends build index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server connected, listening on port ${port}...`)
})