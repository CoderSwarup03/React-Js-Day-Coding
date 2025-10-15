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
        onAddPost({ title, content });
        setContent('');
        setTitle('');
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='w-full border-2 outline-none p-2 m-2 border-green-600 rounded-md'
                    placeholder='Enter title...'
                    type="text" name="" id="" />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder='Enter Content...'
                    className='w-full border-2 outline-none p-2 m-2 border-green-600 rounded-md'
                    name="" id=""></textarea>
                <button
                    type='submit'
                    className='w-full bg-green-600 text-white p-2 m-2 rounded-md cursor-pointer font-bold'
                >Add Note</button>
            </form>
        </>
    ) 
}

export default CreatePost