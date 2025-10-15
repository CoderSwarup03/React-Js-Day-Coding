import React, { useState } from 'react'

const MovieSearch = ({ onSerch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.trim() === ''){
      alert('Enter Movie Name')
    }
    onSerch(input)
  }
  return (
    <>
      <div className='max-w-[80%] mx-auto mt-[10px]'>
        <form
          onSubmit={handleSubmit}
          className='flex gap-2 justify-center '>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Search Movie...'
            className='w-[300px] px-3 py-1 rounded-md outline-none border-2 border-green-500 hover:border-green-600'
            type='search' />
          <button
            type='submit'
            className='px-3 py-1 rounded-md bg-green-500 hover:bg-amber-600 font-semibold cursor-pointer text-white'>Search</button>
        </form>
      </div>
    </>
  )
}

export default MovieSearch