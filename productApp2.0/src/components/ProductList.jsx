import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ product }) => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-4 my-3'>
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
        </>
    )
}

export default ProductList