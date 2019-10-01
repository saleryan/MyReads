import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

export class BookShelfChanger extends Component {
  state = {
    value: this.props.shelf
  }

  onChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.changeBookShelf(e.target.value);
  }
  isDisabled = (shelf) => {
    return this.state.value === shelf;
  }
  render() {
    const { shelves } = this.props;
    return (<div className="book-shelf-changer">
      <select value={this.state.value} onChange={this.onChange}>

        <option key="move" value="move" disabled>Move to...</option>
        {shelves.map(shelf =>
          <option key={shelf.id} value={shelf.id} disabled={this.isDisabled(shelf.id)} >{shelf.name}</option>
        )}
      </select>
    </div>);
  }
}