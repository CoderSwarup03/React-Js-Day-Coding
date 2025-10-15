import React, { createContext, useContext, useState } from 'react'
const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        if (username === 'admin' && password === '12345') {
            setUser({ username })
        }else {
            alert('Invalid username or password')
            return;
        }
    }
    const logout = () => {
        setUser(null)
    }
    return (
        <>
            <AuthContext.Provider value={{ login, logout,user,setUser }}>
                    {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthProvider