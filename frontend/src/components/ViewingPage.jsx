import {useState, useEffect} from 'react'

import axios from 'axios'

import Heading from "./Heading"
import UserList from './UserList'

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
      <UserList users={users} />
    </div>
  )
}

export default ViewingPage

