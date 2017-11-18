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

    let activate = () => {
      let index = this.props.cpuSequence[0]
      document.getElementById(index).classList.toggle(styles.cpuSelected)
    }
    activate()
    setTimeout(activate, 500)

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
