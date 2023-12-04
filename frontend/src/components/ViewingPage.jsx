import {useState, useEffect} from 'react'

import Heading from "./Heading"

const ViewingPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userData = async () => {
      const response = await fetch('https://localhost:3001/api/users')
      const data = await response.json()
      setUsers(data)
    }

    userData().catch(console.error)
  }, [])

  return (
    <div>
      <Heading heading="Viewing Page" />
      <ul>
        {users.map((user) => {
          <li key={user.id}>
            Name: {user.name}, DOB: {new Date(user.dob).toLocaleDateString()}
          </li>
        })}
      </ul>
    </div>
  )
}

export default ViewingPage
