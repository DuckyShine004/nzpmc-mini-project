import {useState, useEffect} from 'react'

import registrationService from '../services/registration'

import Heading from "./Heading"
import UserList from './UserList'

const baseURL = '/api/users'

const ViewingPage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await registrationService.getAllUser(baseURL)
        setUsers(userData)
      } catch (error) {
        console.error('Error fetching users:', error.message)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <Heading heading="Viewing Page" />
      <UserList users={users} />
    </div>
  )
}

export default ViewingPage

