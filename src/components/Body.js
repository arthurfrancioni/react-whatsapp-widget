import React, { useContext } from 'react'
import WidgetContext from '../context/widgetContext'
import styles from './Body.module.css'

import Spinner from './Spinner'

export default function Body({ name, message, agents }) {
  const time = new Date().toTimeString().split(`:`).slice(0, 2).join(`:`)
  const { isLoading } = useContext(WidgetContext)

  const handleStartChat = (phoneNumber) => {
    if (!phoneNumber) {
      window.alert('Invalid Phone Number')
      return false
    }
    window.open(`https://wa.me/${phoneNumber}`)
  }

  return (
    <div className={`${agents ? styles.body_group : styles.body}`}>
      {!agents && (
        <div className={`${styles.msg_container}`}>
          <Spinner show={isLoading} />
          <div
            className={`${styles.msg_content}
          ${isLoading ? styles.hide : styles.show}`}
          >
            <div className={`${styles.msg_name}`}>{name}</div>
            <div
              className={`${styles.msg_text}`}
              dangerouslySetInnerHTML={{ __html: message }}
            />
            <div className={`${styles.msg_time}`}>{time}</div>
          </div>
        </div>
      )}
      {agents &&
        agents.map((agent, index) => (
          <div
            onClick={() => handleStartChat(agent.phoneNumber)}
            key={index}
            className={`${styles.agents_list}`}
          >
            <div className={`${styles.user_avatar_img}`}>
              <img src={agent.avatar} />
            </div>
            <div className={`${styles.user_profile}`}>
              <p>{agent.description}</p>
              <h3>{agent.name}</h3>
              <small>{agent.status}</small>
            </div>
          </div>
        ))}
    </div>
  )
}
