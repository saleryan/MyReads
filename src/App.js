import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Search } from './Search';
import { BookList } from './BookList.js';
import { Route, Switch } from 'react-router-dom';
import { NoMatch } from './NoMatch';

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
    name: "Currently Reading",
    display: true
  },
  {
    id: "wantToRead",
    name: "Want To Read",
    display: true
  },
  {
    id: "read",
    name: "Read",
    display: true
  },
  {
    id: "",
    name: "None",
    display: false
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
          <Route component={NoMatch} />

        </Switch>
      </div>
    )
  }
}

export default BooksApp
