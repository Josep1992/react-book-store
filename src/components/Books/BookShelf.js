import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        {this.props.books.map((book) => (
          <Book info={book} key={book.isbn13} />
        ))}
      </div>
    )
  }
}

export default BookShelf
