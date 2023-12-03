import {useState} from 'react'

import Heading from "./components/Heading"
import RegistrationForm from './components/RegistrationForm'

const App = () => {
  const addNote = ({name, dob}) => {
    // Handle frontend backend connection
    console.log(name, dob)
  }

  return (
    <div>
      <Heading heading="Registration Page" />
      <RegistrationForm onFormSubmit={addNote} />
    </div>
  )
}

export default App
