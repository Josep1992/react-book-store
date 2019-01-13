import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const BookList = ({ info }) => (
  <div className="book">
    {info.image && <img className="book--image" src={info.image} alt={info.title} />}
    <h5 className="book--title">{info.title}</h5>
    <Link to={{ pathname: `/book/${info.isbn13}`, state: { isbn: info.isbn13 } }} className="button book--button-light">
      get it now
    </Link>
  </div>
)
BookList.propTypes = {
  info: PropTypes.object.isRequired,
}

export default BookList
