import React from 'react'
import ProductItem from './ProductItem';

const ProductList = () => {
    const products = [
        { id: 1, name: 'Laptop', price: 50000 },
        { id: 2, name: 'KeyBoard', price: 9000 },
        { id: 3, name: 'Mouse', price: 4000 },
        { id: 4, name: 'Monitor', price: 14000 },
    ]
    return (
        <>
            <div className='grid sm:grid-col-2 gap-3'>
                <h1 className='flex justify-center text-xl font-bold text-green-500'>All Products</h1>
                {products.map((item)=> (
                    <ProductItem key={item.id} item={item}/>
                ))}
            </div>
        </>
    )
}

export default ProductList