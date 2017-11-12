import React, { Component } from 'react'
import styles from '../styles/sj-options.css'

class Options extends Component {
  // getCpuSequence() {
    // for (let i = 0; i < 20; i++) {
      // let randomNumber = Math.floor(Math.round() * 4)
      // this.props.cpuSequence.push(randomNumber)
    // }
  // }

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
      document.getElementById(index).classList.toggle(styles.selected)
    }
    activate()
    setTimeout(activate, 500)
    this.props.switchActive()
    // Console.log(this.props.active)
  }

  startGameStrict() {
    // this.getCpuSequence()
    for (let i = 0; i < 20; i++) {
      let randomNumber = Math.floor(Math.random() * 4)
      this.props.cpuSequence.push(randomNumber)
    }

    this.props.strictStart()
    this.props.setCpuSequence()
    let activate = () => {
      let index = this.props.cpuSequence[0]
      document.getElementById(index).classList.toggle(styles.selected)
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
            start
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
