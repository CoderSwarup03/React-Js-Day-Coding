import React from 'react'
import { userCart } from '../context/CartProvider'
import CartItem from './CartItem';
const CartList = () => {
    const { cart, totalPrice, clearCart } = userCart();

    return (
        <div className='bg-white rounded-md border-2 border-green-400'>
            {cart.length === 0 ?(
                <h2 className='text-2xl font-bold text-center text-red-400'>Cart is Empty.Add one</h2>
            ):(
            <>
                <h2 className='text-xl font-semibold text-center text-green-500'>Cart List</h2>
                {cart.map((item)=> (
                    <CartItem key={item.id} item={item}/>
                ))}
                <div className='flex flex-col gap-2 p-3'>
                    <h2 className='text-xl font-semibold'>Total Price: ₹{totalPrice}</h2>
                    <button
                    className='text-xl font-semibold px-3 py-1 rounded-md cursor-pointer bg-green-500' 
                    onClick={clearCart}>Clear Cart</button>
                </div>
            </>
            )}
        </div>
    )

}

export default CartList