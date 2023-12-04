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

// Application requests
app.get('/api/users', async (request, response) => {
  try {
    const users = await Registration.find()
    response.json(users)
  } catch (error) {
    console.log('get request error: ', error.message)
  }
})

app.post('/api/registration', async (request, response) => {
  try {
    const body = request.body

    const registration = new Registration({
      name: body.name,
      dob: body.dob
    })

    const savedRegistration = await registration.save()
    response.json(savedRegistration)
  } catch (error) {
    console.log('post request error: ', error.message)
  }
})

// Application event listener
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



