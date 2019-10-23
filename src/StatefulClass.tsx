import React from 'react'

type LanguageType = 'Javascript' | 'Typescript' | 'CoffeeScript'

interface State {
  language: LanguageType
}

class StatefulClass extends React.Component<{}, State> {
  // Нет ошибок в дефолтном стейте
  state = {
    language: 'Javascript' as LanguageType
  }

  onClick = (e: React.MouseEvent) => {
    e.preventDefault()

    // setState не даст ошибиться в типе
    this.setState({ language: 'Typescript' })
  }

  render () {
    const { language } = this.state
    return (
      <React.Fragment>
        <h1>Current language is {language}</h1>
        <button onClick={this.onClick}>
          Switch to typed language
        </button>
      </React.Fragment>
    )
  }
}

export default StatefulClass