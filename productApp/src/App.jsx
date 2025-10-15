import React, { useState } from 'react'
import Home from './components/Home'
import Page from './components/Page';
import Navbar from './components/Navbar';

const App = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1)

  const totalPage = Math.ceil(products.length / 10);
  console.log(totalPage)

  return (
    <>
      <Navbar setProducts={setProducts}/>
      <Home products={products} setProducts={setProducts} />
      <Page page={page} setPage={setPage} totalPage={totalPage}/>
    </>
  )
}

export default App