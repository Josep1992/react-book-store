import React, { Component } from 'react'
//Packages
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//Components
import BookShelf from './components/Books/BookShelf'
import Book from './components/Books/Book'

//Layout
import Hero from './components/Layout/Hero'
// import Search from './components/Layout/Search'

class App extends Component {
  state = {
    shelf: [],
    searchResult: [],
    query: '',
    loading: false,
    error: '',
  }

  componentDidMount = async () => {
    try {
      const emptyBookShelf = await axios.get('https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/new')
      const fullBookShelf = await emptyBookShelf

      this.setState({
        shelf: fullBookShelf.data.books,
      })
    } catch (error) {
      this.setState({
        error,
      })
      console.error(error)
    }
  }

  handleQuery = (query) => {
    this.setState({
      query: query.trim().toLowerCase(),
    })
  }

  searchBookByTitle = async (e) => {
    e.preventDefault()
    try {
      const bookRequest = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/search/${this.state.query}`)
      const bookResult = await bookRequest
      this.setState({
        searchResult: bookResult.data,
      })
    } catch (error) {
      this.setState({
        error,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <>
            <Hero
              onHandleQuery={this.handleQuery}
              onSearch={this.searchBookByTitle}
              tagline={'programming books'}
              paragraph={'Search books by title, author, ISBN or keywords'}
            />
            <Switch>
              <Route exact path="/" render={() => <BookShelf books={this.state.shelf} />} />
              <Route path="/book/:isbn" component={Book} />
            </Switch>
          </>
        </Router>
      </div>
    )
  }
}

export default App
