import React from 'react'
import BookList from './BookList'

const BookShelf = ({ books }) => (
  <div className="bookshelf">
    <h2 className="bookshelf--section--title">New Books</h2>
    {books.map((book) => (
      <BookList info={book} key={book.isbn13} />
    ))}
  </div>
)

export default BookShelf
