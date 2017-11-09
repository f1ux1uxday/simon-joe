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
      turnCount: 0,
    }
    this.start = this.start.bind(this)
    this.nextTurn = this.nextTurn.bind(this)
    this.switchActive = this.switchActive.bind(this)
    this.setCpuSequence = this.setCpuSequence.bind(this)
    this.setPlyrSequence = this.setPlyrSequence.bind(this)
  }

  start() {
    this.setState({
      gameOn: 'yes',
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

  setPlyrSequence() {
    this.setState({
      plyrSequence: this.state.plyrSequence,
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
          turnCount={this.state.turnCount}
          nextTurn={this.nextTurn}
          switchActive={this.switchActive}
          setPlyrSequence={this.setPlyrSequence}
        />
        <Options
          cpuSequence={this.state.cpuSequence}
          active={this.state.active}
          gameOn={this.state.gameOn}
          start={this.start}
          switchActive={this.switchActive}
          setCpuSequence={this.setCpuSequence}
        />
      </div>
    )
  }
}

export default App
