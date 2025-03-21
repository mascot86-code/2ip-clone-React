import { useContext } from "react"
import AppContext from "../../context/app-context"

function UserProfiler() {

  const {user, changeUser} = useContext(AppContext)

  return (
    <>
      <h2>UserProfiler</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.job}</p>

      <button onClick = {() => {
        changeUser({name: 'Bob', email: 'bob@gmail.com', job: 'Backend Developer'})
      }}>Change user</button>
    </>

  )
}

export default UserProfiler