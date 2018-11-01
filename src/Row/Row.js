import React from 'react'
import {View} from 'react-native'
import {css} from '@emotion/primitives'
import {flex, row, wrap, alignSelf} from '../Flex/CSS'
import {FlexBox} from '../Box'
import createComponent, {renderNode} from '../createComponent'


const nodeType = View
const defaultCSS = css`
  ${flex};
  ${row(true)};
  ${wrap(true)};
`
const SFC = createComponent({name: 'Row', themePath: 'row'})

export default React.forwardRef(
  function Row (props, innerRef) {
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
