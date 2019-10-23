import React from 'react'

interface Props {
  who?: string
  onRender?: () => void
}

// С функциональными компонентами сложнее
// В отличие от статического defaultProps, пропсы будут видны, как обязательные
const SimpleFuncComponent: React.FC<Props> = ({
  who = 'World',
  onRender = () => {}
}) => {
  onRender()
  return <h1>Hello, {who}!</h1>
}

const Example = () => {
  return <SimpleFuncComponent who="Lama" />
}
