import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom';
import { BookShelf } from './BookShelf.js'

export class BookList extends React.Component {
  state = {
    books: []
  }

  shelves = [{ id: "currentlyReading", name: "Currently Reading" },
  { id: "wantToRead", name: "Want To Read" },
  { id: "read", name: "Read" }];

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

  render() {
    const books = this.state.books;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.shelves.map(shelf => (
              <BookShelf key={shelf.id}
                shelf={shelf}
                shelves={this.shelves}
                changeBookShelf={this.changeBookShelf}
                books={books.filter(book => book.shelf === shelf.id)} />
            ))
            }

          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}