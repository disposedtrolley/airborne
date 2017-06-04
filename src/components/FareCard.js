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
              className="button-favourite"
              color="pink"
              name={this.state.isFavourite ? "heart" : "empty heart"}
              onClick={this.handleFavourite}/>
          </Card.Header>
        </Card.Content>
        <Card.Content description="MEL to PVG" />
        <Card.Content extra>
          <Button animated>
            <Button.Content visible>More Info</Button.Content>
            <Button.Content hidden>
              <Icon name='right arrow' />
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>
    )
  }
}

export default FareCard