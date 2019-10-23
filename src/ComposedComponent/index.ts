import React from 'react'
import { compose } from 'redux'
import withAwesome from '../HOC'
import ComposedComponent, { Props } from './ComposedComponent'

const EnhancedComponent = compose<React.ComponentType<Props>>(
  withAwesome,
  React.memo
  // and others
)(ComposedComponent)

export default EnhancedComponent
