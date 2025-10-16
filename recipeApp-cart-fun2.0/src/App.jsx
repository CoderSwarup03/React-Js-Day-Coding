import React, { useEffect, useState } from 'react'
import RecipeProvider from './context/RecipeProvider'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Pagenation from './components/Pagenation'

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [page, setPage] = useState(1)
  const [totalResult, setTotalResult] = useState(0)

  const fetchProducts = async (page = 1, limit = 9) => {
    const offset = (page - 1) * limit
    let response = await fetch('https://dummyjson.com/products/?limit=' + limit + '&skip=' + offset);
    let data = await response.json();
    console.log(data)
    setProducts(data.products)
    setTotalResult(Number(data.total));
  }

  useEffect(() => {
    fetchProducts()
    setPage(1)
  }, [])


  // addToCart
  const addToCart = (item) => {
    setCart([...cart, item]);
    alert("Item added to cart")
    console.log(cart)
  }

  const deleteFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  return (
    <>
      <RecipeProvider.Provider value={{ deleteFromCart, addToCart, cart, products, setProducts, totalResult, page, setPage, fetchProducts }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
          <Pagenation />
        </BrowserRouter>
      </RecipeProvider.Provider>
    </>
  )
}

export default App