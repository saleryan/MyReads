import React ,  {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {BookShelfChanger} from './BookShelfChanger.js';

export class Book extends Component {
 render() {
   const book = this.props.data;
   return (  <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" 
                            style={{ width: 128, height: 193, 
                                   backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                           <BookShelfChanger />
                          </div>
                          <div className="book-title">{book.title}</div>
							{book.authors.map(author => <div className="book-authors">{author}</div>)}
                        </div>
                      </li>
);
 }
}