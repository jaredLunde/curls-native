import React from 'react'
import {TouchableOpacity} from 'react-native'
import {css} from '@emotion/primitives'
import {FlexBox} from '../Box'
import {flex, row, align, justify} from '../Flex/CSS'
import createComponent, {renderNode} from '../createComponent'
import propTypes from './propTypes'
import * as CSS from './CSS'
import * as defaultTheme from './defaultTheme'


const nodeType = TouchableOpacity
const defaultCSS = css`
  ${flex};
  ${row(true)};
  ${align('center')};
  ${justify('center')};
`
const SFC = createComponent({
  name: 'Button',
  propTypes,
  CSS,
  defaultTheme,
  themePath: 'button'
})

export default React.forwardRef(
  function Button ({style, ...props}, innerRef) {
    return SFC({
      innerRef,
      ...props,
      children: function (boxProps) {
        // this is done so css in defaultTheme.sizes can be overridden
        const sfcStyle = boxProps.style
        // this is done so css in defaultTheme.sizes can be overridden
        boxProps.style = style
        boxProps.children = function (nodeProps) {
          nodeProps.children = props.children
          nodeProps.nodeType = nodeProps.nodeType || nodeType

          return renderNode(nodeProps, [defaultCSS, sfcStyle])
        }

        return FlexBox(boxProps)
      }
    })
  }
)
