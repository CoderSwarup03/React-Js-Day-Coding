import React from 'react'
import { userAuth } from '../context/AuthContext'
const Navbar = () => {
    const { user } = userAuth();
    return (
        <>
            <div className='bg-green-500'>
                <div className='max-w-[85%] mx-auto flex justify-between p-5'>
                    <h1 className='text-lg md:text-2xl font-bold'>AuthApp</h1>
                    <div>
                        {
                            user ? (
                                <span className='text-md lg:text-xl font-bold'>Hello' {user.username}</span>
                            ) : (
                                <span className='text-md lg:text-xl font-bold'>Login</span>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar