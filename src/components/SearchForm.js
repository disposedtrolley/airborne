import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import SearchExampleStandard from './AirportField'
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
var moment = require('moment');


class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment().add(7, 'days'),
      focused: false
    }
  }
  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <SearchExampleStandard fluid={true} size="large" placeholder="from"/>
          </Form.Field>
          <Form.Field>
            <SearchExampleStandard fluid={true} size="large" placeholder="to"/>
          </Form.Field>
          <Form.Field>
            <Checkbox label='returning?' />
          </Form.Field>
          <Form.Field>
          </Form.Field>
          <Button type='submit' fluid={true}>takeoff!</Button>
        </Form>
      </div>  
    )
  }
}

export default SearchForm