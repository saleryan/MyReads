import React ,  {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Book} from './Book.js';

export class BookShelf extends Component {

 render() {
  const {shelf, books} = this.props;
   return ( <div className="bookshelf">
                  <h2 className="bookshelf-title" style={{'textTransform': 'capitalize'}}>{
						shelf.replace(/([a-z](?=[A-Z]))/g, '$1 ')}
  				  </h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
{
                     	books.map(book => <Book key={book.id} data={book} />

                    )}
                     
                    </ol>
                  </div>
                </div>)
 }
}