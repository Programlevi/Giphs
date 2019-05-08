import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home/Home'
import Favorites from './favorites/Favorites';
import Header from './Header'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Route path="/" exact component={Home} />
          <Route path="/favorites" component={Favorites} />
        </div>
      </BrowserRouter>
    )
  }
}

