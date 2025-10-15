import React, { useState } from 'react'

const SearchInp = ({ onAddTodo }) => {
    const [input, setInput] = useState('');
    const handleSubmit = () => {
        if (input === '' || input.trim() === '') {
            alert('Please enter a valid todo');
            setInput('');
            return;
        }
        onAddTodo(input);
        alert('Todo added successfully')
        setInput('');
    }

    return (
        <>
            <div className='max-w-[85%] mx-auto flex flex-col gap-3 mt-4'>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Add your todo...'
                    className='p-3 border-2 border-green-500 rounded-md outline-none hover:border-green-600 overflow-hidden'
                    type="text" name="" id="" />
                <button
                    onClick={handleSubmit}
                    className='bg-green-500 hover:bg-green-600 w-full py-2 rounded-md font-bold cursor-pointer'>Add</button>
            </div>
        </>
    )
}

export default SearchInp