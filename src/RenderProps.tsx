import React from 'react'

// Default component
interface CustomLabelProps {
  className: string
}
const Label: React.FC<CustomLabelProps> = ({ children, ...otherProps }) => <span {...otherProps}>{children}</span>
// End of default component

interface Props {
  // Переопределяем children
  // Другие renderProps-пропсы типизируются так же
  children: (
    count: number,
    DefaultLabel: typeof Label // или React.ComponentType<CustomLabelProps>
  ) => React.ReactNode
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
        {this.props.children(this.state.count, Label)}
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
        {(count, DefaultLabel) => {
          return (
            <DefaultLabel className="conditional-class">
              Now count is {count}
            </DefaultLabel>
          )
        }}
      </TestCounter>
    </React.Fragment>
  )
}