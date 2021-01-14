const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')

const app = express()
const port = process.env.PORT || 3001

require('dotenv').config()
require('./config/database')

app.use(logger('dev'))
app.use(express.json())
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.listen(port, () => {
  console.log(`Server connected, listening on port ${port}...`)
})