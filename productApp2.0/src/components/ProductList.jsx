import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ product }) => {
    return (
        <>
            <div className='flex flex-col md:flex-row items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 my-3 gap-4'>
                    {product.length === 0 ? (
                        <h1>Product is empty</h1>
                    ) : (
                        product.map((item, index) => {
                            return (
                                <ProductItem key={index} item={item} />
                            )
                        })
                    )}
                </div>
            </div>

        </>
    )
}

export default ProductList