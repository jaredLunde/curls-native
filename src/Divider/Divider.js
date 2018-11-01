import React from 'react'
import {View} from 'react-native'
import {css} from '@emotion/primitives'
import createComponent, {renderNode} from '../createComponent'
import {BasicBox} from '../Box'
import {w, h} from '../Box/CSS'
import {alignSelf} from '../Flex/CSS'
import * as defaultTheme from './defaultTheme'


const nodeType = View
const defaultCSS = css`
  ${alignSelf('stretch')};
  ${h(1)};
`
const SFC = createComponent({
  name: 'Divider',
  defaultTheme,
  themePath: 'divider'
})

export default React.forwardRef(
  function Divider (props, innerRef) {
    return SFC({
      innerRef,
      ...props,
      children: function (boxProps) {
        boxProps.children = function (nodeProps) {
          nodeProps.children = props.children
          nodeProps.nodeType = nodeProps.nodeType || nodeType
          return renderNode(nodeProps, defaultCSS)
        }

        return BasicBox(boxProps)
      }
    })
  }

)
