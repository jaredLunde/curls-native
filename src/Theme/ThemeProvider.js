import React from 'react'
import PropTypes from 'prop-types'
import emptyObj from 'empty/object'
import DimensionsProvider from '../Dimensions'
import deepMerge from '../utils/deepMerge'
import defaultColors from './defaultColors'
import defaultTypeFaces from './defaultTypeFaces'


const baseTheme = {
  colors: defaultColors,
  typeFaces: defaultTypeFaces
}


function throwThemeError (theme) {
  if (theme.colors === void 0 || theme.typeFaces === void 0) {
    throw new Error(`Curls themes must include a global 'colors' and 'typeFaces' property.`)
  }
}

function replaceTheme (prevTheme, theme) {
  let nextTheme
  theme = {...baseTheme, ...theme}

  if (__DEV__) {
    nextTheme = Object.freeze(theme)
    throwThemeError(nextTheme)
  }
  else {
    nextTheme = theme
  }

  return nextTheme
}

function injectTheme (prevTheme, theme) {
  let nextTheme
  theme = deepMerge(prevTheme, theme)

  if (__DEV__) {
    nextTheme = Object.freeze(theme)
    throwThemeError(nextTheme)
  }
  else {
    nextTheme = theme
  }

  return nextTheme
}

export const CurlsContext = React.createContext(
  {
    theme: null,
    setTheme: null,
    replaceTheme: null
  }
)

export default class ThemeProvider extends React.Component {
  static propTypes = {
    theme: PropTypes.object
  }

  static defaultProps = {
    theme: emptyObj
  }

  constructor (props) {
    super(props)
    this.state = {theme: injectTheme(baseTheme, props.theme)}
    this.themeProviderContext = {
      theme: this.state.theme,
      setTheme: this.setTheme,
      replaceTheme: this.replaceTheme
    }
    // console.log('[🎉 Theme]', this.state.theme)
  }

  setTheme = theme => this.setState(
    prevState => ({theme: injectTheme(prevState.theme, theme)})
  )

  replaceTheme = theme => this.setState(
    prevState => ({theme: replaceTheme(prevState.theme, theme)})
  )

  render () {
    this.themeProviderContext.theme = this.state.theme

    return (
      <CurlsContext.Provider value={this.themeProviderContext}>
        <DimensionsProvider>
          {this.props.children}
        </DimensionsProvider>
      </CurlsContext.Provider>
    )
  }
}
