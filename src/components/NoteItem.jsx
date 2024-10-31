import React from 'react'
import DeleteButton from './DeleteButton'
import ArchivedButton from './ArchivedButton'

const NoteItem = ({ title, createdAt, body, id, onDelete, onArchived, showFormattedDate, buttonTitle }) => {

  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <h4 className='note-item__title'>{title}</h4>
        <p className='note-item__date'>{showFormattedDate(createdAt)}</p>
        <p className='note-item__body'>{body}</p>
      </div>
      <div className='note-item__action'>
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchivedButton id={id} onArchived={onArchived} buttonTitle={buttonTitle} />
      </div>
    </div>
  )
}

export default NoteItem