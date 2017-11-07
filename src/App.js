import React, { Component } from 'react'
import 'normalize.css'

import Header from './components/sj-header'
import Pads from './components/sj-pads'
import Options from './components/sj-options'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameOn: 'no',
    }
    this.start = this.start.bind(this)
  }

  start() {
    this.setState({
      gameOn: 'yes'
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Pads />
        <Options
          gameOn={this.state.gameOn}
          start={this.start}
        />
      </div>
    )
  }
}

export default App
