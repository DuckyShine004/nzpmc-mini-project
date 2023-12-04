import {useState, useEffect} from 'react'

import axios from 'axios'

import Heading from "./Heading"

const baseURL = '/api/users'

const ViewingPage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const userData = async () => {
      try {
        const response = await axios.get(baseURL)
        setUsers(response.data)
      } catch (error) {
        console.error('Error fetching users:', error.message)
      }
    }

    userData()
  }, [])

  return (
    <div>
      <Heading heading="Viewing Page" />
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            Name: {user.name}, DOB: {user.dob ? new Date(user.dob).toLocaleDateString() : 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ViewingPage

