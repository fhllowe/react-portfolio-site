import React from 'react'
import Icon from './Icon'
import styles from './styles/Language.module.css'

const Language = ({languages}) => {
  return (
    <section className={styles.languages}>
          <h1>Tools and Languages</h1>
            <Icon />

    </section>
  )
}
export default Language