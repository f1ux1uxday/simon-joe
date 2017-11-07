import React from 'react'
import styles from '../styles/sj-header.css'

const Header = () => (
  <div>
    <h1 className={styles.heading}> Simon Joe : A Memory Game For Joe-Cat</h1>
    <nav className={styles.nav}>
      <a className={styles.navelement} href='http://lucasdayton.com'> 
        nav 1
      </a>
      <a className={styles.navelement} href='http://gilganesh.com'> 
        nav 2 
      </a>
    </nav>
  </div>
)

export default Header
