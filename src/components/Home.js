import React from 'react'
import './Home.css'
import Sidebar from './Sidebar'
import MainContent from './MainContent'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      flightResults: null
    }
    this.handleFlightResult = this.handleFlightResult.bind(this)
  }

  handleFlightResult(data) {
    this.setState({
      flightResults: data
    })
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar
          onResult={this.handleFlightResult}/>
        <MainContent
          flightResults={this.state.flightResults}/>
      </div>
    )
  }
}

export default Home