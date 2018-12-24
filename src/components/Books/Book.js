import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Book extends Component {
  state = {
    description: {},
  }

  componentDidMount = async () => {
    const isbnNumber = this.props.location.state.isbn
    const bookInfoRequest = axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/books/${isbnNumber}`,
    )
    const bookInfo = await bookInfoRequest

    this.setState({
      description: bookInfo.data,
    })
  }

  downloadBookAsPdf = (book) => {
    //
  }

  render() {
    const { description } = this.state
    return (
      <>
        <Link to="/" className="button">
          Back to Home
        </Link>
        <div className="book--container">
          <div className="book--container--title">
            <h1 className="book--title">{`Authors: ${description.authors}`}</h1>
            <h2 className="book--subtitle">{`Subtitle: ${
              description.desc
            }`}</h2>
            <h3 className="book--isbn">{`Isbn: ${description.isbn13}`}</h3>
          </div>
          <div className="book--body">
            {description.image && (
              <img src={description.image} alt={description.title} />
            )}
            <div className="book--details">
              <ul className="book--details--list">
                <li className="book--details--list--item">{`Language: ${
                  description.language
                }`}</li>
                <li className="book--details--list--item">{`Pages: ${
                  description.pages
                }`}</li>
                <li className="book--details--list--item">{`Price: ${
                  description.price
                }`}</li>
                <li className="book--details--list--item">{`Rating:${
                  description.rating
                }`}</li>
                <li className="book--details--list--item">{`Release:${
                  description.year
                }`}</li>
                <li className="book--details--list--item">{`Publisher:${
                  description.publisher
                }`}</li>
              </ul>
            </div>
            {Object.entries(description.pdf).forEach((key, value) => (
              <div className="book--download--buttons">
                <button className="button" data-link={value}>
                  {key}
                </button>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default Book
