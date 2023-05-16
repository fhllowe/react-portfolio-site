import React from 'react'
import linkedin from '../assets/icons/linkedin_social.svg'
import github from '../assets/icons/github_social.svg'
import twitter from '../assets/icons/twitter_social.svg'
import styles from './styles/Socials.module.css'

const Socials = () => {
  return (
    <>
      <a href='https://github.com/fhllowe'>
         <img src={github} className={styles.socials}></img>
      </a>
      <a href='https://www.linkedin.com/in/fhlowe/'>
         <img src={linkedin} className={styles.socials}></img>
      </a>
      <a href='https://twitter.com/fhllowe'>
         <img src={twitter} className={styles.socials}></img>
      </a>
    </>
  )
}

export default Socials