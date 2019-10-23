import React from 'react'

interface Props {
  // Переопределяем children
  // Другие renderProps-пропсы типизируются так же
  children: (count: number) => React.ReactNode
}

interface State {
  count: number
}

class TestCounter extends React.Component<Props, State> {
  state = {
    count: 0
  }

  onIncrement = () => {
    this.setState(state => ({ count: state.count + 1 }))
  }

  onDecrement = () => {
    this.setState(state => ({ count: state.count - 1 }))
  }

  render() {
    return (
      <div>
        <button onClick={this.onIncrement}>
          +
        </button>
        <button onClick={this.onDecrement}>
          -
        </button>
        {this.props.children(this.state.count)}
      </div>
    );
  }
}

const Example = () => {
  return (
    <React.Fragment>
      <TestCounter>
        {count => {
          return <div>Now count is {count}</div>
        }}
      </TestCounter>
      <TestCounter>
        {count => {
          return <h1>Now count is {count}</h1>
        }}
      </TestCounter>
    </React.Fragment>
  )
}