import React, { Component } from 'react'
import styles from '../styles/sj-pads.css'

class Pads extends Component {

  showCpuSequence() {
    const runCpuSequence = value =>
      new Promise(resolve =>
        setTimeout(() => resolve(value === this.props.turnCount ?
          'done' : 'no'), 500))

    const loop = value =>
      runCpuSequence(value).then(result => {
        let cpuSequence = this.props.cpuSequence
        let toggle = () => {
          document.getElementById(cpuSequence[value]).classList.toggle(styles.cpuSelected)
        }
        if (result === 'done') {
          console.log('done')
          setTimeout(toggle, 500)
          setTimeout(toggle, 200)
          // toggle class and end turn
        } else {
          console.log(this.props.turnCount + ': ' + value)
          setTimeout(toggle, 500)
          setTimeout(toggle, 200)
          return loop(value + 1)
        }
      })

    loop(0).then(() => {
      console.log('loop complete')
      this.props.resetPlyrSequence()
      // this.props.switchActive()
    })
  }

  clickHandle(e) {
    let cpuSequence = this.props.cpuSequence
    let plyrSequence = this.props.plyrSequence

    if (this.props.active === 'plyr' &&
      (plyrSequence.length - 1 < this.props.turnCount ||
      this.props.turnCount === 0)) {
      console.log(this.props.active)
      let targ = e.currentTarget.id
      let activate = () => {
        document.getElementById(targ).classList.toggle(styles.selected)
      }
      activate()
      setTimeout(activate, 500)
      console.log(targ)
      plyrSequence.push(targ)
      console.log(plyrSequence)
      for (let i = 0; i < plyrSequence.length; i++) {
        if (plyrSequence[i] != cpuSequence[i]) {
          console.log('you fucked up')
          // Play error sound, switch 'active' to 'cpu'
          // and iterate through cpuSequence again.
          console.log(i + ': ' + this.props.turnCount)
        }
        if (i === this.props.turnCount) {
          if (plyrSequence[i] == cpuSequence[i]) {
            console.log('turn suxxzessful')
            this.props.nextTurn()

            this.showCpuSequence()
            console.log(i + ': ' + this.props.turnCount)
            this.props.switchActive()
          }
        } else {
          console.log('so far so good')
          console.log(i + ': ' + this.props.turnCount)
        }
      }
    }
    // this.props.resetPlyrSequence()
    // this.props.switchActive()
    console.log(this.props.turnCount + ' ' + this.props.active)


  }

  padSelector() {
    if (this.props.gameOn === 'yes') {
      return (
        <div id={styles.padContainer}>
          <div className={styles.row}>
            <div
              className={styles.pad}
              id='0'
              onClick={this.clickHandle.bind(this)}
            ></div>
            <div
              className={styles.pad}
              id='1'
              onClick={this.clickHandle.bind(this)}
            ></div>
          </div>
          <div className={styles.row}>
            <div
              className={styles.pad}
              id='2'
              onClick={this.clickHandle.bind(this)}
            ></div>
            <div
              className={styles.pad}
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
            <div className={styles.pad} id='0'></div>
            <div className={styles.pad} id='1'></div>
          </div>
          <div className={styles.row}>
            <div className={styles.pad} id='2'></div>
            <div className={styles.pad} id='3'></div>
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
