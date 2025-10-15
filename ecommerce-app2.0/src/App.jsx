import React from 'react'
import CartProvider from './context/CartProvider'
import ProductList from './components/ProductList'
import CartList from './components/CartList'

const App = () => {
  return (
    <CartProvider>
      <div className='min-h-screen bg-gray-100 p-4'>
        <h1 className='text-2xl font-bold text-center text-blue-500'>Ecommerce Cart App</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
          <div className='md:col-span-2'>
            <ProductList />
          </div>
          <div>
            <CartList />
          </div>
        </div>
      </div>
    </CartProvider>
  )
}

export default App