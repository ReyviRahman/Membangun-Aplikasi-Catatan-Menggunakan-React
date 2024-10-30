import React from 'react'
import NoteItem from './NoteItem'

const NoteListBody = ({notes, onDelete}) => {
  return (
    <div className='note-list__body'>
      <h2>Catatan Aktif</h2>
      {
        notes.length == 0 && (
          <p className='notes-list__empty-message'>Data Tidak Ada</p>
        )
      }
      <div className='notes-list'>
        {
          notes.map((note) => (
            <NoteItem key={note.id} id={note.id} onDelete={onDelete} {...note} />
          ))
        }
      </div>
    </div>
  )
}

export default NoteListBody