import React, { useState } from 'react'

function EditPost({ post, onSave }) {
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
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-full p-2 border rounded-md mb-2 outline-none border-gray-300'
          type="text" />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='w-full p-2 border rounded-md mb-2 outline-none border-gray-300'
          name="" id=""></textarea>
        <button
          className='text-xl px-2 py-1 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold'
          type='submit'
        >Save Changes</button>
      </form>
    </>
  )
}

export default EditPost