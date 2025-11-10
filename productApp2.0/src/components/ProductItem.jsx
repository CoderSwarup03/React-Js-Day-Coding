import React from 'react'
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { useProduct } from '../context/ProductProvider';
const ProductItem = ({ item }) => {
    const { addToCart } = useProduct()
    return (
        <>
            <div className='flex flex-col gap-2 items-center p-3 border border-green-500 w-[350px]'>
                <img src={item.thumbnail} alt="" />
                <h1 className='text-lg font-semibold '>{item.title}</h1>
                <div className='bg-gray-100 flex justify-between w-full rounded-md px-3 py-1'>
                    <span className='text-lg font-semibold'>Price: ${item.price}</span>
                    <span className='text-lg font-semibold'>Category: {item.category}</span>
                </div>
                <div className='flex justify-between w-full gap-2'>
                    <button
                        className='text-white font-semibold bg-blue-500 hover:bg-blue-600 cursor-pointer w-[90%] px-3 py-1 rounded-md'>Buy</button>
                    <button className='rounded-md border-2 border-yellow-500 cursor-pointer'>
                        <MdOutlineBookmarkAdd
                            onClick={() => addToCart({
                                id: item.id,
                                title: item.title,
                                price: item.price,
                                thumbnail: item.thumbnail,
                                quantity: item.quantity
                            })}
                            className='text-2xl text-yellow-500' />
                    </button>
                </div>

            </div>
        </>
    )
}

export default ProductItem