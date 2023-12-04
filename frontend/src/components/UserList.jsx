const UserList = ({users}) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          Name: {user.name},
          DOB: {user.dob ? new Date(user.dob).toLocaleDateString() : 'N/A'}
        </li>
      ))}
    </ul>
  )
}

export default UserList
