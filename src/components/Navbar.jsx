import React from 'react'
import NoteItem from './NoteItem'

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeEventHandler = this.onChangeEventHandler.bind(this)
  }

  onChangeEventHandler(event) {
    this.props.handleSearch(event)
  }

  render() {
  return (
    <div className='navbar'>
      <h1>Notes</h1>
      <input type='text' placeholder='Cari catatan...' onChange={(event) => this.onChangeEventHandler(event)} />
    </div>
  )
}
}

export default Navbar

// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='navbar'>
//       <h1>Notes</h1>
//       <input type='text' placeholder='Cari catatan...'/>
//     </div>
//   )
// }

// export default Navbar

