import React, { Component } from 'react'
import 'normalize.css'

import Header from './components/sj-header'
import Pads from './components/sj-pads'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Pads />
      </div>
    )
  }
}

export default App
