import React, { useState } from 'react'

const EditPost = ({ post, onSave }) => {
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const editSubmit = (e) => {
        e.preventDefault();
        onSave({ ...post, title, content });
    }

    return (
        <>
            <form
                onSubmit={editSubmit}
                className='flex flex-col gap-2'
            >
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Edit your title...'
                    className='border-2 outline-none border-green-600 rounded-md p-2 m-2'
                    type="text" name="" id="" />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className='border-2 outline-none border-green-600 rounded-md p-2 m-2'
                    placeholder='Edit your content...'
                    name="" id=""></textarea>
                <button
                    type='submit'
                    className='px-3 py-1 rounded-md font-semibold bg-green-500 hover:bg-green-600'>Save Changes</button>
            </form>
        </>
    )
}

export default EditPost