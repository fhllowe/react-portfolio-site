import React from 'react'
import styles from './styles/Skills.module.css'

const Skills = ({skills}) => {
  return (
    <section className={styles.skills}>
      <h2> Skills </h2>
      <ul>
        <li>Responsive Web Design</li>
        <li> Google Adsense</li>
        <li> Coding</li>
        <li>Frontend</li>
        <li>Backend</li>
      </ul>
    </section>
  )
}

export default Skills