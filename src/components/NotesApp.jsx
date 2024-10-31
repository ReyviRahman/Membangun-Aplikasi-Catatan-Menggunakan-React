import React from 'react'
import Navbar from './Navbar'
import NoteAppBody from './NoteAppBody'
import NoteListBody from './NoteListBody'
import { getInitialData, showFormattedDate} from '../utils/index'
import ArchivedListBody from './ArchivedListBody'

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchTerm: ''
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.handleSearch = this.handleSearch.bind(this)
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes })
  }

  onAddNotesHandler({title, body}) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString()
          }
        ]
      }
    })
  }

  handleSearch(event) {
    const keyword = event.target.value;
    this.setState({ searchTerm: keyword });
  }

  onArchiveHandler(id) {
    this.setState((prevState) => {
      const updatedNotes = prevState.notes.map(note => 
        note.id === id ? {...note, archived: !note.archived} : note
      );
      console.log(updatedNotes)
      return { notes: updatedNotes}
    })
  }

  render() {
    const filteredNotes = this.state.notes.filter(note => 
      note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()) 
    );

    return (
      <div>
        <Navbar handleSearch={this.handleSearch} />
        <NoteAppBody addNote={this.onAddNotesHandler} />
        <NoteListBody notes={filteredNotes} onArchived={this.onArchiveHandler} onDelete={this.onDeleteHandler} showFormattedDate={showFormattedDate} />

        <ArchivedListBody notes={filteredNotes} onArchived={this.onArchiveHandler} onDelete={this.onDeleteHandler} showFormattedDate={showFormattedDate} />


      </div>
    );
  }
}

export default NotesApp;