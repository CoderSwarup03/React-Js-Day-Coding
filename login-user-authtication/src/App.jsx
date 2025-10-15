import React from 'react'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import Profile from './components/Profile'
import { userAuth } from './context/AuthContext'
const App = () => {
  const { user } = userAuth()
  return (
    <>
      <Navbar />
      {user ? <Profile /> : <LoginForm />}
    </>
  )
}

export default App