import React from 'react'
import Navbar from './Navbar'
import NoteAppBody from './NoteAppBody'
import NoteListBody from './NoteListBody'
import { getInitialData } from '../utils/index'

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes })
  }

  onAddNotesHandler({title, body}) {
    this.setState((prevState) => {
      console.log(this.state.notes)
      return {
        notes: [
          ...prevState.notes,
          {
            id: + new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString()
          }
        ]
      }
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <NoteAppBody addNote={this.onAddNotesHandler} />
        <NoteListBody notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default NotesApp;