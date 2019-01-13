import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
  render() {
    return (
      <form className="form" onSubmit={this.props.onSearch}>
        <input
          type="text"
          name="book"
          className="form--search"
          autoFocus
          placeholder="Search by title, author, ISBN or keywords"
          onChange={(e) => this.props.onHandleQuery(e.target.value)}
        />
        {this.props.query !== 0 && <button className="button form--button">Search</button>}
      </form>
    )
  }
}

Search.propTypes = {
  onSearch: PropTypes.func,
  onHandleQuery: PropTypes.func,
  query: PropTypes.number.isRequired,
}

export default Search
