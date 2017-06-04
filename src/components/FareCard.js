import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'
import './FareCard.css'

class FareCard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isFavourite: false
    }
    this.handleFavourite = this.handleFavourite.bind(this);
  }

  handleFavourite() {
    this.setState((prevState, props) => {
      return {isFavourite: !prevState.isFavourite};
    });
  }

  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            airline_name
            <Icon
              size="large"
              className="button-favourite"
              color="pink"
              name={this.state.isFavourite ? "heart" : "empty heart"}
              onClick={this.handleFavourite}/>
          </Card.Header>
          <Card.Meta>
            <span>
              aircraft_type
            </span>
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <Card.Description className="fare-description">
            <table className="flight-times">
              <tbody>
                <tr>
                  <td className="flight-time">10:30am</td>
                  <td><Icon size="big" name="arrow circle right" /></td>
                  <td className="flight-time"> 7:45pm</td>
                </tr>
              </tbody>   
            </table>
            
            <table className="flight-durations">
              <tbody>
                <tr>
                  <td>MEL to PVG</td>
                  <td className="flight-duration-value">11 hrs 30 mins</td>
                </tr>
                <tr>
                  <td>Stopover in SIN</td>
                  <td className="flight-duration-value">2 hrs 00 mins</td>
                </tr>
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
          <span className="ticket-price">$999.95</span>
        </Card.Content>
      </Card>
    )
  }
}

export default FareCard