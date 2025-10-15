import React, { useState } from 'react'

const InputTodo = ({ onAddTodo, onClearTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input === '') {
      return alert("Please enter a todo")
    }
    if (input.trim() === '') {
      return setInput('')
    }
    onAddTodo(input);
    setInput('')
  }
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <input
          placeholder='Enter a todo'
          className='border-2 border-green-500 outline-none p-3 w-full rounded-md'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text" />
        <div className='flex mt-4 w-full gap-4'>
          <button
            className='text-semibold p-3 bg-green-600 text-white rounded-md w-1/2 cursor-pointer'
            onClick={handleSubmit}>Add</button>

          <button
            id='clear'
            className='text-semibold p-3  bg-red-600 text-white rounded-md w-1/2 cursor-pointer'
            onClick={() => onClearTodo()}>All Clear</button>
        </div>
      </div>
    </>
  )
}

export default InputTodo