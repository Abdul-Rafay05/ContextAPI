import React, { useContext } from 'react'
import UserContext from '../context/Context'

function Profile() {
    const { User } = useContext(UserContext)
    if (!User) return <div>Please Login</div>
    return <div>Welcome: {User.UserName} <br /> Your Password: {User.Password} </div>
}

export default Profile