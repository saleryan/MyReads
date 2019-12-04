import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import { BookShelf } from './BookShelf.js'
import PropTypes from 'prop-types'

export function BookList(props) {
  const changeBookShelf = (book, shelf) => {
    props.changeBookShelf(book, shelf);
  }

  const { books } = props;
  const shelves = props.shelves.filter(shelf => shelf.display);
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
              changeBookShelf={changeBookShelf}
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

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  shelves: PropTypes.array.isRequired
}