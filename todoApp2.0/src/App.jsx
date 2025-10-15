import React, { useState } from 'react'
import InputTodo from './components/InputTodo'
import TodoList from './components/TodoList'

const App = () => {
  // globally create function!!
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos,
    { id: Date.now(), task, completed: false }
    ])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos(todos.map((item) => item.id === id ? { ...item, completed: !item.completed } : item))
  }

  const todoClear = () => {
    setTodos([])
  }

  return (
    <div className='bg-gray-200 w-[100vw] h-[100vh]'>
      <h2 className='text-3xl font-bold text-center text-green-600 p-4'>Todo App New'25</h2>
      <div className='max-w-[85%] mx-auto '>
        <div>
          <InputTodo onAddTodo={addTodo} onClearTodo={todoClear} />
        </div>
        <div>
          <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleComplete={toggleCompleted} />
        </div>
      </div>
    </div>
  )
}

export default App