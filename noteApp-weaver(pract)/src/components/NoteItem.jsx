import React from 'react'

const NoteItem = ({ item, deleteNote }) => {
  const handleDelete = () => {
    deleteNote(item.id)
  }
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between items-center gap-2 p-4'>
        <div>
          <h3 className='text-2xl font-bold'>{item.title}</h3>
          <h4 className='text-xl font-semibold'>{item.description}</h4>
        </div>
        <div className='flex gap-2 items-center'>
          <button
            className='text-xl font-bold text-white bg-green-500 px-3 py-2 rounded-md'
          >Update</button>
          <button
            className='text-xl font-bold text-white bg-green-500 px-3 py-2 rounded-md'
            onClick={() => handleDelete(item.id)}
          >Delete</button>
        </div>
      </div>
    </>
  )
}

export default NoteItem