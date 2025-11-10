import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import ProductItem from './components/ProductItem';

const App = () => {
  const [product, setProduct] = useState([]);

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
      <Navbar setProduct={setProduct}/>
      <ProductList product={product} />
    </>
  )
}

export default App