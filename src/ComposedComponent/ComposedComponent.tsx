import { WithAwesomeProps } from '../HOC'

export interface Props {
  title: string
}
const ComposedComponent: React.FunctionComponent<Props & WithAwesomeProps> = ({ title, hello }) => (
  <h1>{title} with {hello}</h1>
)

// Сейчас компонент можно тестировать отдельно от оберток
export default ComposedComponent