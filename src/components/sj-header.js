import React from 'react'
import styles from '../base.css'

const Header = () => (
  <div>
    <h1 className={styles.heading}> Simon Joe : A Memory Game For Joe-Cat</h1>
    <nav>
      <a href='http://lucasdayton.com'> nav 1</a>
      &bull;
      <a href='http://gilganesh.com'> nav 2 </a>
      &bull;
    </nav>
  </div>
)

export default Header
