import React, { useState } from 'react'
import { userAuth } from '../context/AuthContext'
const LoginForm = () => {
    const [form, setForm] = useState({ username: '', password: '' });
    const { login } = userAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(form.username, form.password)
    }

    return (
        <>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-bold text-green-600'>Login Form</h1>
                <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-4 p-5 border-2 border-green-500 mt-5 rounded-md w-[300px] mx-5'>
                    <input
                        value={form.username}
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                        placeholder='username'
                        className='p-3 outline-none w-full border-2 border-blue-500 rounded-md'
                        type="text" />
                    <input
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                        placeholder='password'
                        className='p-3 outline-none w-full border-2 border-blue-500 rounded-md'
                        type="password" />
                    <button
                        type='submit'
                        className='p-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-md cursor-pointer'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default LoginForm