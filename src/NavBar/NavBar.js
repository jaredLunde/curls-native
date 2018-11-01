import React from 'react'
import {css} from '@emotion/primitives'
import {View} from 'react-native'
import {FlexBox} from '../Box'
import createComponent, {renderNode} from '../createComponent'
import {flex, row, wrap, align, justify} from '../Flex/CSS'
import * as defaultTheme from './defaultTheme'


const nodeType = View
const defaultCSS = css`
  ${flex};
  ${row(true)};
  ${wrap('no')};
  ${align('center')};
  ${justify('start')};
`
const SFC = createComponent({name: 'NavBar', defaultTheme, themePath: 'navBar'})

export default React.forwardRef(
  function NavBar (props, innerRef) {
    return SFC({
      innerRef,
      ...props,
      children: function (boxProps) {
        boxProps.children = function (nodeProps) {
          nodeProps.children = props.children
          nodeProps.nodeType = nodeProps.nodeType || nodeType
          return renderNode(nodeProps, defaultCSS)
        }

        return FlexBox(boxProps)
      }
    })
  }
)
