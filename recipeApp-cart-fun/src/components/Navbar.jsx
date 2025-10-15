import React, { useContext, useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductContext from '../context/ProductContext'

const Navbar = () => {
    const inputRef = useRef()
    const [input, setInput] = useState('')
    const { setProducts, cart } = useContext(ProductContext);

    useEffect(() => {
        inputRef.current.focus();
    },[])

    const seactProduct = async () => {
        const response = await fetch(`https://dummyjson.com/products/search?q=${input}`)
        const data = await response.json()
        setProducts(data.products)
    }
    return (
        <>
            <div className='flex justify-evenly items-center py-3 shadow-md'>
                <h1 className='text-2xl font-bold text-green-500'>All in One</h1>
                <div className='flex gap-2'>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        ref={inputRef}
                        placeholder='Search your product...'
                        className='outline-none border-2 border-green-500 p-2 rounded-md w-[280px]'
                        type="search" name="" id="" />
                    <button
                        onClick={seactProduct}
                        className='text-xl font-bold rounded-md bg-green-500 text-white p-2 cursor-pointer'>Search</button>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <Link
                        to={'/'}
                        className='text-2xl font-semibold px-3 py-1 border-2 border-green-600 rounded-md'>Home</Link>
                    <Link
                        to={'/cart'}
                        className='text-2xl font-semibold px-3 py-1 border-2 border-green-600 rounded-md' >Cart {cart.length === 0 ? 0 : cart.length}</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar