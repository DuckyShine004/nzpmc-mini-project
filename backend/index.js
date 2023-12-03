// Dotenv configuration
require('dotenv').config()

// Import server components
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const registration = require('./models/registration')

// Server setup
const app = express()
const PORT = process.env.PORT


app.use(cors())
app.use(express.json())

// Application requests
app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

// Application event listener
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



