import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import RecipeProvider from '../context/RecipeProvider'

const Navbar = () => {
    const [inputSearch, setInputSearch] = useState('')

    const { setProducts,cart } = useContext(RecipeProvider);

    const handleSearch = async () => {
        const response = await fetch(`https://dummyjson.com/products/search?q=${inputSearch}`);
        const data = await response.json();
        console.log(data);
        setProducts(data.products)
    }

    return (
        <>
            <div className='bg-gray-100 p-4'>
                <div className='max-w-[85%] mx-auto flex justify-between items-center'>
                    <h1 className='text-2xl font-bold shadow-md'>RecipeApp</h1>
                    <div className='flex gap-2'>
                        <input
                            value={inputSearch}
                            onChange={(e) => setInputSearch(e.target.value)}
                            placeholder='search your product'
                            className='w-[300px] p-3 border-2 border-green-500 rounded-md outline-none'
                            type="search" name="" id="" />
                        <button 
                        onClick={handleSearch}
                        className='bg-green-500 px-3 py-3 rounded-md cursor-pointer font-bold'>Search</button>
                    </div>
                    <div className='flex gap-2'>
                        <Link to={'/'} className='border-2 border-green-500 px-3 py-3 rounded-md cursor-pointer text-xl font-semibold'>Home</Link>
                        <Link to={'/cart'} className='border-2 border-green-500 px-3 py-3 rounded-md cursor-pointer text-xl font-semibold'>{`Cart ${cart.length}`}</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar