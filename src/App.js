import React, { Component } from 'react'
import 'normalize.css'

// import styles from './App.css'
import Header from './components/sj-header'
import Pads from './components/sj-pads'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1> up and running... </h1>
        <Pads />
      </div>
    )
  }
}

export default App
