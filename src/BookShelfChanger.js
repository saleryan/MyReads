import React, { useState } from 'react'
import './App.css'
import PropTypes from 'prop-types'

export function BookShelfChanger(props) {

  const [ value, setValue ] = useState(props.shelf)
  const onChange = (e) => {
    setValue(e.target.value);
    props.changeBookShelf(e.target.value);
  }

  const isDisabled = (shelf) => {
    return value === shelf;
  }

  const { shelves } = props;
  return (<div className="book-shelf-changer">
    <select value={value} onChange={onChange}>

      <option key="move" value="move" disabled>Move to...</option>
      {shelves.map(shelf =>
        <option key={shelf.id} value={shelf.id} disabled={isDisabled(shelf.id)} >{shelf.name}</option>
      )}
    </select>
  </div>);

}

BookShelfChanger.propTypes = {
  shelf: PropTypes.string.isRequired,
  shelves: PropTypes.array.isRequired
}