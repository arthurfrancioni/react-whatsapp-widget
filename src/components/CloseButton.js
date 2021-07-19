import React, { useContext } from 'react'
import WidgetContext from '../context/widgetContext'

import styles from './CloseButton.module.css'

export default function CloseButton() {
  const { handleOpen } = useContext(WidgetContext)

  return (
    <React.Fragment>
      <div onClick={handleOpen} className={`${styles.close_btn}`} />
    </React.Fragment>
  )
}
