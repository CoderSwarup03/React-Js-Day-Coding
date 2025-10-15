import React from 'react'
import ContextProvider from './context/ContextProvider'
import CartList from './components/CartList'
import ProductList from './components/ProductList'

const App = () => {
  return (
    <>
      <ContextProvider>
        <h1 className='text-3xl font-semibold text-green-500 text-center p-3'>Cart App'New25</h1>
        <div className='grid grid-col-1 md:grid-cols-3 gap-3'>
            <div className='col-span-2 gap-2'>
              <ProductList />
            </div>
            <div>
              <CartList />
            </div>
        </div>
      </ContextProvider>
    </>
  )
}

export default App