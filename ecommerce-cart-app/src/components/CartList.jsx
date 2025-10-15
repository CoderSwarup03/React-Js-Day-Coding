import React from 'react'
import { userCart } from '../context/ContextProvider'
import CartItem from './CartItem';
const CartList = () => {
    const { cart, totalPrice, clearCart } = userCart();
    return (
        <>
            <div className='bg-white rounded-md p-4 flex flex-col gap-4 justify-center border-2 border-green-500'>
                <h1 className='text-xl font-semibold text-green-500 text-center '>CartList</h1>
                {
                    cart.length === 0 ? (
                        <h2 className='text-xl font-semibold text-green-500 text-center '>Cart is Empty.add one or more products</h2>
                    ) : (
                        <>
                            <div className='flex flex-col gap-2'>
                                {cart.map((item) => (
                                    <CartItem key={item.id} item={item} />
                                ))}
                                <div className='flex justify-between p-2'>
                                    <h2>Total Price: {totalPrice}</h2>
                                    <button onClick={clearCart}>Clear Cart</button>
                                </div>
                            </div>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default CartList