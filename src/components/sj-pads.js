import React, { Component } from 'react'
import styles from './sj-pads.css'

class Pads extends Component {
  render() {
    return (
      <div id={styles.padcontainer}>
        <div className={styles.row}>
          <div className={styles.pad} id='pad1'>A</div>
          <div className={styles.pad} id='pad2'>B</div>
        </div>
        <div className={styles.row}>
          <div className={styles.pad} id='pad3'>C</div>
          <div className={styles.pad} id='pad4'>D</div>
        </div>
      </div>
    )
  }
}

export default Pads
