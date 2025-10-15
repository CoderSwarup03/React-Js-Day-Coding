import React from 'react'
import ProductItem from './ProductItem'

const ProductList = () => {
    const products = [
        { id: 1, name: 'Laptop', price: 50000 },
        { id: 2, name: 'Monitor', price: 12000 },
        { id: 3, name: 'Mouse', price: 2000 },
        { id: 4, name: 'Keyboard', price: 8500 }
    ]
    
    return (
        <>
            <div className='grid sm:grid-cols-2 gap-4'>
                {
                    products.map((item) => {
                        return (
                            <ProductItem key={item.id} item={item}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProductList