import React from 'react'
import NoteItem from './NoteItem'

const NoteAppBody = () => {
  return (
    <div>
      <div className='note-app__body'>
        <div className='note-input'>
          <h2>Buat Catatan</h2>
          <p className='note-input__title__char-limit'>Sisa Karakter:</p>
          <input className='note-input' placeholder='Ini adalah judul...' />
          <textarea placeholder='Tuliskan catatanmu disini...' rows={10} />
          <button>Buat</button>
        </div>
      </div>
      <div className='note-list__body'>
        <h2>Catatan Aktif</h2>
        <div className='notes-list'>
          <NoteItem />
        </div>
      </div>
    </div>

  )
}

export default NoteAppBody