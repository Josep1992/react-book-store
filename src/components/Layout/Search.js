import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <form className="form" onSubmit={this.props.onSearch}>
        <input
          type="text"
          name="book"
          className="form--search"
          autoFocus
          placeholder="Search for a book"
          onChange={(e) => this.props.onHandleQuery(e.target.value)}
        />
        <button className="button form--button">Search</button>
      </form>
    )
  }
}

export default Search
