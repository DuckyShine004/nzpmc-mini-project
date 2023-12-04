import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

import registrationService from '../../services/registration'

import Heading from '../utilities/Heading'
import UserList from '../utilities/UserList'
import Button from '../utilities/Button'
import FormInput from '../utilities/FormInput'

const baseURL = '/api/users'

const ViewingPage = () => {
  const [users, setUsers] = useState([])
  const [searchUser, setSearchUser] = useState('')

  const navigate = useNavigate()

  const fetchUsers = async () => {
    try {
      const url = searchUser ? `${baseURL}?name=${searchUser}` : baseURL
      const userData = await registrationService.getAllUser(url)
      setUsers(userData)
    } catch (error) {
      console.error('Error fetching users:', error.message)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const handleSearch = (event) => {
    setSearchUser(event.target.value)
  }

  const handleSubmitSearch = (event) => {
    event.preventDefault()
    fetchUsers()
  }

  return (
    <div>
      <Heading heading="Viewing Page" />
      <form onSubmit={handleSubmitSearch}>
        <FormInput
          label="Search for user"
          type="text"
          value={searchUser}
          onChange={handleSearch}
          placeHolder="Search by name"
        />
        <button type="submit">Search</button>
      </form>
      <UserList users={users} />
      <Button onClick={() => navigate('/')} text="Go To Registration Page" />
    </div>
  )
}

export default ViewingPage

