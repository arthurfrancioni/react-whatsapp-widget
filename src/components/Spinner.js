import React from 'react'
import styles from './Spinner.module.css'

export default function Spinner({ show }) {
  return (
    <div className={`${styles.msg_loader} ${show ? styles.show : styles.hide}`}>
      <div className={`${styles.msg_loader_container}`}>
        <div className={`${styles.msg_dot_animate_1}`} />
        <div className={`${styles.msg_dot_animate_2}`} />
        <div className={`${styles.msg_dot_animate_3}`} />
        <div>{show}</div>
      </div>
    </div>
  )
}
