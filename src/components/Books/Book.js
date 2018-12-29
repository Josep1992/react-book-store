import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Loader } from '../../assets/Gear.svg'
import axios from 'axios'

class Book extends Component {
  state = {
    description: {},
    loading: false,
  }

  componentDidMount = async () => {
    const { isbn } = this.props.location.state

    this.setState({
      loading: true,
    })

    try {
      const bookInfoRequest = axios.get(
        `https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/books/${isbn}`,
      )
      const bookInfo = await bookInfoRequest

      this.setState({
        description: bookInfo.data,
        loading: setTimeout(() => this.setState({ loading: false }), 1000),
      })
    } catch (error) {
      console.error({ error })
    }
  }

  downloadBookAsPdf = (book) => {
    console.log('clicked')
  }

  createDownloadButtons = (pdf) => {
    Object.entries(pdf).forEach((key, value) => (
      <button
        className="button"
        data-link={value}
        onClick={(e) => this.downloadBookAsPdf(e.target.data)}
        value={key}
      />
    ))
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
        {this.state.loading ? (
          <Loader />
        ) : (
          <div className="book--container">
            <div className="book--container--title">
              {authors && (
                <h1 className="book--title">{`Authors: ${authors}`}</h1>
              )}
              <h2 className="book--subtitle">{`Subtitle: ${subtitle}`}</h2>
              <h3 className="book--desc">{`Description: ${desc}`}</h3>
              <h3 className="book--isbn">{`Isbn: ${isbn13}`}</h3>
            </div>
            <div className="book--body">
              {image && <img src={image} alt={title} />}
              <div className="book--details">
                <ul className="book--details--list">
                  {language && (
                    <li className="book--details--list--item">{`Language: ${language}`}</li>
                  )}
                  {pages && (
                    <li className="book--details--list--item">{`Pages: ${pages}`}</li>
                  )}
                  {price && (
                    <li className="book--details--list--item">{`Price: ${price}`}</li>
                  )}
                  {rating && (
                    <li className="book--details--list--item">{`Rating: ${rating}`}</li>
                  )}
                  {year && (
                    <li className="book--details--list--item">{`Release: ${year}`}</li>
                  )}
                  {publisher && (
                    <li className="book--details--list--item">{`Publisher: ${publisher}`}</li>
                  )}
                </ul>
              </div>
              {pdf && this.createDownloadButtons(pdf)}
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Book
