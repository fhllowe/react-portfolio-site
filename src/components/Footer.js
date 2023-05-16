import React from 'react'
import Styles from '../components/styles/Footer.module.css'
import Socials from './Socials.js'

const Footer = () => {
  return (
    <footer className={Styles.footerNav}>
      <nav>
         <a href='index.html'>Home</a>
         <a href=''>About</a>
         <a href='#projects' className='link'>Projects</a>
          <a href="#about"  className='link'>Skills</a>
          <Socials />
      </nav>
    </footer>
  )
}

export default Footer