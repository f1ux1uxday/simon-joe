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
      plyrSequence: [],
      active: 'cpu',
      gameOn: 'no',
      strict: 'off',
      turnCount: 0,
    }
    this.start = this.start.bind(this)
    this.strictStart = this.strictStart.bind(this)
    this.nextTurn = this.nextTurn.bind(this)
    this.switchActive = this.switchActive.bind(this)
    this.setCpuSequence = this.setCpuSequence.bind(this)
    this.resetCpuSequence = this.resetCpuSequence.bind(this)
    this.resetPlyrSequence = this.resetPlyrSequence.bind(this)
  }

  start() {
    this.setState({
      gameOn: 'yes',
    })
  }

  strictStart() {
    this.setState({
      gameOn: 'yes',
      strict: 'on',
    })
  }

  nextTurn() {
    this.setState({
      turnCount: this.state.turnCount += 1,
    })
  }

  switchActive() {
    if (this.state.active === 'cpu') {
      this.setState({
        active: 'plyr',
      })
    }
    if (this.state.active === 'plyr') {
      this.setState({
        active: 'cpu',
      })
    }
  }

  setCpuSequence() {
    this.setState({
      cpuSequence: this.state.cpuSequence,
    })
  }

  resetCpuSequence() {
    this.setState({
      cpuSequence: [],
      turnCount: 0,
    })
  }

  resetPlyrSequence() {
    this.setState({
      plyrSequence: [],
      active: 'plyr',
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Pads
          cpuSequence={this.state.cpuSequence}
          plyrSequence={this.state.plyrSequence}
          active={this.state.active}
          gameOn={this.state.gameOn}
          strict={this.state.strict}
          turnCount={this.state.turnCount}
          nextTurn={this.nextTurn}
          switchActive={this.switchActive}
          setCpuSequence={this.setCpuSequence}
          resetPlyrSequence={this.resetPlyrSequence}
          resetCpuSequence={this.resetCpuSequence}
        />
        <Options
          cpuSequence={this.state.cpuSequence}
          active={this.state.active}
          gameOn={this.state.gameOn}
          start={this.start}
          strictStart={this.strictStart}
          switchActive={this.switchActive}
          setCpuSequence={this.setCpuSequence}
        />
      </div>
    )
  }
}

export default App
