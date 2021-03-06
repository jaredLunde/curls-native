import React from 'react'
import memoize from 'memoize-two-args'
import emptyObj from 'empty/object'
import {CurlsContext} from './ThemeProvider'
import getTheme from '../utils/getTheme'


const mergeGlobals_ = memoize(
  // this is memoized for defaultTheme merging efficiency and sCU in children
  function (curlsTheme, theme) {
    const base = {
      colors: curlsTheme.colors,
      typeFaces: curlsTheme.typeFaces
    }

    return theme === emptyObj ? base : Object.assign(base, theme)
  }
)

function mergeGlobals (curlsTheme, props) {
  if (props.path === void 0) {
    return !curlsTheme ? props.defaultTheme : getTheme(props.defaultTheme, curlsTheme)
  }
  else {
    const theme = getTheme(
      props.defaultTheme,
      mergeGlobals_(curlsTheme, curlsTheme[props.path] || emptyObj)
    )

    return theme
  }
}

export default function ThemeConsumer (props) {
  const consumerProps = {}

  function Consumer (consumerContext) {
    consumerProps.theme = mergeGlobals(consumerContext.theme, props)
    consumerProps.setTheme = consumerContext.setTheme
    consumerProps.replaceTheme = consumerContext.replaceTheme
    return props.children(consumerProps)
  }

  return <CurlsContext.Consumer children={Consumer}/>
}
