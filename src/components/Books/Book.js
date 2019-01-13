import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Loader } from '../../assets/Loader.svg'
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
      const bookInfoRequest = axios.get(`https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/books/${isbn}`)
      const bookInfo = await bookInfoRequest

      this.setState({
        description: bookInfo.data,
        loading: setTimeout(() => this.setState({ loading: false }), 1200),
      })
    } catch (error) {
      console.error({ error })
    }
  }

  // createDownloadButtons = (pdf) => {
  //   Object.entries(pdf).forEach((key, value) => (
  //     <button className="button" data-link={value} onClick={(e) => this.downloadBookAsPdf(e.target.data)} value={key} />
  //   ))
  // }

  render() {
    const { authors, title, image, desc, isbn13, language, pages, price, rating, /*pdf,*/ publisher, year } = this.state.description

    return (
      <>
        {this.state.loading ? (
          <Loader className="loader--center" />
        ) : (
          <div className="_book--container">
            <Link to="/" className="button _book--button-light">
              Back to Home
            </Link>
            <br />
            <div className="_book--container_content">
              <div className="_book--header">
                {authors && <h1 className="_book--header_title">{`${title}`}</h1>}
                {authors && <h5 className="_book--header_authors">{authors}</h5>}
                <p className="_book--header_desc">{`Description: ${desc}`}</p>
                <h6 className="_book--header_isbn">{`Isbn: ${isbn13}`}</h6>
                <ul className="_book--details">
                  {language && <li className="_book--details--list--item">{`Language: ${language}`}</li>}
                  {pages && <li className="_book--details--list--item">{`Pages: ${pages}`}</li>}
                  {price && <li className="_book--details--list--item">{`Price: ${price}`}</li>}
                  {rating && <li className="_book--details--list--item">{`Rating: ${rating}`}</li>}
                  {year && <li className="_book--details--list--item">{`Release: ${year}`}</li>}
                  {publisher && <li className="_book--details--list--item">{`Publisher: ${publisher}`}</li>}
                </ul>
              </div>
              <div className="_book--body">{image && <img className="_book--body_image" src={image} alt={title} />}</div>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default Book
