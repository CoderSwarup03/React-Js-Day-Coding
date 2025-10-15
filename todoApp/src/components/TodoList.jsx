import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onDeleteTodo, onToggleComplete }) => {
  return (
    <>
      <div>
        <h2 className='text-xl font-semibold text-green-500 max-w-[80%] mx-auto mt-5'>Todo List:</h2>
        {
          todos.length === 0 ? (
            <h2 className='text-xl font-semibold text-black max-w-[80%] mx-auto mt-5 text-center'>yet no todo.add one or more</h2>
          ) : (
            todos.map((item) => {
              return (
                <TodoItem key={item.id} todo={item} onDeleteTodo={onDeleteTodo} onToggleComplete={onToggleComplete} />
              )
            })
          )
        }
      </div>
    </>
  )
}

export default TodoList