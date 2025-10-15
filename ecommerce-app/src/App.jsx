import React from 'react'
import CartProvider from './context/CartContext'
import ProductList from './components/ProductList'
import Cart from './components/Cart'

const App = () => {
  return (
    <CartProvider>
      <div className='min-h-screen bg-gray-100 p-4'>
        <h1 className='text-3xl font-bold mt-4 text-center text-blue-600'>Ecommerce Store</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
          <div className='md:col-span-2'>
            <ProductList />
          </div>
          <div>
            <Cart />
          </div>
        </div>
      </div>
    </CartProvider>
  )
}

export default App