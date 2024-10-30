import React from 'react'

const NoteItem = () => {
  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <h4 className='note-item__title'>Babel</h4>
        <p className='note-item__date'>Kamis, 14 April 2024</p>
        <p className='note-item__body'>margin: 0 auto; memerlukan elemen block-level karena hanya elemen block yang bisa memenuhi seluruh lebar container-nya, yang memungkinkan CSS untuk menghitung sisa ruang di kiri dan kanan elemen dan kemudian memusatkannya. Elemen inline atau inline-block secara default hanya mengambil ruang sesuai kontennya, sehingga browser tidak dapat menerapkan margin kiri dan kanan secara otomatis.</p>
      </div>
      <div className='note-item__action'>
        <button className='note-item__delete-button'>Delete</button>
        <button className='note-item__archive-button'>Arsipkan</button>
      </div>
    </div>
  )
}

export default NoteItem