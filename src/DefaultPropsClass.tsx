import React from 'react'

interface Props {
  who: string
}

class SimpleClassComponent extends React.Component<Props> {
  // TS достаточно умный, чтобы понять, что значение будет
  // Но тип Props в defaultProps не протекает. Поэтому Partial
  static readonly defaultProps: Partial<Props> = {
    who: 'World'
  }

  render () {
    return <h1>Hello, {this.props.who}!</h1>
  }
}

const Example = () => {
  return <SimpleClassComponent who="Lama" />
}
