import React from 'react'
import './Sidebar.css'

import SearchForm from './SearchForm'

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <h1 className="header-text">airborne</h1>
        <SearchForm />
      </div>
    )
  }
}

export default Sidebar