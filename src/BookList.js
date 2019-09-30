import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link} from 'react-router-dom';
import {BookShelf} from './BookShelf.js'

export class BookList extends React.Component {
 state= {
   books: []
 }

componentDidMount() {
  BooksAPI.getAll()
	.then(data=>{
      this.setState({books: data}); 
    });
}

render() {
  const books = this.state.books;
  const shelves = Array.from(new Set(this.state.books.map(c => c.shelf)));
  return (
          <div className="list-books">    
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
  			  { shelves.map(shelf => (
                <BookShelf key={shelf} 
						   shelf={shelf} 
						   books={ books.filter(book=>book.shelf === shelf)} />
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