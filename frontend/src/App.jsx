import {useState} from 'react'

import Heading from "./components/Heading"

const App = () => {
  const addNote = (event) => {
    event.preventDefault()
    console.log(event.target)
  }

  const onNoteChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <div>
      <Heading heading={"Registration Page"} />
      <form onSubmit={addNote}>
        <input
          value={"lol"}
          onChange={onNoteChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default App
