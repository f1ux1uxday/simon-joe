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
      active: 'none',
      gameOn: 'no',
      turnCount: 0,
    }
    this.start = this.start.bind(this)
    this.setCpuSequence = this.setCpuSequence.bind(this)
  }

  start() {
    this.setState({
      gameOn: 'yes',
    })
  }

  setCpuSequence(num) {
    this.setState({
      cpuSequence: this.state.cpuSequence
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
          cpuSequence={this.state.cpuSequence}
          gameOn={this.state.gameOn}
          start={this.start}
          setCpuSequence={this.setCpuSequence}
        />
      </div>
    )
  }
}

export default App
