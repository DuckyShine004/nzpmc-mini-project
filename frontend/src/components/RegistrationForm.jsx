import {useState} from 'react'

import FormInput from './FormInput'
import Heading from './Heading'

const RegistrationForm = () => {
  const [name, setName] = useState('')
  const [dob, setDob] = useState('')

  const handleNameChange = (event) => setName(event.target.value)
  const handleDobChange = (event) => setDob(event.target.value)

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await fetch('http://localhost:3001/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          dob
        }),
      })

      if (response.ok) {
        console.log('User registered')
      } else {
        console.log('Failed to register user')
      }
    } catch (error) {
      console.error('Error:', error)
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
