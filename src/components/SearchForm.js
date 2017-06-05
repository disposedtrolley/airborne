import React from 'react'
import { Button, Form, Dropdown, Divider } from 'semantic-ui-react'
import SearchFieldContainer from './SearchFieldContainer'
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
var moment = require('moment');
var axios = require('axios');


class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      fromAirport: null,
      toAirport: null,
      adultCount: null,
      childCount: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAdultCountChange = this.handleAdultCountChange.bind(this)
    this.handleChildCountChange = this.handleChildCountChange.bind(this)
    this.handleOriginChange = this.handleOriginChange.bind(this)
    this.handleDestChange = this.handleDestChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    console.log(this.state)
    var deptDate = this.state.startDate.format('YYYY-MM-DD')
    var returnDate = null
    if (this.state.endDate) {
      returnDate = this.state.endDate.format('YYYY-MM-DD')
    }
    axios.get('http://localhost:5000/flights', {
      params: {
        origin: this.state.fromAirport,
        dest: this.state.toAirport,
        adults: this.state.adultCount,
        children: this.state.childCount,
        dept_date: deptDate,
        return_date: returnDate
      }
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleAdultCountChange(evt, data) {
    this.setState({
      adultCount: data.value
    })
  }

  handleChildCountChange(evt, data) {
    this.setState({
      childCount: data.value
    })
  }

  handleOriginChange(airportCode) {
    this.setState({
      fromAirport: airportCode
    })
  }

  handleDestChange(airportCode) {
    this.setState({
      toAirport: airportCode
    })
  }

  handleDateChange(dates) {
    this.setState({
      startDate: dates.startDate,
      endDate: dates.endDate
    })
  }

  render() {
    const passengerOptions = [
      { key: 0, text: '0', value: 0 },
      { key: 1, text: '1', value: 1 },
      { key: 2, text: '2', value: 2 },
      { key: 3, text: '3', value: 3 },
      { key: 4, text: '4', value: 3 },
      { key: 5, text: '5', value: 3 },
      { key: 6, text: '6', value: 3 },
    ]
    return (
      <div>
        <Form>
          <Divider horizontal inverted>Where in the World</Divider>

          <Form.Field>
            <SearchFieldContainer
              fluid size="large"
              placeholder="from"
              onSelectAirport={this.handleOriginChange}/>
          </Form.Field>
          <Form.Field>
            <SearchFieldContainer
              fluid size="large"
              placeholder="to"
              onSelectAirport={this.handleDestChange}/>
          </Form.Field>

          <Divider horizontal inverted>Dates</Divider>

          <Form.Field width="16">
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              onDatesChange={this.handleDateChange} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              startDatePlaceholderText="departing"
              endDatePlaceholderText="returning"
              isOutsideRange={date => date < moment()}
            />
          </Form.Field>

          <Divider horizontal inverted>Passengers</Divider>

          <Form.Group widths='equal'>
            <Form.Field>
              <Dropdown
                placeholder='adults'
                compact
                selection
                options={passengerOptions}
                onChange={this.handleAdultCountChange}/>
            </Form.Field>
            <Form.Field>
              <Dropdown
                placeholder='children'
                compact
                selection
                options={passengerOptions}
                onChange={this.handleChildCountChange}/>
            </Form.Field>
          </Form.Group>
          
          <Button
            inverted type='submit'
            fluid
            onClick={this.handleSubmit}>
              TAKEOFF!
          </Button>
        </Form>
      </div>  
    )
  }
}

export default SearchForm