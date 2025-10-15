import React, { useState } from 'react'
import { useAuth } from '../context/AuthProvider'

const LoginForm = () => {
    const [form, setForm] = useState({ username: '', password: '' })

    const { login } = useAuth()

    const handleSubmit = () => {
        login(form.username, form.password)
    }

    return (
        <>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
                <div className='flex flex-col gap-3 justify-center items-center border-2 p-5 border-green-500 w-[400px] rounded-md'>
                    <h1 className='text-2xl font-semibold'>Login Form</h1>
                    <input
                        value={form.username}
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                        placeholder='admin'
                        className='outline-none p-3 border-2 border-green-500 rounded-md w-full'
                        type="text" />
                    <input
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        placeholder='12345'
                        className='outline-none p-3 border-2 border-green-500 rounded-md w-full'
                        type="password" name="" id="" />
                    <button
                        onClick={handleSubmit}
                        className='text-2xl font-bold bg-green-500 hover:bg-green-600 cursor-pointer rounded-md w-full py-2'>Login</button>
                </div>
            </div>
        </>
    )
}

export default LoginForm