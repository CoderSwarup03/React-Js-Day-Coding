import React, { useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, {id: Date.now(), task, completed: false }]);
  }
  const deleteTodo = (id) => { 
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
   setTodos(todos.map((todo)=> todo.id === id ? {...todo,completed: !todo.completed}: todo))
  }


  return (
    <>
      <div className='bg-gary-100'>
        <h1 className='text-3xl font-bold text-green-600 text-center mt-[10px]'>Todo App</h1>
        <TodoInput onAddTodo = {addTodo}/>
        <TodoList todos={todos} onDeleteTodo={deleteTodo} onToggleComplete={toggleComplete}/>
      </div>
    </>
  )
}

export default App