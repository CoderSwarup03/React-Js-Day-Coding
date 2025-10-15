import React from 'react'
import { useCart } from '../context/CartContext'

const CartItem = ({ item }) => {
  const { deleteProduct } = useCart();
  return (
    <>
      <div className='flex justify-between outline-none border-b p-3'>
        <div>
          <h2 className='text-xl font-semibold'>{item.name}</h2>
          <p className='text-xl text-gray-500'>{item.price} x {item.qty}</p>
        </div>
        <div>
          <button 
          onClick={() => deleteProduct(item.id)}
          className='text-xl px-3 py-1 rounded-md bg-red-500 hover:bg-red-600'>Remove</button>
        </div>
      </div>
    </>
  )
}

export default CartItem