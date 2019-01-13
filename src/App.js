import React, { Component } from 'react'
//Packages
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//Components
import BookShelf from './components/Books/BookShelf'
import Book from './components/Books/Book'
import { ReactComponent as Loader } from './assets/Loader.svg'

//Layout
import Hero from './components/Layout/Hero'

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
      }) && console.error(error)
    }
  }

  handleQuery = (query) => {
    this.setState({
      query: query.trim().toLowerCase(),
    })
  }

  searchBookByTitle = async (e) => {
    e.preventDefault() // Prevent form submission

    if (this.state.query !== '') {
      this.setState({ loading: true })
      try {
        const bookRequest = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/search/${this.state.query}`)
        const bookResult = await bookRequest
        this.setState({
          searchResult: bookResult.data.books,
          loading: setTimeout(() => this.setState({ loading: false }), 1500),
        })
      } catch (error) {
        this.setState({
          error,
        })
      }
    } else alert('Cant search with input field empty')
  }

  render() {
    const { searchResult, shelf, loading, query } = this.state

    return (
      <div className="App">
        <Router>
          <>
            <Hero onHandleQuery={this.handleQuery} query={query.length} onSearch={this.searchBookByTitle} tagline={'programming books'} />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <>
                    {loading && <Loader className="loader--center" />}
                    {searchResult.length !== 0 && !loading && <BookShelf books={searchResult} tagline={'search results'} />}
                    <BookShelf books={shelf} tagline={'ebooks & new books'} />
                  </>
                )}
              />
              <Route path="/book/:isbn" component={Book} />
            </Switch>
          </>
        </Router>
      </div>
    )
  }
}

export default App
