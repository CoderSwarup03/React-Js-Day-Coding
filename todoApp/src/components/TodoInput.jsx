import React, { useState } from 'react'

const TodoInput = ({ onAddTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    onAddTodo(input)
    setInput('')
  }

  return (
    <>
      <div className='max-w-[80%] mx-auto mt-5 flex flex-col gap-3'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Add todo...'
          className='w-full border border-green-500 rounded-md px-3 py-2 outline-none'
          type="text" name="" id="" />
        <button onClick={handleSubmit} className='text-bold text-xl cursor-pointer bg-green-500 text-white rounded-md px-3 py-2'>Add</button>
      </div>
    </>
  )
}

export default TodoInput