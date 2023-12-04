// Dotenv configuration
require('dotenv').config()

// Import server components
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const Registration = require('./models/registration')

// Server setup
const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())

// Application error handler
const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'ValidationError') {
    return response.status(400).json({error: error.message})
  }

  return response.status(500).json({error: 'Internal Server Error'})
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({error: 'Unknown Endpoint Error'})
}

// Application requests (search query code not done by me)
app.get('/api/users', async (request, response, next) => {
  const queryName = request.query.name

  try {
    let query = {}

    if (queryName) {
      query.name = {$regex: new RegExp(queryName, 'i')}
    }
    const users = await Registration.find(query)
    response.json(users)
  } catch (error) {
    next(error)
  }
})

app.post('/api/registration', async (request, response, next) => {
  try {
    const body = request.body

    const registration = new Registration({
      name: body.name,
      dob: body.dob
    })

    const savedRegistration = await registration.save()
    response.json(savedRegistration)
  } catch (error) {
    next(error)
  }
})

// Application event listener
app.use(unknownEndpoint)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



