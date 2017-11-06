import React, { Component } from 'react'
import styles from './sj-pads.css'

class Pads extends Component {
  render() {
    return (
      <div id={styles.padcontainer}>
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

export default Pads
