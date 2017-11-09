import React, { Component } from 'react'
import styles from '../styles/sj-options.css'

class Options extends Component {
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
    console.log(this.props.active)
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
