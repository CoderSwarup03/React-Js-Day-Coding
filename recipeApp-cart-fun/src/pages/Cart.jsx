import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
const Cart = () => {
  const { cart, deletFromCart } = useContext(ProductContext);

  return (
    <>
      {cart.length === 0 ? (
        <h2>Cart is empty</h2>
      ) : (
        cart.map((item) => {
          return (
            <div key={item.id} className='flex flex-col p-3 w-[350px] border-2 border-green-500 rounded-md mt-5'>
              <img src={item.thumbnail} alt="" />
              <div className='bg-gray-200 p-3 rounded-md'>
                <div className='flex justify-center items-center'>
                  <h1 className='text-xl font-bold'>{item.title}</h1>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-xl font-semibold'>Category</span>
                  <span className='text-xl font-semibold'>Price</span>
                </div>
              </div>
              <button 
                onClick={() => deletFromCart(item.id)}
                className='w-full py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white text-bold mt-3'>Remove from cart</button>
            </div>
          )
        })
      )}
    </>
  )
}

export default Cart