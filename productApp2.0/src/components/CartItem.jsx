import React from 'react'
import { MdDelete } from "react-icons/md";
import { useProduct } from '../context/ProductProvider';
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
const CartItem = ({ item }) => {
    const { deleteItem, Increment, Decrement } = useProduct()
    return (
        <>
            <div className='border-2 border-green-500 rounded-md m-4'>
                <div className='flex justify-between items-center gap-3 px-3'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-xl font-bold'>{item.title.slice(0, 10)}</h1>
                        <span className='text-lg font-semibold'>₹{Math.round(item.price)}</span>
                    </div>
                    <img src={item.thumbnail} className='h-20 w-20' alt="" />
                    <div className='flex flex-col items-center'>
                        <MdDelete
                            onClick={() => deleteItem(item.id)}
                            className='text-xl font-bold text-red-500 hover:text-red-600 cursor-pointer' />
                        <div className='flex gap-3 items-center px-3 py-1 border border-green-500 rounded-md'>
                            <button>
                                <CiSquareMinus

                                    onClick={() => { item.quantity > 1 && Decrement(item.id) }}
                                />
                            </button>
                            <span>
                                {item.quantity}
                            </span>
                            <button>
                                <CiSquarePlus
                                    onClick={() => Increment(item.id)}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem