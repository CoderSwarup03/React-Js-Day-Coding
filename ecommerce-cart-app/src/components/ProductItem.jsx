import React, { use } from 'react'
import { userCart } from '../context/ContextProvider'
const ProductItem = ({ item }) => {
  const { addToCart } = userCart();
  return (
    <>
      <div className='bg-white rounded-md p-4 flex flex-col gap-4 justify-center'>
        <h1 className='text-xl font-bold'>{item.name}</h1>
        <p className='text-sm text-gray-500'>Price: {item.price}</p>
        <button
          onClick={() => addToCart(item)}
          className='bg-green-500 text-white p-2 rounded-md'>Add to Cart</button>
      </div>
    </>
  )
}

export default ProductItem