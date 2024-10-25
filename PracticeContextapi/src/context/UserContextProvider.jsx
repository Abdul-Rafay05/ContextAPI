import React, { useState } from 'react'
import UserContext from './Context'
function UserContextProvider({ children }) {
    const [User, setUser] = useState(null)
    return (
        <UserContext.Provider value={{ User, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider