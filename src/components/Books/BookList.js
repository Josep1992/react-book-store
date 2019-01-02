import React from 'react'
import { Link } from 'react-router-dom'

const BookList = ({ info }) => (
  <div className="book">
    {info.image && (
      <img className="book--image" src={info.image} alt={info.title} />
    )}
    <h5 className="book--title">{info.title}</h5>

    <br />
    <Link
      to={{ pathname: `/book/${info.isbn13}`, state: { isbn: info.isbn13 } }}
      className="button book--button-light">
      get it now
    </Link>
  </div>
)

export default BookList
