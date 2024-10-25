import React, { useContext, useState } from 'react'
import UserContext from '../context/Context'

function login() {
    const [UserName, setUserName] = useState("")
    const [Password, setPassword] = useState("")
    const { setUser } = useContext(UserContext)

    const HandleSub = (e) => {
        e.preventDefault()
        setUser({ UserName, Password })
        setUserName("")
        setPassword("")
    }
    return (
        <>
            <input
                value={UserName}
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder='User Name' />
            <input value={Password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder='Password' />
            <button onClick={HandleSub}>Submit</button>
        </>
    )
}

export default login