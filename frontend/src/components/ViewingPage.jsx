import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import registrationService from '../services/registration'

import Heading from "./Heading"
import UserList from './UserList'
import Button from './Button'

const baseURL = '/api/users'

const ViewingPage = () => {
  const [users, setUsers] = useState([])

  const navigate = useNavigate()

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
      <Button onClick={() => navigate('/')} text="Go To Registration Page" />
    </div>
  )
}

export default ViewingPage

