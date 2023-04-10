import React, { useEffect, useState } from 'react'

import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

const App = () => {


  // const CHAT = {
  //   initTime: 2000,
  //   button: 'Start Chat',
  //   buttonStyle: 'white',
  //   description: 'Estamos aqui para ajudá-lo! Não hesite em nos perguntar qualquer coisa. Clique abaixo para começar.',
  //   agents: [
  //     {
  //       name: 'Arthur',
  //       status: 'Online',
  //       description: 'Araras - SP',
  //       avatar: 'https://img.widgetwhats.com/wp-content/uploads/maryjane-150x150.jpg',
  //       phoneNumber: 48999215677
  //     },
  //     {
  //       name: 'Ronaldo',
  //       status: 'Online',
  //       description: 'Tiju - MA',
  //       avatar: 'https://img.widgetwhats.com/wp-content/uploads/Peter_Parker-150x150.jpg',
  //       phoneNumber: 48999215677
  //     },
  //     {
  //       name: 'Ricardo',
  //       status: 'Online',
  //       description: 'Salvador - MA',
  //       avatar: 'https://img.widgetwhats.com/wp-content/uploads/green-150x150.jpg',
  //       phoneNumber: 48999215677
  //     },
  //     {
  //       name: 'Ricardo',
  //       status: 'Online',
  //       description: 'Salvador - MA',
  //       avatar: 'https://img.widgetwhats.com/wp-content/uploads/green-150x150.jpg',
  //       phoneNumber: 48999215677
  //     },
  //   ]
  // };

  const [defaultConfig, setDefaultConfig] = useState(null)

  useEffect(() => {
    setDefaultConfig({
      name: 'Arthur',
      status: 'Online',
      message: 'Hello! 👋🏼 <br><br> What can we do for you?',
      button: 'Start Chat',
      initTime: 2000,
      buttonStyle: 'white',
      avatar: 'https://img.freepik.com/vetores-premium/rosto-de-jovem-negro-com-barba-retrato-masculino-ou-avatar-em-estilo-plano-vista-frontal_497399-251.jpg?w=800',
      phoneNumber: 48999215677
    })
  }, [])

  return <WhatsAppWidget chat={defaultConfig} />
}

export default App
