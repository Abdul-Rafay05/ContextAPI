import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function profile() {
    const { user } = useContext(UserContext)
    if (!user) return <div> Please Login</div>
    return <div>Welcome: {user.userName} <br /> Your Password: {user.Password} </div>
}

export default profile