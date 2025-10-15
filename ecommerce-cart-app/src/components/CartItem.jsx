import React from 'react'
import { userCart } from '../context/ContextProvider'
const CartItem = ({ item }) => {
    const {onDelete} = userCart();
    return (
        <>
            <div className='flex justify-between p-4 border-2 border-b border-green-500'>
                <div>
                    <h2>{item.name}</h2>
                    <h2>{item.price} x {item.qty}</h2>
                </div>
                <div>
                    <button 
                    onClick={() => onDelete(item.id)}
                    className='bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md'>Remove</button>
                </div>
            </div>
        </>
    )
}

export default CartItem