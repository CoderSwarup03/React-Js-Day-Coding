import React, { useContext } from 'react'
import RecipeProvider from '../context/RecipeProvider'

const Cart = () => {
  const { cart, deleteFromCart } = useContext(RecipeProvider);

  return (
    <>
      <div className='max-w-[85%] mx-auto p-4 flex flex-col justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {cart.length === 0 ? (
            <h1 className='text-center text-xl font-semibold text-red-500'>Cart is empty</h1>
          ) : (
            cart.map((item) => (
              <div key={item.id} className='flex flex-col justify-center items-center p-4 border-2 border-green-500 rounded-md w-[300px]'>
                <img src={item.thumbnail} alt="title" />
                <h1 className='text-xl font-bold'>{item.title}</h1>
                <div className='flex justify-between items-center w-full bg-gray-200 p-2 rounded-md'>
                  <div className='flex flex-col gap-2'>
                    <span className='text-md font-semibold'>₹{item.price}</span>
                    <span className='text-md font-semibold'>{item.brand}</span>
                  </div>
                  <div>
                    <button
                      onClick={() => deleteFromCart(item.id)}
                      className='text-lg font-bold px-3 py-2 rounded-md bg-green-500 hover:bg-green-600 cursor-pointer'>Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default Cart