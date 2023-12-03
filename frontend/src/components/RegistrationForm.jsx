import {useState} from 'react'

import FormInput from './FormInput'

const RegistrationForm = ({onFormSubmit}) => {
  const [name, setName] = useState('')
  const [dob, setDob] = useState('')

  const handleNameChange = (event) => setName(event.target.value)
  const handleDobChange = (event) => setDob(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    onFormSubmit({name, dob})
  }

  return (
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
  )
}

export default RegistrationForm
