import React from 'react'
import './App.css'
import { Book } from './Book.js';
import PropTypes from 'prop-types';

export function BookShelf(props) {
  const changeBookShelf = (book, shelf) => {
    props.changeBookShelf(book, shelf);
  }

  const { shelf, books, shelves } = props;
  return (<div className="bookshelf">
    <h2 className="bookshelf-title">
      {shelf.name}
    </h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {
          books.map(book => <Book key={book.id} book={book} shelves={shelves} changeBookShelf={changeBookShelf} />
          )}

      </ol>
    </div>
  </div>)

}

BookShelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired
}