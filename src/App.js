import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Search } from './Search';
import { BookList } from './BookList.js';
import { Route, Switch } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(data => this.getAll());
  }

  getAll = () => {
    BooksAPI.getAll()
      .then(data => {
        this.setState({ books: data });
      });
  }
  componentDidMount() {
    this.getAll();
  }

  shelves = [{
    id: "currentlyReading",
    name: "Currently Reading"
  },
  {
    id: "wantToRead",
    name: "Want To Read"
  },
  {
    id: "read",
    name: "Read"
  },
  {
    id: "none",
    name: "None"
  }];

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <BookList shelves={this.shelves} books={this.state.books} changeBookShelf={this.changeBookShelf} />
          </Route>
          <Route path='/search'>
            <Search shelves={this.shelves} changeBookShelf={this.changeBookShelf} books={this.state.books} />
          </Route>

        </Switch>
      </div>
    )
  }
}

export default BooksApp
