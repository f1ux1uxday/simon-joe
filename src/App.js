import React, { Component } from 'react'
import 'normalize.css'

import './styles/App.css'
import styles from './styles/sj-pads.css'
import Intro from './components/sj-intro'
import Header from './components/sj-header'
import Pads from './components/sj-pads'
import Options from './components/sj-options'

let tone0 = new Audio(require('./assets/simonSounds0.ogg'))
let tone1 = new Audio(require('./assets/simonSounds1.ogg'))
let tone2 = new Audio(require('./assets/simonSounds2.ogg'))
let tone3 = new Audio(require('./assets/simonSounds3.ogg'))
// let toneX = new Audio(require('./assets/simonSoundsErr.ogg'))

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cpuSequence: [],
      plyrSequence: [],
      active: 'cpu',
      gameOn: 'intro',
      strict: 'off',
      turnCount: 0,
    }
    this.enter = this.enter.bind(this)
    this.start = this.start.bind(this)
    this.strictStart = this.strictStart.bind(this)
    this.nextTurn = this.nextTurn.bind(this)
    this.switchActive = this.switchActive.bind(this)
    this.setCpuSequence = this.setCpuSequence.bind(this)
    this.showCpuSequence = this.showCpuSequence.bind(this)
    this.resetCpuSequence = this.resetCpuSequence.bind(this)
    this.resetPlyrSequence = this.resetPlyrSequence.bind(this)
    this.getInitialState = this.getInitialState.bind(this)
    this.winGame = this.winGame.bind(this)
  }

  enter() {
    this.setState({
      gameOn: 'no',
    })
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

  showCpuSequence() {
    setTimeout(this.props.switchActive, 250)

    const runCpuSequence = value => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(value === this.state.turnCount ? 'done' : 'no')
        }, 500)
      })
    }

    const loop = value =>
      runCpuSequence(value).then(result => {
        let cpuSequence = this.state.cpuSequence
        let activatePad = document.getElementById(cpuSequence[value]).classList

        let toggle = () => {
          if (cpuSequence[value] == 0) {
            activatePad.toggle(styles.cpu0)
          }
          if (cpuSequence[value] == 1) {
            activatePad.toggle(styles.cpu1)
          }
          if (cpuSequence[value] == 2) {
            activatePad.toggle(styles.cpu2)
          }
          if (cpuSequence[value] == 3) {
            activatePad.toggle(styles.cpu3)
          }
        }

        let sound = () => {
          if (cpuSequence[value] == 0) {
            tone0.play()
          }
          if (cpuSequence[value] == 1) {
            tone1.play()
          }
          if (cpuSequence[value] == 2) {
            tone2.play()
          }
          if (cpuSequence[value] == 3) {
            tone3.play()
          }
        }

        if (result === 'done') {
          // Console.log('done')
          setTimeout(toggle, 500)
          sound()
          setTimeout(toggle, 200)
        } else {
          // Console.log(this.props.turnCount + ': ' + value)
          setTimeout(toggle, 500)
          sound()
          setTimeout(toggle, 200)
          return loop(value + 1)
        }
      })

    loop(0).then(() => {
      console.log('loop complete')
      this.resetPlyrSequence()
    })
  }

  resetCpuSequence() {
    this.setState({
      cpuSequence: [],
      plyrSequence: [],
      turnCount: 0,
    })
  }

  resetPlyrSequence() {
    this.setState({
      plyrSequence: [],
      active: 'plyr',
    })
  }

  getInitialState() {
    this.setState({
      cpuSequence: [],
      plyrSequence: [],
      active: 'cpu',
      gameOn: 'no',
      strict: 'off',
      turnCount: 0,
    })
  }

  winGame() {
    this.setState({
      gameOn: 'win',
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Intro
          gameOn={this.state.gameOn}
          enter={this.enter}
        />
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
          showCpuSequence={this.showCpuSequence}
          resetPlyrSequence={this.resetPlyrSequence}
          resetCpuSequence={this.resetCpuSequence}
          getInitialState={this.getInitialState}
          winGame={this.winGame}
        />
        <Options
          cpuSequence={this.state.cpuSequence}
          active={this.state.active}
          gameOn={this.state.gameOn}
          turnCount={(this.state.turnCount + 1)}
          start={this.start}
          strictStart={this.strictStart}
          switchActive={this.switchActive}
          setCpuSequence={this.setCpuSequence}
          showCpuSequence={this.showCpuSequence}
          getInitialState={this.getInitialState}
        />
      </div>
    )
  }
}

export default App
