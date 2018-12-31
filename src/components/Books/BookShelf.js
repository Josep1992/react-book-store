import React from 'react'
import BookList from './BookList'
import Header from '../Layout/Header'

const BookShelf = ({ books }) => (
  <>
    <Header tagline={'Ebooks & New Books'} />
    <div className="bookshelf">
      {books.map((book) => (
        <BookList info={book} key={book.isbn13} />
      ))}
    </div>
  </>
)

export default BookShelf
