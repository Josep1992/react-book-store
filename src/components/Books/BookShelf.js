import React from 'react'
import BookList from './BookList'
import Header from '../Layout/Header'
import PropTypes from 'prop-types'

const BookShelf = ({ books, tagline }) => (
  <>
    <Header tagline={tagline} />
    <div className="bookshelf">
      {books.map((book) => (
        <BookList info={book} key={book.isbn13} />
      ))}
    </div>
  </>
)

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  tagline: PropTypes.string,
}
export default BookShelf
