import React from 'react'

const TodoItem = ({ todo, onDeleteTodo, onToggleComplete }) => {
  return (
    <div className='flex justify-between max-w-[75%] mx-auto rounded-md border border-green-500 px-3 py-2'>
      <h2
        className={`text-semibold text-xl bg-gray-100 px-3 py-2 rounded-md ${todo.completed ? 'line-through' : ''}`}>{todo.task}</h2>
      <div className='flex gap-3'>
        <button
          onClick={() => onToggleComplete(todo.id)}
          className={`text-semibold cursor-pointer bg-green-500 hover:bg-green-600 text-white rounded-md px-3 py-2`}>Completed</button>
        <button
          onClick={() => onDeleteTodo(todo.id)}
          className='text-semibold cursor-pointer bg-red-500 hover:bg-red-600 text-white rounded-md px-3 py-2'>Delete</button>
      </div>
    </div>
  )
}

export default TodoItem