import React from 'react'
import NoteItem from './NoteItem'

class NoteAppBody extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  onTitleChangeEventHandler(event) {
    const charLimit = 50;

    if (event.target.value.length <= charLimit) {
      this.setState(() => {
        return {
          title: event.target.value
        }
      })
    }

    
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value
      }
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state)
  }

  render() {
    return (
      <div className='note-app__body' onSubmit={this.onSubmitEventHandler}>
        <form className='note-input'>
          <h2>Buat Catatan</h2>
          <p className='note-input__title__char-limit'>Sisa Karakter: {50 - this.state.title.length}</p>
          <input className='note-input' placeholder='Ini adalah judul...' value={this.state.title} onChange={this.onTitleChangeEventHandler} />
          <textarea placeholder='Tuliskan catatanmu disini...' rows={10} value={this.state.body} onChange={this.onBodyChangeEventHandler} />
          <button type='submit'>Buat</button>
        </form>
      </div>
    )
  }
}

export default NoteAppBody