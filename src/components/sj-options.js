import React, { Component } from 'react'
import styles from '../styles/sj-options.css'

class Options extends Component {

  resetGame() {
    this.props.getInitialState()
  }

  startGame() {
    for (let i = 0; i < 20; i++) {
      let randomNumber = Math.floor(Math.random() * 4)
      this.props.cpuSequence.push(randomNumber)
    }

    this.props.start()
    this.props.setCpuSequence()
    console.log(this.props.cpuSequence)

    let cpuSequence = this.props.cpuSequence
    let toggle = () => {
      if (cpuSequence[0] == 0) {
        document.getElementById(cpuSequence[0])
          .classList.toggle(styles.cpu0)
      }
      if (cpuSequence[0] == 1) {
        document.getElementById(cpuSequence[0])
          .classList.toggle(styles.cpu1)
      }
      if (cpuSequence[0] == 2) {
        document.getElementById(cpuSequence[0])
          .classList.toggle(styles.cpu2)
      }
      if (cpuSequence[0] == 3) {
        document.getElementById(cpuSequence[0])
          .classList.toggle(styles.cpu3)
      }
    }

    let sound = () => {
      if (cpuSequence[0] == 0) {
        let tone0 = new Audio(require('../assets/simonSounds0.mp3'))
        tone0.crossOrigin = 'anonymous'
        tone0.play()
      }
      if (cpuSequence[0] == 1) {
        let tone1 = new Audio(require('../assets/simonSounds1.mp3'))
        tone1.play()
      }
      if (cpuSequence[0] == 2) {
        let tone2 = new Audio(require('../assets/simonSounds2.mp3'))
        tone2.play()
      }
      if (cpuSequence[0] == 3) {
        let tone3 = new Audio(require('../assets/simonSounds3.mp3'))
        tone3.play()
      }
    }
    toggle()
    sound()
    setTimeout(toggle, 600)

    this.props.switchActive()
    // Console.log(this.props.active)
  }

  startGameStrict() {
    for (let i = 0; i < 20; i++) {
      let randomNumber = Math.floor(Math.random() * 4)
      this.props.cpuSequence.push(randomNumber)
    }

    this.props.strictStart()
    this.props.setCpuSequence()

    let activate = () => {
      let index = this.props.cpuSequence[0]
      document.getElementById(index).classList.toggle(styles.cpuSelected)
    }
    activate()
    setTimeout(activate, 500)

    this.props.switchActive()
  }

  optionsStateCheck() {
    if (this.props.gameOn === 'no') {
      return (
        <div id={styles.optionContainer}>
          <button
            className={styles.optionButton}
            onClick={this.startGame.bind(this)}
          >
            normal
          </button>
          <button
            className={styles.optionButton}
            onClick={this.startGameStrict.bind(this)}
          >
            strict
          </button>
        </div>
      )
    }

    if (this.props.gameOn === 'yes') {
      return (
        <div id={styles.optionContainer}>
          <div className={styles.turnCounter}>
            {this.props.turnCount}
          </div>
          <button
            className={styles.optionButton}
            onClick={this.resetGame.bind(this)}
          >
            reset
          </button>
        </div>
      )
    }

    if (this.props.gameOn === 'win') {
      return (
        <div id={styles.optionContainer}>
          <div className={styles.turnCounter}>
            <h4> You have earned affection from Simon Joe </h4>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.optionsStateCheck()}
      </div>
    )
  }
}

export default Options
