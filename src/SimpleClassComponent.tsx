import React from 'react'

interface Props {
  who: string
}

class SimpleClassComponent extends React.Component<Props> {
  render () {
    return <h1>Hello, {this.props.who}!</h1>
  }
}

const Example = () => {
  return <SimpleClassComponent who="World" />
}
