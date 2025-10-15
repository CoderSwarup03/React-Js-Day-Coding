import React from 'react'
import { userAuth } from '../context/AuthContext'
const Profile = () => {
  const { user, logout } = userAuth();
  return (
    <>
      <div className='flex flex-col gap-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-green-500 rounded-md p-5 w-[300px]'>
        <h1 className='text-2xl font-bold text-green-600 text-center'>Welcome to {user.username}</h1>
        <span className='text-center font-semibold'>You Sucessfully Logged In</span>
        <button
          onClick={logout}
          className='text-xl font-bold text-white bg-red-500 hover:bg-red-600 p-3 rounded-md cursor-pointer'>Logout</button>
      </div>
    </>
  )
}

export default Profile