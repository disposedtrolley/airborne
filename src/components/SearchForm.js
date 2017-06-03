import React from 'react'
import { Button, Form, Dropdown, Divider } from 'semantic-ui-react'
import SearchField from './SearchField'
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
var moment = require('moment');


class SearchForm extends React.Component {
  state = {
    startDate: null,
    endDate: null,
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
            <SearchField fluid size="large" placeholder="from"/>
          </Form.Field>
          <Form.Field>
            <SearchField fluid size="large" placeholder="to"/>
          </Form.Field>

          <Divider horizontal inverted>Dates</Divider>

          <Form.Field width="16">
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              startDatePlaceholderText="departing"
              endDatePlaceholderText="returning"
              isOutsideRange={date => date < moment().add(-1, 'days')}
            />
          </Form.Field>

          <Divider horizontal inverted>Passengers</Divider>

          <Form.Group widths='equal'>
            <Form.Field>
              <Dropdown placeholder='adults' compact selection options={passengerOptions} />
            </Form.Field>
            <Form.Field>
              <Dropdown placeholder='children' compact selection options={passengerOptions} />
            </Form.Field>
          </Form.Group>
          
          <Button inverted type='submit' fluid>TAKEOFF!</Button>
        </Form>
      </div>  
    )
  }
}

export default SearchForm