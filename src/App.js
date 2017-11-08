import React, { Component } from 'react'
import 'normalize.css'

import Header from './components/sj-header'
import Pads from './components/sj-pads'
import Options from './components/sj-options'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cpuSequence: [],
      youSequence: [],
      active: 'cpu',
      gameOn: 'no',
      turnCount: 0,
    }
    this.start = this.start.bind(this)
  }

  start() {
    this.setState({
      gameOn: 'yes',
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Pads
          gameOn={this.state.gameOn}
        />
        <Options
          gameOn={this.state.gameOn}
          start={this.start}
        />
      </div>
    )
  }
}

export default App
