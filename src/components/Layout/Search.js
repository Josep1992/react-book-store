import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <input
        type="text"
        name="book"
        placeholder="Search for a book"
        onChange={(e) => this.props.onHandleQuery(e.target.value)}
      />
    )
  }
}

export default Search
