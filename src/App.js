import React, { useState, useEffect } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Search } from './Search';
import { BookList } from './BookList.js';
import { Route, Switch } from 'react-router-dom';
import { NoMatch } from './NoMatch';

function BooksApp() {
  const [books, setBooks] = useState([]);

  const changeBookShelf = async(book, shelf) => {
    await BooksAPI.update(book, shelf);
    await getAll();
  }

  const getAll = async () => {
    const data = await BooksAPI.getAll();
    setBooks(data);
  }

  useEffect(() => {
    getAll();
  }, [])

  const shelves = [{
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
  return (
    <div className="app">
      <Switch>
        <Route exact path='/'>
          <BookList shelves={shelves} books={books} changeBookShelf={changeBookShelf} />
        </Route>
        <Route path='/search'>
          <Search shelves={shelves} changeBookShelf={changeBookShelf} books={books} />
        </Route>
        <Route component={NoMatch} />

      </Switch>
    </div>
  )

}

export default BooksApp
