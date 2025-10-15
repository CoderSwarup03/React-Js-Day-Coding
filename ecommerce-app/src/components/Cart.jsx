import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from './CartItem';
const Cart = () => {
  const { cart, totalPrice, clearCart } = useCart();
  return (
    <>
      <div className='bg-white shadow p-4 rounded-md border-2 border-green-500'>
        <h2 className='text-xl font-semibold text-green-500 text-center'>My Cart</h2>
        {cart.length === 0 ? (
          <h3 className='text-xl font-semibold text-green-500 text-center'>Your cart is empty</h3>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className='flex flex-col gap-2 mt-4'>
              <h2 className='text-2xl font-semibold'>Total:₹{totalPrice}</h2>
              <button 
              onClick={() => clearCart()}
              className='text-xl font-semibold px-3 py-1 rounded-md bg-green-500 hover:bg-green-600'>Clear Cart</button>
            </div>
          </>
        )}

      </div>
    </>
  )
}

export default Cart