import React from 'react'

const ProductItem = ({item}) => {
    return (
        <>
            <div className='flex flex-col gap-2 items-center p-3 border border-green-500 w-[350px]'>
                <img src={item.thumbnail} alt="" />
                <h1 className='text-lg font-semibold '>{item.title}</h1>
                <div className='bg-gray-100 flex justify-between w-full rounded-md px-3 py-1'>
                    <span className='text-lg font-semibold'>Price: ${item.price}</span>
                    <span className='text-lg font-semibold'>Category: {item.category}</span>
                </div>
                <button 
                className='text-white font-semibold bg-blue-500 hover:bg-blue-600 cursor-pointer w-full px-3 py-1 rounded-md'>Buy</button>
            </div>
        </>
    )
}

export default ProductItem