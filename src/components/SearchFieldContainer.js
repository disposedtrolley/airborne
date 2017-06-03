import _ from 'lodash'
import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'

class SearchFieldContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      airportList:  [
      {
        title: "Melbourne (Tullamarine)",
        description: "MEL"
      },
      {
        title: "Melbourne (Avalon)",
        description: "AVV"
      },
      {
        title: "Shanghai (Pudong)",
        description: "PVG"
      },
      {
        title: "Singapore (Changi)",
        description: "SIN"
      }]
    }
  }

  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, result) => this.setState({ value: result.title })

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