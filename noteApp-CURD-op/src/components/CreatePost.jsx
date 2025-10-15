import React, { useState } from 'react'

const CreatePost = ({ onAddPost }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) {
            alert("Enter title and content")
            return;
        }
        onAddPost({ title, content })
        setTitle('')
        setContent('')
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className='mt-[10px]'>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Enter title...'
                    className='w-full p-2 rounded-md mb-2 outline-none border border-gray-300'
                    type="text" />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder='Enter content...'
                    className='w-full p-2 rounded-md mb-2 outline-none border border-gray-300'
                    name="" id=""></textarea>
                <button
                    type='submit'
                    className='w-full bg-green-500 text-white font-semibold px-3 py-1 rounded-md cursor-pointer'
                >Add</button>
            </form>
        </>
    )
}

export default CreatePost