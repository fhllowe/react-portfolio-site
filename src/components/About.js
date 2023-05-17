import React, { useState } from 'react'
import HBackground from './HBackground.js'
import Language from './Language.js'
import styles from './styles/About.module.css'
import videoBgDesktop from '../assets/background/about/video-desktop.mp4'
import videoBgMobile from '../assets/background/about/video-mobile.mp4'
import ShowHideParagraph from '../components/ShowHideParagraph.js'


// import {render} from 'react-dom'
// import FuschiaFlat from '../assets/wave-haikei-fuchsia-flat.svg'


const About = (about, backgroundTransition) => {
  return (
        <main>
          <section className={styles.about}>

            <h3>Hey there! </h3>
            <h1>I'm Fred Lowe</h1>
          </section>
          <ShowHideParagraph className={styles.showHide} />
        </main>
  ) 
}

export default About

