import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import CartItem from './CartItem';
import { useProduct } from '../context/ProductProvider';
import { IoMdCart } from "react-icons/io";

const CartList = () => {
    const [toggleCart, setToggleCart] = useState(false);
    const { cart } = useProduct();

    const totalItem = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = Math.round(cart.reduce((acc, item) => acc + item.price * item.quantity, 0))
    return (
        <>
            <div className={`right-3 top-[10vh] border-2 border-green-500 w-[400px] h-[90vh] bg-gray-50 fixed z-50 ${toggleCart ? 'block' : 'hidden'}`}>
                <div className='flex justify-between mx-3 border-b-2 border-green-500 p-3'>
                    <h1 className='text-2xl font-bold text-green-500'>MyCart</h1>
                    <button>
                        <RxCross2
                            onClick={() => setToggleCart(!toggleCart)}
                            className='text-2xl font-bold cursor-pointer' />
                    </button>
                </div>

                {/* cart list added here */}
                <div className='h-[65vh] overflow-y-scroll'>
                    {cart.length === 0 ? (
                        <h1 className='text-xl font-bold text-center'>Cart is empty</h1>
                    ) : (
                        cart.map((item) => {
                            return (
                                <CartItem key={item.id} item={item} />
                            )
                        })
                    )}
                </div>

                <div className='absolute w-full bottom-3 border-2 border-green-500 bg-gray-50'>
                    <div className='flex justify-between gap-3 mx-3'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-xl font-bold text-green-500'>Total Items</span>
                            <span className='text-xl font-bold text-green-500'>Price</span>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                            <span className='text-xl font-bold text-green-500'>{totalItem}</span>
                            <span className='text-xl font-bold text-green-500'>₹{totalPrice}</span>
                        </div>
                    </div>
                    <button className='w-full bg-green-500 hover:bg-green-600 text-white font-bold text-xl cursor-pointer'>Place Order</button>
                </div>
            </div>
            <div className='right-4 bottom-4 fixed'>
                <IoMdCart
                    onClick={() => setToggleCart(!toggleCart)}
                    className={`text-4xl font-bold text-green-500 ${totalItem > 0 ? 'animate-bounce' : ''}`} />
            </div>
        </>
    )
}

export default CartList