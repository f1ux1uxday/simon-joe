import React, { Component } from 'react'
import classNames from 'classnames'
import styles from '../styles/sj-pads.css'

class Pads extends Component {

  showCpuSequence() {
    setTimeout(this.props.switchActive, 250)

    const runCpuSequence = value =>
      new Promise(resolve =>
        setTimeout(() => resolve(value === this.props.turnCount ?
          'done' : 'no'), 500))

    const loop = value =>
      runCpuSequence(value).then(result => {
        let cpuSequence = this.props.cpuSequence
        let toggle = () => {
          if (cpuSequence[value] == 0) {
            document.getElementById(cpuSequence[value])
              .classList.toggle(styles.cpu0)
          }
          if (cpuSequence[value] == 1) {
            document.getElementById(cpuSequence[value])
              .classList.toggle(styles.cpu1)
          }
          if (cpuSequence[value] == 2) {
            document.getElementById(cpuSequence[value])
              .classList.toggle(styles.cpu2)
          }
          if (cpuSequence[value] == 3) {
            document.getElementById(cpuSequence[value])
              .classList.toggle(styles.cpu3)
          }
        }
        let sound = () => {
          if (cpuSequence[value] == 0) {
            let tone0 = new Audio(require('../assets/simonSounds0.mp3'))
            tone0.play()
          }
          if (cpuSequence[value] == 1) {
            let tone1 = new Audio(require('../assets/simonSounds1.mp3'))
            tone1.play()
          }
          if (cpuSequence[value] == 2) {
            let tone2 = new Audio(require('../assets/simonSounds2.mp3'))
            tone2.play()
          }
          if (cpuSequence[value] == 3) {
            let tone3 = new Audio(require('../assets/simonSounds3.mp3'))
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
      this.props.resetPlyrSequence()
    })
  }

  flushCpuSequence() {
    this.props.resetCpuSequence()
    for (let i = 0; i < 20; i++) {
      let randomNumber = Math.floor(Math.random() * 4)
      this.props.cpuSequence[i] = randomNumber
    }
    this.props.setCpuSequence()
    console.log(this.props.cpuSequence)
  }

  clickHandle(e) {
    let cpuSequence = this.props.cpuSequence
    let plyrSequence = this.props.plyrSequence

    if (this.props.active === 'plyr' &&
      (plyrSequence.length - 1 < this.props.turnCount ||
      this.props.turnCount === 0)) {

      let targ = e.currentTarget.id
      let activate = () => {
        // Document.getElementById(targ).classList.toggle(styles.selected)
        if (targ == 0) {
          document.getElementById(targ).classList.toggle(styles.plyr0)
        }
        if (targ == 1) {
          document.getElementById(targ).classList.toggle(styles.plyr1)
        }
        if (targ == 2) {
          document.getElementById(targ).classList.toggle(styles.plyr2)
        }
        if (targ == 3) {
          document.getElementById(targ).classList.toggle(styles.plyr3)
        }
      }

      let sound = () => {
        if (targ == 0) {
          let tone0 = new Audio(require('../assets/simonSounds0.mp3'))
          tone0.crossOrigin = 'anonymous'
          tone0.play()
          console.log('noise')
        }
        if (targ == 1) {
          let tone1 = new Audio(require('../assets/simonSounds1.mp3'))
          tone1.play()
          console.log('noise')
        }
        if (targ == 2) {
          let tone2 = new Audio(require('../assets/simonSounds2.mp3'))
          tone2.play()
          console.log('noise')
        }
        if (targ == 3) {
          let tone3 = new Audio(require('../assets/simonSounds3.mp3'))
          tone3.play()
          console.log('noise')
        }
      }

      activate()
      sound()
      setTimeout(activate, 500)

      plyrSequence.push(targ)
      // Then check to see if plyrSequence matches cpuSequence
      for (let i = 0; i < plyrSequence.length; i++) {
        let toneError = new Audio(require('../assets/simonSoundsErr.mp3'))

        if (plyrSequence[i] != cpuSequence[i] &&
          this.props.strict === 'off') {
          console.log('you made a mistake')
          toneError.play()
          this.showCpuSequence()
          // Play error sound, switch 'active' to 'cpu'
          // and iterate through cpuSequence again
        }

        if (plyrSequence[i] != cpuSequence[i] &&
          i !== this.props.turnCount &&
          this.props.strict === 'on') {
          console.log('strict: you made a mistake')
          toneError.play()
          this.flushCpuSequence()
          this.showCpuSequence()
          // Reset cpuSequence and iterate through
        }

        if (i === this.props.turnCount) {
          if (plyrSequence[i] == cpuSequence[i] &&
            this.props.turnCount < 19) {
            console.log('turn suxxzessful')
            this.props.nextTurn()

            this.showCpuSequence()

            this.props.switchActive()
          }

          if (plyrSequence[i] == cpuSequence[i] &&
            this.props.turnCount === 19) {
            this.props.winGame()
          }

          if (plyrSequence[i] != cpuSequence[i] &&
            this.props.strict === 'on') {
            toneError.play()
            this.flushCpuSequence()
            this.showCpuSequence()
          }
        }
      }
    }
    // Console.log(this.props.turnCount + ' ' + this.props.active)
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
        <div id={styles.padContainer}>
          <div className={styles.row}>
            <div
              className={classNames(styles.pad, styles.zero)}
              id='0'
              onClick={this.props.getInitialState}
            ></div>
            <div
              className={classNames(styles.pad, styles.one)}
              id='1'
              onClick={this.props.getInitialState}
            ></div>
          </div>
          <div className={styles.row}>
            <div
              className={classNames(styles.pad, styles.two)}
              id='2'
              onClick={this.props.getInitialState}
            ></div>
            <div
              className={classNames(styles.pad, styles.three)}
              id='3'
              onClick={this.props.getInitialState}
            ></div>
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
