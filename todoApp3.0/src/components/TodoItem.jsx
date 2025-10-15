import React from 'react'

const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <div className='p-4'>
        {todo.length === 0 ? (
          <h2 className='text-2xl font-semibold text-green-500 text-center'>TodoList is empty</h2>
        ) : (
          <>
            <div className='flex justify-between  items-center border-2 border-green-500 rounded-md p-3'>
              <h2 className={`text-xl font-bold ${todo.completed ? 'line-through' : ''}` }>{todo.text}</h2>
              <div className='flex  flex-col gap-2 justify-center items-center md:flex-row'>
                <button
                  onClick={() => onToggleTodo(todo.id)}
                  className='text-xl font-bold px-3 py-2 rounded-md bg-green-500 hover:bg-green-600'>Completed </button>
                <button
                  onClick={() => onDeleteTodo(todo.id)}
                  className='text-xl font-bold px-3 py-2 rounded-md bg-green-500 hover:bg-green-600'>Delete</button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default TodoItem