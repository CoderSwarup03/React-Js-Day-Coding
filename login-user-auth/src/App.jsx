import React from 'react'
import Navbar from './components/Navbar'
import LoginForm from './components/LoginForm'
import Profile from './components/Profile'
import { useAuth } from './context/AuthProvider'
const App = () => {
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      {user ? <Profile /> : <LoginForm />}
    </>
  )
}

export default App