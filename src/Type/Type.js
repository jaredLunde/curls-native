import React from 'react'
import {css} from '@emotion/primitives'
import {Text} from 'react-native'
import {FlexBox} from '../Box'
import createComponent, {renderNode} from '../createComponent'
import propTypes from './propTypes'
import * as CSS from './CSS'
import * as defaultTheme from './defaultTheme'


const nodeType = Text
const SFC = createComponent({
  name: 'Type',
  propTypes,
  CSS,
  defaultTheme,
  themePath: 'type'
})

const Type = React.forwardRef(
  function Type (props, innerRef) {
    return FlexBox({
      ...props,
      children: function (boxProps) {
        return SFC({
            ...boxProps,
          innerRef,
          children: function (nodeProps) {
            nodeProps.children = props.children
            nodeProps.nodeType = nodeProps.nodeType || nodeType
            return renderNode(nodeProps)
          }
        })
      }
    })
  }
)

export default Type

export const H1 = React.forwardRef(
  function H1 (props, innerRef) {
    return React.createElement(Type, {xxl: true, innerRef, ...props})
  }
)

export const H2 = React.forwardRef(
  function H2 (props, innerRef) {
    return React.createElement(Type, {xl: true, innerRef, ...props})
  }
)

export const H3 = React.forwardRef(
  function H3 (props, innerRef) {
    return React.createElement(Type, {lg: true, innerRef, ...props})
  }
)

export const H4 = React.forwardRef(
  function H4 (props, innerRef) {
    return React.createElement(Type, {md: true, innerRef, ...props})
  }
)


export const P = React.forwardRef(
  function P (props, innerRef) {
    return React.createElement(
      Type, {
        m: 'b2',
        innerRef,
        ...props,
        className: css`
          line-height: 1.4;
          ${props.style}
        `
      }
    )
  }
)
