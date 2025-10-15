import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('')

  const hadleSearch = () => {
    if (searchInput === '' || searchInput.trim() === '') {
      alert('Please enter a movie name');
      setSearchInput('')
      return
    }
    onSearch(searchInput);
    setSearchInput('')
  }

  return (
    <>
      <div className='flex justify-center mt-5 gap-4'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className='py-3 px-3 outline-none border-2 border-green-500 rounded-md w-[300px]'
          placeholder='Seach Your Movie...'
          type="search" name="" id="" />
        <button
          onClick={hadleSearch}
          className='bg-green-500 rounded-md py-1 font-bold px-4 cursor-pointer'>Search</button>
      </div>
    </>
  )
}

export default SearchBar