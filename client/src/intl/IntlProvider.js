import React from 'react'
import { IntlProvider as I18nProvider } from 'react-intl'

// Lang sheets
import es from './messages/es'
import pt from './messages/pt'
import en from './messages/en'
import { useSelector } from 'react-redux'

const flattenMessages = (nestedMessages, prefix = '') => {
  if (nestedMessages === null) {
    return {}
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key]
    const prefixedKey = prefix ? `${prefix}.${key}` : key

    if (typeof value === 'string') {
      Object.assign(messages, { [prefixedKey]: value })
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey))
    }

    return messages
  }, {})
}

const messages = {
  EN: en,
  ES: es,
  PT: pt,
}

const IntlProvider = ({ children }) => {
  const languageSelected = useSelector((state) => state.global.languageSelected)
  return (
    <I18nProvider
      locale={languageSelected}
      messages={flattenMessages(messages[languageSelected])}
    >
      {children}
    </I18nProvider>
  )
}
export default IntlProvider
