import React from 'react'
import { useAuth } from '../context/AuthProvider'
const Navbar = () => {
    const {user} = useAuth();
    
    return (
        <>
            <div className='bg-blue-600 p-2'>
                <div className='max-w-[85%] mx-auto flex justify-between'>
                    <h1 className='text-3xl font-bold text-white'>AuthApp</h1>
                    <div>
                        {user ? (
                            <p className='text-xl font-semibold text-white'>Hellow {user.username}</p>
                        ) : (
                            <p className='text-xl font-bold text-white'>Yet Loggin</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar