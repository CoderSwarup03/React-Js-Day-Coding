import React from 'react'
import { userCart } from '../context/CartProvider'
const CartItem = ({ item }) => {
    const {deleteCart} = userCart();
    return (
        <>
            <div className='flex justify-between p-4 border-b border-green-400'>
                <div>
                    <h2 className='text-2xl font-semibold '>{item.name}</h2>
                    <span className='text-xl text-gray-500'>{item.price} x {item.qty}</span>
                </div>
                <div>
                    <button 
                    onClick={()=> deleteCart(item.id)}
                    className='text-xl font-semibold bg-red-500 text-white p-2 rounded-md cursor-pointer'>Remove</button>
                </div>
            </div>
        </>
    )
}

export default CartItem