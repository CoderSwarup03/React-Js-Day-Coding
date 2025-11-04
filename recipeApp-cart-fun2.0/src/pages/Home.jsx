import React, { useContext } from 'react'
import RecipeProvider from '../context/RecipeProvider'
import Navbar from '../components/Navbar'
const Home = () => {
  const { products, addToCart } = useContext(RecipeProvider)

  return (
    <>
      <div className='max-w-[85%] mx-auto p-4 flex flex-col justify-center items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
          {/* single product */}
          {
            products.map((item) => {
              return (
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
                        onClick={() => addToCart(item)}
                        className='text-lg font-bold px-3 py-2 rounded-md bg-green-500 hover:bg-green-600 cursor-pointer'>Add To Cart</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home