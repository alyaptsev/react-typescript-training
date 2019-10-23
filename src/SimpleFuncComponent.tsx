import React from 'react'

interface Props {
  who: string
}

const SimpleFuncComponent: React.FC<Props> = (props) => {
  return <h1>Hello, {props.who}!</h1>
}

const Example = () => {
  return <SimpleFuncComponent who="World" />
}
