import React, { useState } from 'react'

const CreatePost = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '' && content === '') {
      alert('Please enter title and content');
      return;
    }
    onAddPost({ title, content });
    setTitle('');
    setContent('')
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='mx-3'>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter title...'
          className='w-full outline-none border-2 border-green-500 rounded-md px-3 py-1 mb-2 '
          type="text" name="" id="" />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Enter title...'
          className='w-full outline-none border-2 border-green-500 rounded-md px-3 py-1 mb-2 '
          name="" id=""></textarea>
        <button
          type='submit'
          className=' w-full bg-green-500 text-white py-2 rounded-md font-semibold cursor-pointer'>Add</button>
      </form>
    </>
  )
}

export default CreatePost