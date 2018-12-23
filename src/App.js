import React, { Component } from 'react'
import './App.scss'
//Packages
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//Components
import BookShelf from './components/Books/BookShelf'
import Book from './components/Books/Book'

class App extends Component {
  state = {
    shelf: [],
  }

  componentDidMount = async () => {
    const emptyBookShelf = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/new',
    )
    const fullBookShelf = await emptyBookShelf

    this.setState({
      shelf: fullBookShelf.data.books,
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <BookShelf books={this.state.shelf} />}
            />
            <Route path="/book/:isbn" component={Book} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
