import React, { useEffect, useState } from 'react'
import NoteInput from './components/NoteInput'
import NoteList from './components/NoteList'

const App = () => {
  const [notes, setNotes] = useState([])
  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem('notes'))
    if(saveNotes) {
      setNotes(saveNotes)
    }
  },[])

  const addNote = (task) => {
    const newNote = { id: Date.now(), ...task, completed: false }
    const updatedNotes = [...notes, newNote]
    setNotes(updatedNotes)
    localStorage.setItem('notes',JSON.stringify(updatedNotes))
  }
  const deleteNote = (id) => {
    const newNotes = notes.filter((item) => item.id !== id)
    setNotes(newNotes)
    localStorage.setItem('notes',JSON.stringify(newNotes))
    // setNotes(notes.filter((item) => item.id !== id))
  }

  return (
    <>
      <div className='max-w-[90%] mx-auto'>
        <h1 className='text-green-500 text-3xl font-bold mt-5 text-center'>NoteApp</h1>
        <NoteInput addNote={addNote} />
        <NoteList notes={notes} deleteNote={deleteNote} />
      </div>
    </>
  )
}

export default App