import React from 'react'
import { Card } from 'semantic-ui-react'
import FareCard from './FareCard'
import './MainContent.css'

class MainContent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="main-content">
        {JSON.stringify(this.props.flightResults)}
        <Card.Group>
          <FareCard />
          <FareCard />
          <FareCard />
          <FareCard />
          <FareCard />
          <FareCard />
        </Card.Group>
      </div>
    )
  }
}

export default MainContent