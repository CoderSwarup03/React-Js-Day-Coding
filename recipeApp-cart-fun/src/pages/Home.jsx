import React, { useContext } from 'react'
import ProductContext from '../context/ProductContext'
const Home = () => {
    const { products, addToCart } = useContext(ProductContext)

    return (
        <>
            <div className='max-w-[90%] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        products.map((item) => {
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
                                        onClick={() => addToCart(item)}
                                        className='w-full py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white text-bold mt-3'>Add To Cart</button>
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