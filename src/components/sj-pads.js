import React, { Component } from 'react'
import styles from '../styles/sj-pads.css'

class Pads extends Component {

  clickHandle(e) {
    let targetpad = e.currentTarget.id.toString()
    document.getElementById(targetpad).classList.toggle('pad')
    console.log(targetpad)
  }

  padSelector() {
    if (this.props.gameOn === 'yes') {
      return (
        <div id={styles.padContainer}>
          <div className={styles.row}>
            <div
              className={styles.pad}
              id='0'
              onClick={this.clickHandle}
            ></div>
            <div
              className={styles.pad}
              id='1'
              onClick={this.clickHandle}
            ></div>
          </div>
          <div className={styles.row}>
            <div
              className={styles.pad}
              id='2'
              onClick={this.clickHandle}
            ></div>
            <div
              className={styles.pad}
              id='3'
              onClick={this.clickHandle}
            ></div>
          </div>
        </div>
      )
    }

    if (this.props.gameOn === 'no') {
      return (
        <div id={styles.padContainer}>
          <div className={styles.row}>
            <div className={styles.pad} id='pad1'></div>
            <div className={styles.pad} id='pad2'></div>
          </div>
          <div className={styles.row}>
            <div className={styles.pad} id='pad3'></div>
            <div className={styles.pad} id='pad4'></div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.padSelector()}
      </div>
    )
  }
}

export default Pads
