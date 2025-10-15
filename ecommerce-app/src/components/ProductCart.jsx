import React from 'react'
import { useCart } from '../context/CartContext'
const ProductCart = ({ item }) => {
    const { addToCart } = useCart()
    return (
        <>
            <div className='flex flex-col justify-center bg-white p-4 rounded-md border-2 border-green-500'>
                <h2 className='text-lg font-semibold'>{item.name}</h2>
                <span>${item.price}</span>
                <button 
                onClick={()=> addToCart(item)}
                className='text-xl font-semibold px-3 py-2 rounded-md bg-green-500 hover:bg-green-600'>Add Item</button>
            </div>
        </>
    )
}

export default ProductCart