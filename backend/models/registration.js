const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const mongoURI = process.env.MONGODB_URI

mongoose.connect(mongoURI)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to mongoDB:', error.message)
  })

const registrationSchema = new mongoose.Schema({
  name: String,
  dob: Date,
})

module.exports = mongoose.model('Registration', registrationSchema)

