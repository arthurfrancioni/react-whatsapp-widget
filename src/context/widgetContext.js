import React, { useEffect, useState } from 'react'

const Context = React.createContext({})

/* global localStorage, */

export function WidgetContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleOpen = () => {
    setIsOpen(!isOpen)
    localStorage.setItem('whatschatIsOpen', JSON.stringify(!isOpen))
    if (!isOpen) {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('whatschatIsOpen')) {
      localStorage.setItem('whatschatIsOpen', JSON.stringify(true))
    }

    const whatschatIsOpen = JSON.parse(localStorage.getItem('whatschatIsOpen'))
    if (whatschatIsOpen) {
      setTimeout(() => {
        handleOpen()
      }, children.props.initTime)
    }
  }, [])

  return (
    <Context.Provider value={{ isOpen, handleOpen, isLoading }}>
      {children}
    </Context.Provider>
  )
}

export default Context
