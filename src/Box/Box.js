import React from 'react'
import {View, ScrollView} from 'react-native'
import flexPropTypes from '../Flex/propTypes'
import * as flexCSS from '../Flex/CSS'
import propTypes from './propTypes'
import * as CSS from './CSS'
import * as defaultTheme from './defaultTheme'
import createComponent, {renderNodeFast} from '../createComponent'


const nodeType = View

export const BasicBox = createComponent({
  name: 'BasicBox',
  propTypes,
  CSS,
  themePath: 'box',
  defaultTheme
})

export const FlexBox = createComponent({
  name: 'Box',
  propTypes: {...flexPropTypes, ...propTypes},
  CSS: {...flexCSS, ...CSS},
  themePath: 'box',
  defaultTheme
})

export const ScrollBox = React.forwardRef(
  function ScrollBox (props, innerRef) {
    return FlexBox({
      innerRef,
      ...props,
      children: function (boxProps) {
        boxProps.nodeType = ScrollView
        boxProps.children = props.children
        return renderNodeFast(boxProps)
      }
    })
  }
)

export default React.forwardRef(
  function Box (props, innerRef) {
    return FlexBox({
      innerRef,
      ...props,
      children: function (boxProps) {
        boxProps.nodeType = boxProps.nodeType || nodeType
        boxProps.children = props.children
        return renderNodeFast(boxProps)
      }
    })
  }
)