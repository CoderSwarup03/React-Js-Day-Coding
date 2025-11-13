import React, { useState } from 'react'

const Navbar = ({ handleSearch }) => {
  const [input, setInput] = useState('');

  const searchInp = () => {
    handleSearch(input)
    setInput('')
  }

  const inputSubmit = (e) => {
    console.log('clicked')
    if (e.keyDown === 'Enter') {
      searchInp()
      setInput('')

    }
  }

  return (
    <>
      <div className='bg-gray-50 border-b-2 border-green-500'>
        <div className='flex justify-between max-w-6xl mx-auto items-center p-4'>
          <h1 className='text-2xl font-bold text-green-500'>MovieSearch</h1>
          <div className='flex gap-2'>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onSubmit={() => inputSubmit()}
              placeholder='Enter your fav movie...'
              className='outline-none border-2 border-green-500 hover:border-green-600 rounded-md px-3 py-2 w-[300px] text-lg font-semibold'
              type="search" name="" id="" />
            <button
              onClick={() => searchInp()}
              className='text-xl font-bold text-white px-3 py-2 bg-green-500 cursor-pointer rounded-md'>Search</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar