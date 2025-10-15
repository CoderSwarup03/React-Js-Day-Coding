import React from 'react'
import { useAuth } from '../context/AuthProvider'
const Profile = () => {
    const { user, logout } = useAuth();
    return (
        <>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div className='w-[350px] border-2 border-green-500 p-4 rounded-md flex flex-col gap-3 justify-center items-center'>
                    <h1 className='text-center font-bold text-2xl'>Profile</h1>
                    <span className='text-center font-semibold text-xl'>Welcome to your profile: {user.username}</span>
                    <p className='text-xl font-bold text-blue'>You successfully logged in</p>
                    <button
                        onClick={logout}
                        className='bg-red-500 hover:bg-red-600 py-2 rounded-md w-full text-white cursor-pointer'>Logout</button>
                </div>
            </div>
        </>
    )
}

export default Profile