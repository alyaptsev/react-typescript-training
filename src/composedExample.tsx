import React from 'react'
// Импорт здорового человека
import ComposedComponent from './ComposedComponent'

const Example = () => {
  // Тут TS не требует лишних пропсов
  // Только то, что требуется самому компоненту
  return <ComposedComponent title="Enhanced component" />
}