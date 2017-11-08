import React, { Component } from 'react'
import styles from '../styles/sj-options.css'

class Options extends Component {
  startGame() {
    for (let i = 0; i < 20; i++) {
      let randomNumber = Math.floor(Math.random() * 4)
      this.props.cpuSequence.push(randomNumber)
    }  
    this.props.start()
    console.log(this.props.gameOn)
    this.props.setCpuSequence()
    console.log(this.props.cpuSequence)
    // console.log(this.props.cpuSequence[0])
    let index = this.props.cpuSequence[0].toString()
    console.log(index)
    // document.getElementById(index).classList.toggle(styles.selected)
    // this.refs[this.props.cpuSequence[0]].classList.toggle(styles.selected)
    console.log(this.refs.index)
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
