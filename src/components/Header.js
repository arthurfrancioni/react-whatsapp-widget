import React from 'react'
import styles from './Header.module.css'

export default function Header({ name, status, agents, avatar, description }) {
  return (
    <div className={`${styles.header} ${agents ? styles.header_group : ''}`}>
      {!agents && (
        <React.Fragment>
          <div className={`${styles.user_avatar}`}>
            <div className={`${styles.user_avatar_container}`}>
              <div
                style={avatar && { backgroundImage: 'url(' + avatar + ')' }}
                className={`${styles.user_avatar_img}`}
              />
            </div>
          </div>
          <div className={`${styles.user_info}`}>
            <div className={`${styles.user_name}`}>{name}</div>
            <div className={`${styles.user_desc}`}>{status}</div>
          </div>
        </React.Fragment>
      )}

      {agents && (
        <React.Fragment>
          {agents.map((agent, index) => (
            <div key={index} className={`${styles.user_group_avatar}`}>
              <img src={agent.avatar} />
            </div>
          ))}
          <p>{description}</p>
        </React.Fragment>
      )}
    </div>
  )
}
