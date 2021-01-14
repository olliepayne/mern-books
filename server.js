const express = require('express')

const app = express()
const port = process.env.PORT || 3001

require('dotenv').config()
require('./config/database')

app.listen(port, () => {
  console.log(`Server connected, listening on port ${port}...`)
})