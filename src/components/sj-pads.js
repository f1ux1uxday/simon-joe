import React, { Component } from 'react'
import classNames from 'classnames'
import styles from '../styles/sj-pads.css'

let tone0 = new Audio(require('../assets/simonSounds0.ogg'))
let tone1 = new Audio(require('../assets/simonSounds1.ogg'))
let tone2 = new Audio(require('../assets/simonSounds2.ogg'))
let tone3 = new Audio(require('../assets/simonSounds3.ogg'))
let toneX = new Audio(require('../assets/simonSoundsErr.ogg'))

class Pads extends Component {

  clickHandle(e) {
    let cpuSequence = this.props.cpuSequence
    let plyrSequence = this.props.plyrSequence

    if (this.props.active === 'plyr' &&
      (plyrSequence.length - 1 < this.props.turnCount ||
      this.props.turnCount === 0)) {

      let targ = e.currentTarget.id
      let activate = () => {
        let targetPad = document.getElementById(targ).classList
        if (targ == 0) {
          targetPad.toggle(styles.plyr0)
        }
        if (targ == 1) {
          targetPad.toggle(styles.plyr1)
        }
        if (targ == 2) {
          targetPad.toggle(styles.plyr2)
        }
        if (targ == 3) {
          targetPad.toggle(styles.plyr3)
        }
      }

      // Move activate & sound methods to App, i.e.
      // let sound = (a) => {
      //  if (targ != a) {
      //       toneX.play()
      // }
      // }

      let sound = () => {
        if (targ != cpuSequence[plyrSequence.length]) {
          toneX.play()
        }
        if (targ == 0 && cpuSequence[plyrSequence.length] == 0) {
          tone0.play()
        }
        if (targ == 1 && cpuSequence[plyrSequence.length] == 1) {
          tone1.play()
        }
        if (targ == 2 && cpuSequence[plyrSequence.length] == 2) {
          tone2.play()
        }
        if (targ == 3 && cpuSequence[plyrSequence.length] == 3) {
          tone3.play()
        }
      }

      sound()
      activate()
      setTimeout(activate, 500)

      plyrSequence.push(targ)
      // Then check to see if plyrSequence matches cpuSequence
      for (let i = 0; i < plyrSequence.length; i++) {
        // If wrong in friendly mode...
        if (plyrSequence[i] != cpuSequence[i] &&
          this.props.strict === 'off') {
          this.props.showCpuSequence()
          // Play error sound, switch 'active' to 'cpu'
          // and iterate through cpuSequence again
        }
        // If wrong in harsh mode, turnCount momentarily exceeds length
        // of plyrSequence when turnCount resets
        if (plyrSequence[i] != cpuSequence[i] &&
          i !== this.props.turnCount &&
          this.props.strict === 'on') {
          this.props.flushCpuSequence()
          this.props.showCpuSequence()
          // Reset cpuSequence and iterate through
        }

        if (i === this.props.turnCount) {
          if (plyrSequence[i] == cpuSequence[i] &&
            this.props.turnCount < 19) {
            this.props.nextTurn()
            this.props.showCpuSequence()
            this.props.switchActive()
          }

          if (plyrSequence[i] == cpuSequence[i] &&
            this.props.turnCount === 19) {
            this.props.winGame()
          }

          if (plyrSequence[i] != cpuSequence[i] &&
            this.props.strict === 'on') {
            this.props.flushCpuSequence()
            this.props.showCpuSequence()
          }
        }
      }
    }
  }

  padSelector() {
    if (this.props.gameOn === 'yes') {
      return (
        <div id={styles.padContainer}>
          <div className={styles.row}>
            <div
              className={classNames(styles.pad, styles.zero)}
              id='0'
              onClick={this.clickHandle.bind(this)}
            ></div>
            <div
              className={classNames(styles.pad, styles.one)}
              id='1'
              onClick={this.clickHandle.bind(this)}
            ></div>
          </div>
          <div className={styles.row}>
            <div
              className={classNames(styles.pad, styles.two)}
              id='2'
              onClick={this.clickHandle.bind(this)}
            ></div>
            <div
              className={classNames(styles.pad, styles.three)}
              id='3'
              onClick={this.clickHandle.bind(this)}
            ></div>
          </div>
        </div>
      )
    }

    if (this.props.gameOn === 'no') {
      return (
        <div id={styles.padContainer}>
          <div className={styles.row}>
            <div className={classNames(styles.pad, styles.zero)} id='0'></div>
            <div className={classNames(styles.pad, styles.one)} id='1'></div>
          </div>
          <div className={styles.row}>
            <div className={classNames(styles.pad, styles.two)} id='2'></div>
            <div className={classNames(styles.pad, styles.three)} id='3'></div>
          </div>
        </div>
      )
    }

    if (this.props.gameOn === 'win') {
      return (
        <div
          id={styles.imgContainer}
          onClick={this.props.getInitialState}
        >
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
