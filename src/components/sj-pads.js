import React, { Component } from 'react'
import styles from '../styles/sj-pads.css'

class Pads extends Component {

  showCpuSequence() {
    let cpuSequence = this.props.cpuSequence

    if (this.props.active === 'cpu') {
      for (let q = 0; q <= this.props.turnCount; q++) {
        let illuminate = () => {
          document.getElementById(cpuSequence[q].toString()).classList.toggle(styles.selected)
        }
        illuminate()
        setTimeout(illuminate, 5000)
      }
      console.log(this.props.turnCount)
    }
    // this.props.nextTurn()
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
      this.props.setPlyrSequence()
      console.log(plyrSequence)
      for (let i = 0; i <= this.props.turnCount; i++) {
        if (plyrSequence[i] != cpuSequence[i]) {
          console.log('you fucked up')
          // Play error sound, switch 'active' to 'cpu'
          // and iterate through cpuSequence again.
        } else if (i === this.props.turnCount) {
          if (plyrSequence[i] == cpuSequence[i]) {
            console.log('turn suxxzessful')
            this.props.switchActive()
            // this.props.nextTurn()
            // this.showCpuSequence()
            // for (let q = 0; q <= this.props.turnCount; q++) {
              // let illuminate = () => {
                // document.getElementById(cpuSequence[q]).classList.toggle(styles.selected)
              // }
              // illuminate()
              // setTimeout(illuminate, 500)
            // }
          }
        } else {
          console.log('so far so good')
        }
      }
    }
    this.props.nextTurn()
    this.props.switchActive()
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
