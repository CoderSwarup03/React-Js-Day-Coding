import React from 'react'
import { useEffect } from 'react'

const Home = ({ products, setProducts }) => {
    // api call

    const getProduct = async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <>
            <div className='max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    products.map((item) => {
                        return (
                            <div key={item.id} className='flex justify-center'>
                                <div className='w-[95%] h-[50vh] md:w-[25vw] md:h-[48vh] border-2 border-green-500 rounded-md'>
                                    <div>
                                        <img
                                            className='w-[25vw] h-[30vh] py-3 object-cover'
                                            src={item.thumbnail} alt="" />
                                    </div>
                                    <div className='flex flex-col py-2'>
                                        <h2 className='text-2xl font-semibold text-center'>{item.title}</h2>
                                    </div>
                                    <div className='flex justify-between px-2 py-2'>
                                        <span className='text-xl font-semibold'>${item.price}</span>
                                        <span className='text-xl font-semibold'>Rating xyz</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home