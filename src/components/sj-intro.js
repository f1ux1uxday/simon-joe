import React, { Component } from 'react'

import styles from '../styles/sj-intro.css'

class Intro extends Component {

  introStateCheck() {
    if (this.props.gameOn === 'intro') {
      return (
        <div className={styles.introContainer}>
          <h3 className={styles.head}>
            AN ANIMAL APPEARS IN YOUR PERIPHERY.
          </h3>
          <p className={styles.para}>
            HIS NAME IS SIMON JOE.<br/>
            HE IS VERY CURIOUS AND NEVER FORGETS.<br/>
            HE WANTS TO LOVE BUT IS UNSURE OF YOUR WORTH.
          </p>
          <h3 className={styles.head}>
            CAN YOU IMPRESS THIS FICKLE FELINE?
          </h3>
          <p className={styles.para}>
            TRY TO REPEAT SIMON'S SEQUENCE,<br/>
            WHICH INCREASES BY ONE EACH TURN.<br/>
            AFTER TWENTY SUCCESSFUL TURNS,<br/>
            SIMON JOE MAY LET YOU INTO HIS HEART.<br/>
          </p>
          <h3 className={styles.head}>
            IS THE JOE CAT FEELING HARSH?
          </h3>
          <p className={styles.para}>
            IN HARSH MODE, HE DOES NOT FORGIVE.<br/>
            EACH MISTAKE RESETS THE TURN COUNT<br/>
            WITH A FRESH SEQUENCE. BE CAREFUL!<br/>
          </p>
          <button
            className={styles.enterButton}
            onClick={this.props.enter}
          >
            BEGIN
          </button>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.introStateCheck()}
      </div>
    )
  }
}

export default Intro
