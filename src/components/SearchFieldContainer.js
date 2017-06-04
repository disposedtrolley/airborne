import _ from 'lodash'
import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'
var axios = require('axios');

class SearchFieldContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      airportList: null,
      selectedAirport: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/airports')
      .then((result) => {
        const airports = result.data
        this.setState({ 
          airportList: airports
        })
      })
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, result) => {
    this.setState({
      value: result.title,
      selectedAirport: result.price
    })
  }

  handleSearchChange = (e, value) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(this.state.airportList, isMatch),
      })
    }, 500)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={this.handleSearchChange}
        results={results}
        value={value}
        placeholder={this.props.placeholder}
        fluid={this.props.fluid}
        size={this.props.size}
      />
    )
  }
}

export default SearchFieldContainer