import React, { useState, useCallback } from 'react'

type LanguageType = 'Javascript' | 'Typescript' | 'CoffeeScript'

const StatefulFunction: React.FunctionComponent = () => {
  const [language, setLanguage] = useState<LanguageType>('Typescript')

  // useCallback сохраняет ссылку на функцию => нет лишних ререндеров внутри зависимого компонента
  const onClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault()

    // Только LanguageType. TS не даст ошибиться
    setLanguage('Typescript')
  }, [language])

  return (
    <React.Fragment>
      <h1>Current language is {language}</h1>
      <button onClick={onClick}>
        Switch to typed language
      </button>
    </React.Fragment>
  )
}

export default StatefulFunction