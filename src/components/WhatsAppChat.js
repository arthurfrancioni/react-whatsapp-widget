import React, { useContext } from 'react'
import styles from './WhatsAppChat.module.css'
import WidgetContext from '../context/widgetContext'

import CloseButton from './CloseButton'
import StartChatButton from './StartChatButton'
import Header from './Header'
import Body from './Body'

export default function WhatsAppChat(props) {
  const { isOpen } = useContext(WidgetContext)

  return (
    <div
      className={`${styles.chat_widget}
      ${isOpen ? styles.open : styles.close}`}
    >
      <CloseButton />
      <Header {...props} />
      <Body {...props} />
      {!props.agents && <StartChatButton {...props} />}
    </div>
  )
}
