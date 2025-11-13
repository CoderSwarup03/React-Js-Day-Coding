import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import ProductItem from './components/ProductItem';
import CartList from './components/CartList';

const App = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProduct = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    console.log(data)
    setProduct(data.products)
  }
  useEffect(() => {
    fetchProduct()
  }, [])


  return (
    <>
      <BrowserRouter>
        <Navbar setProduct={setProduct} />
        <ProductList product={product} />
        <CartList />
      </BrowserRouter>
    </>
  )
}

export default App