import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
    return (
        <>
            <div className='max-w-[85%] mx-auto p-4 rounded-md bg-white'>
                <h2 className='text-2xl font-medium text-green-500 text-center'>TodoList:</h2>
                {todos.map((item) => {
                    return (
                        <TodoItem key={item.id} todo={item} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
                    )
                })}
            </div>
        </>
    )
}

export default TodoList