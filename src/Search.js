import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom';
import { Book } from './Book.js';

export class Search extends React.Component {

  state = {
    value: '',
    prevValue: '',
    books: []
  }

  changeBookShelf = (book, shelf) => {
    this.props.changeBookShelf(book, shelf)
  }

  componentDidUpdate() {
    const value = this.state.value;
    const prevValue = this.state.prevValue;
    if ((value !== prevValue)) {
      if (value.length > 0) {
        BooksAPI.search(value)
          .then(data => {
            if (data.error) {
              data = [];
            }
            if (this.state.value) {
              this.setState((prevState) =>
                ({
                  value: prevState.value,
                  prevValue: prevState.value,
                  books: data || []
                })
              )
            }

          }
          );
      }
    }
  }

  onChange = (e) => {
    const value = e.target.value;
    this.setState((prevState) =>
      ({
        value: value,
        prevValue: prevState.value,
        books: []
      }))
  }

  render() {
    const books = this.props.books;
    const booksById = Object.assign({}, ...books.map(book => ({ [book.id]: book })));
    const bookSearchWithShelf = this.state.books.map(book => ({
      ...book,
      shelf: (booksById[book.id] || {}).shelf || ''
    })
    );
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>

          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input type="text" placeholder="Search by title or author" onChange={this.onChange} value={this.state.value} />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              bookSearchWithShelf.length > 0 && bookSearchWithShelf.map(book =>
                <Book key={book.id} book={book} shelf={book.shelf} shelves={this.props.shelves} changeBookShelf={this.changeBookShelf} />
              )}
            {(bookSearchWithShelf.length === 0 && this.state.value.length > 0) && (<div> no results found </div>)}
          </ol>
        </div>
      </div>
    )
  }
}