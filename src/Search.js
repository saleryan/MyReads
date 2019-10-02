import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom';
import { Book } from './Book.js';

export class Search extends React.Component {

  state = {
    value: '',
    books: []
  }

  changeBookShelf = (book, shelf) => {
    this.props.changeBookShelf(book, shelf)
  }


  componentDidUpdate() {

    if ((this.state.value !== this.state.prevValue)) {
      if (this.state.value) {
        BooksAPI.search(this.state.value, 5)
          .then(data => {
            if (data.error) {
              data = [];
            }
            this.setState((prevState) =>
              ({
                value: prevState.value,
                prevValue: prevState.value,
                books: data || []
              })
            )

          }
          );
      } else {
        this.setState((prevState) =>
          ({
            value: prevState.value,
            prevValue: prevState.value,
            books: []
          })
        )
      }
    }
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
  }


  render() {
    const bookIds = this.props.books.map(book => book.id);
    const booksWithNoShelf = this.state.books.filter(book => bookIds.indexOf(book.id) < 0);

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
              booksWithNoShelf.length > 0 && booksWithNoShelf.map(book =>
                <Book key={book.id} book={book} shelves={this.props.shelves} changeBookShelf={this.changeBookShelf} />
              )}
            {(booksWithNoShelf.length === 0 && this.state.value.length > 0) && (<div> no results found </div>)}
          </ol>
        </div>
      </div>
    )
  }
}