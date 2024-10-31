import React from 'react'
import NoteItem from './NoteItem'

const NoteListBody = ({notes, onDelete, onArchived, showFormattedDate}) => {
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
          notes
            .filter(note => !note.archived)
            .map((note) => (
              <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchived={onArchived} buttonTitle={"Arsipkan"} showFormattedDate={showFormattedDate} {...note} />
            ))
        }
      </div>
    </div>
  )
}

export default NoteListBody