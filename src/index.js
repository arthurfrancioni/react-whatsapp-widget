import React from 'react'
import App from './components/App'
import { WidgetContextProvider } from './context/widgetContext'

export default function WhatsAppWidget({ chat }) {
  const DEFAULT = {
    name: 'Arthur',
    status: 'Online',
    message: 'Hello! 👋🏼 <br><br> What can we do for you?',
    button: 'Start Chat',
    initTime: 2000,
    buttonStyle: 'white',
    avatar: null,
    phoneNumber: null
  }
  return (
    <WidgetContextProvider>
      <App {...(chat || DEFAULT)} />
    </WidgetContextProvider>
  )
}
