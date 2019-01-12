import React, { Component } from 'react'

class Search extends Component {
  render() {
    return (
      <form className="form">
        <input
          type="text"
          name="book"
          className="form--search"
          autoFocus
          placeholder="Search for a book"
          onChange={(e) => this.props.onHandleQuery(e.target.value)}
        />
        <button className="button form--button" onSubmit>
          Search
        </button>
      </form>
    )
  }
}

export default Search
