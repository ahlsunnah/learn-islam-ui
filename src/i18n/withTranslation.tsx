import React, { Component } from 'react'
import i18next from './config'
import { I18nextProvider } from 'react-i18next'

export function withTrans(WrappedComponent: React.ComponentType) {
  return class Trans extends Component {
    render() {
      return (
        <I18nextProvider i18n={i18next}>
          <WrappedComponent {...this.props} />
        </I18nextProvider>
      )
    }
  }
}
