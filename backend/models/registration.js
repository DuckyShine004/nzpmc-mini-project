const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const mongoURI = process.env.MONGODB_URI

mongoose.connect(mongoURI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to mongoDB:', error.message)
  })

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 5
  },
  dob: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('Registration', registrationSchema)

