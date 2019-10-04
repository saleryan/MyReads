import React, { Component } from 'react'
import './App.css'
import { Book } from './Book.js';
import PropTypes from 'prop-types';

export class BookShelf extends Component {
  changeBookShelf = (book, shelf) => {
    this.props.changeBookShelf(book, shelf);
  }

  render() {
    const { shelf, books, shelves } = this.props;
    return (<div className="bookshelf">
      <h2 className="bookshelf-title">
        {shelf.name}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.map(book => <Book key={book.id} book={book} shelves={shelves} changeBookShelf={this.changeBookShelf} />

            )}

        </ol>
      </div>
    </div>)
  }
}

BookShelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired,
  books: PropTypes.array.isRequired
}