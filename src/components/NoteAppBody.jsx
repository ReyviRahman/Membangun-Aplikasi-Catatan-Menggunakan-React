import React from 'react'

const NoteAppBody = () => {
  return (
    <div className='note-app__body'>
      <div className='note-input'>
        <h2>Buat Catatan</h2>
        <p className='note-input__title__char-limit'>Sisa Karakter:</p>
        <input className='note-input' placeholder='Ini adalah judul...' />
        <textarea />
      </div>
    </div>
  )
}

export default NoteAppBody