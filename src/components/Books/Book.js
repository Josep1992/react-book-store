import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Book extends Component {
  state = {
    description: {},
  }

  componentDidMount = async () => {
    try {
      const isbnNumber = this.props.location.state.isbn
      const bookInfoRequest = axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/books/${isbnNumber}`,
      )
      const bookInfo = await bookInfoRequest

      this.setState({
        description: bookInfo.data,
      })
    } catch (error) {
      console.error({ error })
    }
  }

  downloadBookAsPdf = (book) => {
    //
  }

  render() {
    const {
      authors,
      title,
      subtitle,
      image,
      desc,
      isbn13,
      language,
      pages,
      price,
      rating,
      pdf,
      publisher,
      year,
    } = this.state.description

    return (
      <>
        <br />
        <Link to="/" className="button">
          Back to Home
        </Link>

        <div className="book--container">
          <div className="book--container--title">
            {authors && (
              <h1 className="book--title">{`Authors: ${authors}`}</h1>
            )}
            <h2 className="book--subtitle">{`Subtitle: ${subtitle}`}</h2>
            <h3 className="book--isbn">{`Isbn: ${isbn13}`}</h3>
          </div>
          <div className="book--body">
            {image && <img src={image} alt={title} />}
            <div className="book--details">
              <ul className="book--details--list">
                {language && (
                  <li className="book--details--list--item">{`Language: ${language}`}</li>
                )}
                <li className="book--details--list--item">{`Pages: ${pages}`}</li>
                <li className="book--details--list--item">{`Price: ${price}`}</li>
                <li className="book--details--list--item">{`Rating: ${rating}`}</li>
                <li className="book--details--list--item">{`Release: ${year}`}</li>
                <li className="book--details--list--item">{`Publisher: ${publisher}`}</li>
              </ul>
            </div>
            {pdf &&
              Object.entries(pdf).forEach((key, value) => (
                <div className="book--download--buttons">
                  <button
                    className="button"
                    data-link={value}
                    onClick={(e) => this.downloadBookAsPdf(e.target.data)}>
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
