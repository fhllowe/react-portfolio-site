import React from 'react'
import HBackground from './HBackground.js'
import styles from './styles/Header.module.css'
import Socials from './Socials.js'

const Header = () => {
  return (
    <header className={styles.header}>
            <nav className={styles.navLinks}>
            <a href='index.hmtl'  className='link'>Home</a>
            <a href=" "  className='link'>Skills</a>
            <a href='#projects' className='link'>Projects</a>

              <Socials />



            </nav>
    </header>
  )
}

export default Header  