import React, { Component } from 'react'
import './App.css'
import { BookShelfChanger } from './BookShelfChanger.js';

export class Book extends Component {

  changeBookShelf = (shelf) => {
    this.props.changeBookShelf(this.props.book, shelf);
  }
  render() {
    const { book, shelves } = this.props;
    return (<li>
      <div className="book">
        <div className="book-top">
          {book.imageLinks && book.imageLinks.smallThumbnail && <div className="book-cover"
            style={{
              width: 128, height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }}></div>}
          <BookShelfChanger shelves={shelves} shelf={book.shelf} changeBookShelf={this.changeBookShelf} />
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors && book.authors.map(author => <div className="book-authors" key={author}>{author}</div>)}
      </div>
    </li>
    );
  }
}