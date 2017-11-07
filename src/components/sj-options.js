import React, { Component } from 'react'
import styles from '../styles/sj-options.css'

class Options extends Component {
  handleClick() {
    this.props.start()
    console.log(this.props.gameOn)
  }

  render() {
    return (
      <div id={styles.optionContainer}>
        <button
          className={styles.optionButton}
          onClick={this.handleClick.bind(this)}
        >
          start
        </button>
      </div>
    )
  }
}

export default Options
