import React from 'react'
import styles from './App.module.css'

import WhatsAppButton from './WhatsAppButton'
import WhatsAppChat from './WhatsAppChat'

export default function App(props) {
  return (
    <div className={`${styles.component}`}>
      <div className={`${styles.float_main}`}>
        <WhatsAppChat {...props} />
        <WhatsAppButton {...props} />
      </div>
    </div>
  )
}
