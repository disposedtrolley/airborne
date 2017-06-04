import React from 'react'
import { Card } from 'semantic-ui-react'
import FareCard from './FareCard'
import './MainContent.css'

class MainContent extends React.Component {
  render() {
    return (
      <div className="main-content">
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