import React from 'react'
import {css} from '@emotion/primitives'
// import memoize from 'memoize-two-args'
import objectWithoutProps from 'object-without-props'
import {getStyles, assignOrdered} from './utils'
import {ThemeConsumer} from './Theme'


const mergeStyles =(a, b) => {
  if (b) {
    return css`${a}${b}`
  }
  else {
    return css`${a}`
  }
}

export function renderNode (nodeProps, defaultCSS) {
  if (defaultCSS !== void 0) {
    nodeProps.style = mergeStyles(defaultCSS, nodeProps.style)
  }

  return renderNodeFast(nodeProps)
}


export function renderNodeFast (nodeProps) {
  const nodeType = nodeProps.nodeType
  delete nodeProps.nodeType

  if (nodeProps.innerRef) {
    nodeProps.ref = nodeProps.innerRef
  }

  return React.createElement(nodeType, nodeProps)
}


export default function createComponent ({
  name,
  CSS,
  propTypes,
  defaultTheme,
  themePath
}) {
  if (defaultTheme !== void 0) {
    // translates __esModule stuff to plain obj
    defaultTheme = {...defaultTheme}
  }

  if (themePath === void 0) {
    throw new Error(`[${name}] Curls components must be initialized with a 'themePath' option set.`)
  }

  function renderer (props, themeProps) {
    const theme = themeProps.theme
    const defaults = theme.defaultProps
    props = defaults === void 0 ? props : assignOrdered(defaults, props)
    const renderProps = (
      propTypes === void 0
      ? Object.assign({}, props)
      : objectWithoutProps(props, propTypes)
    )
    delete renderProps.children

    const styles = CSS && getStyles(props, theme, CSS)

    if (styles !== void 0) {
      if (styles.styles.length) {
        renderProps.style = mergeStyles(styles.styles, renderProps.style)
      }
    }

    if (Array.isArray(renderProps.style)) {
      renderProps.style = mergeStyles(renderProps.style)
    }

    return props.children(renderProps)
  }

  function SFC (props) {
    return ThemeConsumer({
      path: themePath,
      defaultTheme,
      children: themeProps => renderer(props, themeProps)
    })
  }

  if (__DEV__) {
    SFC.displayName = name
    SFC.propTypes = propTypes
  }

  return SFC
}
