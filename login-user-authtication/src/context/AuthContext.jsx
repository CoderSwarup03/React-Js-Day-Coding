import React from 'react'
import { createContext, useContext, useState } from 'react'

const AuthProvider = createContext();
export const userAuth = () => useContext(AuthProvider);

const AuthContext = ({children}) => {

    const [user, setUser] = useState(null);

    const login = (username, password) => {
        // example credintials
        if (username === 'admin' && password === '123456') {
            setUser({ username });
            return;
        } else {
            alert('Invalid username or password');
            return;
        }
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <AuthProvider.Provider value={{user, login, logout}}>
            {children}
        </AuthProvider.Provider>
    )
}

export default AuthContext