import React, { Component } from 'react'
import SearchBar from './SearchBar'
import HomeList from './HomeList'
import styles from './Home.module.css';

export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>
          <SearchBar/>
          <HomeList/>
      </div>
    )
  }
}