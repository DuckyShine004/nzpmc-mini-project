import {useState} from 'react'

import registrationService from '../services/registration'

import FormInput from './FormInput'
import Heading from './Heading'

const baseURL = '/api/registration'

const RegistrationForm = () => {
  const [name, setName] = useState('')
  const [dob, setDob] = useState('')

  const handleNameChange = (event) => setName(event.target.value)
  const handleDobChange = (event) => setDob(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const newUser = {
        name,
        dob
      }
      const registeredUser = await registrationService.createNewUser(baseURL, newUser)
      console.log('User registered', registeredUser)
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error)
    }
  }

  return (
    <div>
      <Heading heading="Registration Page" />
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
        <FormInput
          label="DOB"
          type="date"
          value={dob}
          onChange={handleDobChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RegistrationForm
