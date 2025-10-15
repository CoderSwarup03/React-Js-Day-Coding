import React from 'react'
import ProductCart from './ProductCart'

const ProductList = () => {
    const products = [
        { id: 1, name: "Laptop", price: 50000 },
        { id: 2, name: "Mobile", price: 10000 },
        { id: 3, name: "Tablet", price: 5000 },
        { id: 4, name: "Headphone", price: 500 },
    ]

    return (
        <>
            <div className='grid sm: grid-cols-2 gap-4'>
                {products.map((item) => (
                    <ProductCart key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}

export default ProductList