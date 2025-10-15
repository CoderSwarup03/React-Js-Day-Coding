import React, { useState } from 'react'
const Navbar = ({ setProducts }) => {
    const [input, setInput] = useState('');



    const handleSearch = async () => {
        const response = await fetch(`https://dummyjson.com/products/search?q=${input}`);
        const data = await response.json();
        if(data.products.length === 0){
            return alert("Please Enter valid products");
        }
        setProducts(data.products);
    }

    return (
        <>
            <div className='flex justify-evenly py-3'>
                <h1 className='font-bold text-3xl text-blue-600'>Product App</h1>
                <div className='flex gap-5'>
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='Search...'
                        className='outline-none border-2 border-green-600 px-3 py-1 rounded-md w-[250px]'
                        type="search" name="" id="" />
                    <button
                        onClick={handleSearch}
                        className='px-3 py-1 rounded-md bg-green-600 font-semibold cursor-pointer'>Search</button>
                </div>
                <div className='flex gap-5'>
                    <span className='text-xl font-semibold px-3 py-1 border-2 border-green-600 rounded-md cursor-pointer' >Home</span>
                    <span className='text-xl font-semibold px-3 py-1 border-2 border-green-600 rounded-md cursor-pointer' >Login</span>
                </div>
            </div>
        </>
    )
}

export default Navbar