import React from 'react'

const TodoItem = ({ todo, onDeleteTodo, onToggleComplete }) => {
  return (
    <>
      <div className='flex justify-between p-3 border-2 border-green-600 rounded-md'>
        <div>
          <h2 className={`text-2xl font-semibold text-blue-500 ${todo.completed ? 'line-through' : ''}`}>
            {todo.task}
          </h2>
        </div>
        <div className='flex gap-2'>
          <button
            onClick={() => onToggleComplete(todo.id)}
            className='text-xl font-semibold rounded-md text-white bg-green-500 hover:bg-green-600 px-3 py-2 cursor-pointer'>Completed</button>
          <button
            onClick={() => onDeleteTodo(todo.id)}
            className='text-xl font-semibold rounded-md text-white bg-red-500 hover:bg-red-600 px-3 py-2 cursor-pointer'>Delete</button>
        </div>
      </div>
    </>
  )

}
export default TodoItem