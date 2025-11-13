import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = ({ setProduct }) => {
    const [input, setInput] = useState('');
    const searchItem = async () => {
        const response = await fetch(`https://dummyjson.com/products/search?q=${input}`);
        const data = await response.json();
        console.log(data)
        setProduct(data.products)
    }

    return (
        <>
            <div className='bg-gray-50 p-4 border-b border-green-500 sticky top-0 w-full' >
                <div className='max-w-6xl mx-auto flex justify-between'>
                    <h1 className='text-lg font-bold text-green-500 cursor-pointer'>FlexFit</h1>
                    <div className='flex items-center gap-2'>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='Search Product...'
                            className='outline-none text-md border border-green-500 rounded-md px-3 py-1'
                            type="search" />
                        <button
                            onClick={() => searchItem()}
                            className='text-md font-bold bg-blue-500 hover:bg-blue-600 cursor-pointer text-white rounded-md px-3 py-1'>Search</button>
                    </div>
                    <div>
                        <Link to='/login'
                            className='text-xl font-semibold text-green-500'>Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar