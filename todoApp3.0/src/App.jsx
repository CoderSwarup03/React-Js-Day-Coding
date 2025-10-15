import React, { useState } from 'react'
import SearchInp from './components/SearchInp';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }])
  }
  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((item) => item.id === id ? { ...item, completed: !item.completed } : item))
  }

  return (
    <>
      <div className='min-h-screen p-4'>
        <h1 className='text-3xl font-bold text-center text-green-500'>TodoApp New🗒️</h1>
        <SearchInp onAddTodo={addTodo} />
        <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleTodo={toggleTodo} />
      </div>
    </>
  )
}

export default App