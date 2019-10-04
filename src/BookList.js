import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import { BookShelf } from './BookShelf.js'
import PropTypes from 'prop-types'

export class BookList extends React.Component {
  changeBookShelf = (book, shelf) => {
    this.props.changeBookShelf(book, shelf);
  }

  render() {
    const books = this.props.books;
    const shelves = this.props.shelves.filter(shelf => shelf.display);
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => (
              <BookShelf key={shelf.id}
                shelf={shelf}
                shelves={shelves}
                changeBookShelf={this.changeBookShelf}
                books={books.filter(book => book.shelf === shelf.id) || []} />
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

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired
}