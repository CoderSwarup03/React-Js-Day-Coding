import React, { useState } from 'react'

const NoteInput = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (title === '' || description === '') {
      alert('Please enter a title and description');

    } else if (title.trim() === '' || description.trim() === '') {
      setTitle('');
      setDescription('');
      alert('Please enter a title and description');
    }

    addNote({ title, description });
    console.log(title, description);
    setDescription('');
    setTitle('');
  }

  return (
    <>
      <div className=''>
        <div className='flex flex-col gap-3'>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='text-lg font-semibold px-3 py-2 border border-green-500 hover:border-green-600 rounded-md outline-none'
            type="text" />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='text-lg font-semibold px-3 py-2 border border-green-500 hover:border-green-600 rounded-md outline-none'
          ></textarea>
        </div>
        <button
          onClick={() => handleSubmit()}
          className='text-lg font-bold text-white bg-green-500 hover:bg-green-600 rounded-md px-3 py-2 w-full mt-5 cursor-pointer'>AddNote</button>
      </div>
    </>
  )
}

export default NoteInput