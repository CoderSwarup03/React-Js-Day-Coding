import React, { useState } from 'react'

const EditPost = ({ post, onSave }) => {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...post, title, content });
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
            >
                <div className='flex flex-col gap-2'>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Edit Your Title...'
                        className='w-full text-2xl font-semibold rounded-md border-2 border-green-500 px-3 py-1'
                        type="text" />
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder='Edit Your Content...'
                        className='w-full text-2xl font-semibold rounded-md border-2 border-green-500 px-3 py-1'
                        name="" id=""></textarea>
                </div>
                <button
                    type='submit'
                    className='text-2xl font-semibold rounded-md bg-green-500 hover:bg-green-600 px-3 py-1'>Save Change</button>
            </form>
        </>
    )
}

export default EditPost