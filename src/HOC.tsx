import React, { ComponentType, ComponentClass } from 'react'

// Для ХОК-ов очень полезно выносить пропсы в экспортируемый интерфейс
// Даже если внутри одно свойство
// Даже если очень хочется не заниматься таким
// Почему, чтобы понять почему, пойдем в компонент ./ComposedComponent/ComposedComponent
export interface WithAwesomeProps {
  hello: string
  world: string
}

function getDisplayName (Component: React.ComponentType) {
  return Component.displayName || Component.name || 'WrappedComponent'
}

function withAwesome<P> (WrappedComponent: ComponentType<P & WithAwesomeProps>): ComponentClass<Pick<P, Exclude<keyof P, keyof WithAwesomeProps>>> {
  return class Component extends React.Component<P & WithAwesomeProps> {

    static displayName = `withAwesomeProps(${getDisplayName(WrappedComponent)})`

    render () {
      const HELLO = 'Hello'
      const WORLD = 'World'

      return (
        <WrappedComponent
          hello={HELLO}
          world={WORLD}
          {...this.props}
        />
      )
    }
  }
}

interface TestComponentProps {
  sort: 'asc' | 'desc'
}
const TestComponent: React.FunctionComponent<TestComponentProps> = ({ sort }) => (
  <div>Current sorting is {sort}</div>
)

const WrappedComponent = withAwesome(TestComponent)

const Example = () => {
  return <WrappedComponent sort="asc" />
}

export default withAwesome