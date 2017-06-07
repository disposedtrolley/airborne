import React from 'react'
import { Button, Divider } from 'semantic-ui-react'
import './Sidebar.css'

import SearchForm from './SearchForm'

class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    this.handleFlightResult = this.handleFlightResult.bind(this)
  }

  handleFlightResult(data) {
    this.props.onResult(data)
  }

  render() {
    return (
      <div className="sidebar">
        <h1 className="header-text">airborne</h1>
        <SearchForm
          onResult={this.handleFlightResult}/>
        
        <Divider inverted />

        <div className="saved-flights-link">
          <Button color='red' fluid>Saved Flights</Button>
        </div>
      </div>
    )
  }
}

export default Sidebar