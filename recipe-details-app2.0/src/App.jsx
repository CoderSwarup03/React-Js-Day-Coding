import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import Header from './components/Header'
import RecipeDetails from './components/RecipeDetails'

const App = () => {
  return (
    <>
      <Router>
        <div className='h-screen bg-gray-50'>
          <Header />
          <Routes>
            <Route path='/' element={<RecipeList />} />
            <Route path='/submit' element={<RecipeDetails />}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App