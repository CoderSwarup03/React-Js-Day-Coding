import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onDeleteTodo, onToggleComplete }) => {
  return (
    <>
      <div className='flex flex-col gap-4 w-full bg-white rounded-md p-4 mt-4'>
        {todos.length === 0 ? (
          <h2 className='text-center text-xl text-red-500 text-semibold'>No todos</h2>
        ):(
          todos.map((item) => {
            return (
              <TodoItem key={item.id} todo={item} onDeleteTodo={onDeleteTodo} onToggleComplete={onToggleComplete}/>
            )
          })
        )}
      </div>
    </>
  )
}

export default TodoList