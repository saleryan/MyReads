import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import {Search} from './Search';
import {DashBoard} from './Dashboard';
import { Route, Switch } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  
  }

  render() {
    return (
      <div className="app">
       <Switch>
       <Route exact path='/'>
           <DashBoard/>
  	 	</Route>
        <Route path='/search'>
           <Search />
        </Route>
       </Switch>
      </div>
    )
  }
}

export default BooksApp
