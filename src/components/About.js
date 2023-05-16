import React from 'react'
import HBackground from './HBackground.js'
import Language from './Language.js'
import styles from './styles/About.module.css'
import videoBgDesktop from '../assets/background/about/video-desktop.mp4'
import videoBgMobile from '../assets/background/about/video-mobile.mp4'


// import {render} from 'react-dom'
// import FuschiaFlat from '../assets/wave-haikei-fuchsia-flat.svg'


const About = (about, backgroundTransition) => {
  return (
        <main>

          <section className={styles.about}>
            {/* <h1> Fred Lowe</h1> */}
            {/* <h3>Software Engineer</h3>
            <p>Hey there! I'm a full-stack software enginner based in Bangkok, Thailand </p> */}

            <h3>Hey there! </h3>
            <h1>I'm Fred Lowe</h1>
            <p> Hi, I'm Fred, a web developer who transitioned from the hospitality industry to the exciting world of technology. I'm passionate about creating exceptional user experiences and solving complex problems with elegant code. My background in guest relations has taught me valuable skills that I've been able to transfer to my work in web development. Adapting to the ever-evolving tech landscape has been challenging, but it's also been incredibly rewarding. I'm excited to share my journey with you and the lessons I've learned along the way. </p>
          </section>
        </main>
  ) 
}

export default About