import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'


function login() {
    const [userName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const { setUser } = useContext(UserContext)
    const HandleSubmit = (e) => {
        e.preventDefault()
        setUser({ userName, Password })
    }

    return (
        <>
            <h2>Login</h2>
            <input type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='UserName' /> {" "}
            <input type="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' />
            <button onClick={HandleSubmit}>Submit</button>
        </>
    )
}

export default login