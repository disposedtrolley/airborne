import React from 'react'
import { Card } from 'semantic-ui-react'
import FareCard from './FareCard'
import './MainContent.css'
var moment = require('moment')


class MainContent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="main-content">
        <Card.Group>
          {this.props.flightResults && this.props.flightResults.options.map(function(option, index) {
            JSON.stringify(console.log(option))
            var totalCost = option.cost;
            var onwardLegs = option.onward_flight.legs;
            var onwardLayovers = option.onward_flight.layovers;
            var originDeptTime = moment(onwardLegs[0].dept_time);
            var destArrTime = moment(onwardLegs[onwardLegs.length-1].arr_time);

            return (
              <FareCard
                totalCost={totalCost}
                originDeptTime={originDeptTime}
                destArrTime={destArrTime}
                onwardLegs={onwardLegs}
                onwardLayovers={onwardLayovers}
                />
            )       
          })}
        </Card.Group>
      </div>
    )
  }
}

export default MainContent