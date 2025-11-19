import React from 'react'
import NoteItem from './NoteItem'

const NoteList = ({ notes, deleteNote }) => {
  return (
    <>
      <div className='px-3 bg-gray-50 rounded-md mt-3'>
        {
          notes.length === 0 ? (
            <h1 className='text-center text-sm md:text-lg font-bold text-gray-500'>Notes is empty, please add note</h1>
          ) : (
            notes.map((item, idx) => {
              return (
                <NoteItem key={idx} item={item} deleteNote={deleteNote} />
              )
            })
          )
        }
      </div>
    </>
  )
}

export default NoteList