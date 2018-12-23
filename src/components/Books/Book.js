import React from 'react'

const Book = ({ info }) => {
  return (
    <div className="book">
      {info.image && <img src={info.image} alt={info.title} />}
    </div>
  )
}

export default Book
