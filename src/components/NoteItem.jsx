import React from 'react'
import DeleteButton from './DeleteButton'

const NoteItem = ({ title, createdAt, body, id, onDelete }) => {
  const formattedDate = new Date(createdAt).toLocaleDateString('id-ID', {
    weekday: 'long', // Menampilkan hari
    day: 'numeric',  // Menampilkan tanggal
    month: 'long',   // Menampilkan bulan dalam format lengkap
    year: 'numeric'  // Menampilkan tahun
  });

  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <h4 className='note-item__title'>{title}</h4>
        <p className='note-item__date'>{formattedDate}</p>
        <p className='note-item__body'>{body}</p>
      </div>
      <div className='note-item__action'>
        <DeleteButton id={id} onDelete={onDelete} />
        <button className='note-item__archive-button'>Arsipkan</button>
      </div>
    </div>
  )
}

export default NoteItem