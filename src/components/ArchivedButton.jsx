import React from 'react'

const ArchivedButton = ({id, onArchived, buttonTitle}) => {
  return (
    <button className='note-item__archive-button' onClick={() => onArchived(id)}>{buttonTitle}</button>
  )
}

export default ArchivedButton