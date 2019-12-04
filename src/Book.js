import React from 'react'
import './App.css'
import { BookShelfChanger } from './BookShelfChanger.js';
import PropTypes from 'prop-types'

export function Book(props) {

  const changeBookShelf = (shelf) => {
    props.changeBookShelf(props.book, shelf);
  }

  const { book, shelves } = props;
  return (<li>
    <div className="book">
      <div className="book-top">
        {book.imageLinks && book.imageLinks.smallThumbnail && <div className="book-cover"
          style={{
            width: 128, height: 193,
            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
          }}></div>}
        <BookShelfChanger shelves={shelves} shelf={book.shelf} changeBookShelf={changeBookShelf} />
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors && book.authors.map(author => <div className="book-authors" key={author}>{author}</div>)}
    </div>
  </li>
  );

}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  shelves: PropTypes.array.isRequired
}