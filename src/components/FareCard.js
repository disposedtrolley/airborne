import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'
import './FareCard.css'
var moment = require('moment')


class FareCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isFavourite: false
    }
    this.handleFavourite = this.handleFavourite.bind(this);
    this.calculateTotalJourneyTime = this.calculateTotalJourneyTime.bind(this)
  }

  handleFavourite() {
    this.setState((prevState, props) => {
      return {isFavourite: !prevState.isFavourite};
    });
  }

  calculateTotalJourneyTime() {
    var totalLegTime = this.props.onwardLegs.reduce(function(totalTime, leg) {
      return totalTime + leg.duration
    }, 0)

    var totalLayoverTime = this.props.onwardLayovers && this.props.onwardLayovers.reduce(function(totalTime, layover) {
      return totalTime + layover.duration
    }, 0)

    return totalLayoverTime + totalLegTime
  }

  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            {Math.floor(this.calculateTotalJourneyTime()/60)} hrs {this.calculateTotalJourneyTime()%60} mins
            <Icon
              size="large"
              className="button-favourite"
              color="pink"
              name={this.state.isFavourite ? "heart" : "empty heart"}
              onClick={this.handleFavourite}/>
          </Card.Header>
          <Card.Meta>
            <span>
              Total Journey Time
            </span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <Card.Description className="fare-description">
            <table className="flight-times">
              <tbody>
                <tr>
                  <td className="flight-time">{this.props.originDeptTime.format('hh:mm A')} </td>
                  <td><Icon size="big" name="arrow circle right" /></td>
                  <td className="flight-time"> {this.props.destArrTime.format('hh:mm A')}</td>
                </tr>
              </tbody>   
            </table>
            
            <table className="flight-durations">
              <tbody>
                  {this.props.onwardLegs.map(function(leg, index) {
                    return (
                      <tr>
                        <td>{leg.origin_code} to {leg.dest_code}</td>
                        <td className="flight-duration-value">{Math.floor(leg.duration/60)} hrs {leg.duration%60} mins</td>
                      </tr>
                    )
                  })}
                  {this.props.onwardLayovers.map(function(layover, index) {
                    return (
                      <tr>
                        <td>Stopover in {layover.airport_code}</td>
                        <td className="flight-duration-value">{Math.floor(layover.duration/60)} hrs {layover.duration%60} mins</td>
                      </tr>
                    )
                  })}
              </tbody> 
            </table>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button basic color='blue' animated>
            <Button.Content visible>More Info</Button.Content>
            <Button.Content hidden>
              <Icon name='right arrow' />
            </Button.Content>
          </Button>
          <span className="ticket-price">{this.props.totalCost}</span>
        </Card.Content>
      </Card>
    )
  }
}

export default FareCard