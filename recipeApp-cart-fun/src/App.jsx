import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './pages/Cart'
import ProductContext from './context/ProductContext'
import Pagination from './components/Pagination'

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const fetchProducts = async (page = 1, perPage = 9) => {
    const skip = (page - 1) * perPage
    const response = await fetch(`https://dummyjson.com/products?limit=${perPage}&skip=${skip}`);
    const data = await response.json()
    console.log(data);
    setProducts(data.products)
    // added
    setTotalResults(Number(data.total));
    setPage(page);
  }
  useEffect(() => {
    fetchProducts()
  }, [])


  const addToCart = (item) => {
    setCart([...cart, item])
    alert('Product added to cart')
    console.log(cart);

  }

  const deletFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const totalPage = Math.ceil(totalResults / 10);

  return (
    <>
      <ProductContext.Provider value={{ products, setProducts, addToCart, deletFromCart, cart, page, setPage, totalPage, fetchProducts }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
           <Pagination />
        </BrowserRouter>
      </ProductContext.Provider>
    </>
  )
}

export default App