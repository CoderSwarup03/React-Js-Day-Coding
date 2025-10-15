import React from 'react'
import { userCart } from '../context/CartProvider'
const ProductItem = ({ item }) => {
    const { addToCart } = userCart();
    return (
        <div className='flex flex-col gap-2 bg-white rounded-md border-2 border-green-400 p-5'>
            <h2 className='text-2xl font-bold '>{item.name}</h2>
            <span className='text-xl font-semibold'>{item.price}</span>
            <button
                onClick={() => addToCart(item)}
                className='text-xl font-semibold bg-green-500 text-white p-2 rounded-md cursor-pointer'>Add to Cart</button>
        </div>
    )
}

export default ProductItem