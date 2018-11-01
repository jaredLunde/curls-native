import React from 'react'
import memoize from 'cdll-memoize'
import {ThemeConsumer} from '../Theme'
import {DimensionsConsumer} from '../Dimensions'
import * as defaultTheme from './defaultTheme'


function getSizes (props, theme) {
  const sizes = []
  const keys = Object.keys(theme.breakPoints)

  for (let x = 0; x < keys.length; x++) {
    const k = keys[x]
    if (props[k] === true) {
      sizes.push(k)
    }
  }

  return sizes
}

const memoizedFindBreakPoints = memoize(
  function (theme, ...sizes) {
    const breakPoints = {}

    for (let size in theme.breakPoints) {
      if (sizes.indexOf(size) > -1) {
        breakPoints[size] = theme.breakPoints[size]
      }
    }

    return breakPoints
  },
  {size: 36}
)

// This is about enforcing immutability, not micro-optimizing
function findBreakPoints (props, theme) {
  return memoizedFindBreakPoints(theme, ...getSizes(props, theme))
}


const getMatches = memoize(({width, height}, breakPoints, orientation = 'portrait') => {
  const matches = {}
  width =
    orientation === 'portrait'
      ? (width < height ? width : height)
      : width

  for (let size in breakPoints) {
    const [min, max] = breakPoints[size]
    matches[size] = width >= min  && width <= max
  }

  return matches
})

function isTrue (el) { return el === true }

export default function BreakPoint (props) {
  return ThemeConsumer({
    path: 'breakPoint',
    defaultTheme,
    children: function (themeProps) {
      const breakPoints = findBreakPoints(props, themeProps.theme)
      let renderProps = {}

      return (
        <DimensionsConsumer>
          {function (dims) {
            const matches = getMatches(dims, breakPoints, props.orientation)
            renderProps = matches
            const matchValues = Object.values(matches)
            renderProps.any = matchValues.some(isTrue)
            renderProps.all = matchValues.every(isTrue)
            return props.children(renderProps)
          }}
        </DimensionsConsumer>
      )
    }
  })
}
