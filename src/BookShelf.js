import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Book } from './Book.js';

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