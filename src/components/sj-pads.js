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
          document.getElementById(cpuSequence[value])
            .classList.toggle(styles.cpuSelected)
        }

        if (result === 'done') {
          // Console.log('done')
          setTimeout(toggle, 500)
          setTimeout(toggle, 200)
        } else {
          // Console.log(this.props.turnCount + ': ' + value)
          setTimeout(toggle, 500)
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
        document.getElementById(targ).classList.toggle(styles.selected)
      }

      activate()
      setTimeout(activate, 500)

      plyrSequence.push(targ)
      // Then check to see if plyrSequence matches cpuSequence
      for (let i = 0; i < plyrSequence.length; i++) {

        if (plyrSequence[i] != cpuSequence[i] &&
          this.props.strict === 'off') {
          console.log('you made a mistake')
          this.showCpuSequence()
          // Play error sound, switch 'active' to 'cpu'
          // and iterate through cpuSequence again
        }

        if (plyrSequence[i] != cpuSequence[i] &&
          i !== this.props.turnCount &&
          this.props.strict === 'on') {
          console.log('strict: you made a mistake')
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
