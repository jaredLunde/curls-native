import React from 'react'
import {TextInput} from 'react-native'
import createComponent from '../createComponent'
import Type from '../Type'
import propTypes from './propTypes'
import * as defaultTheme from './defaultTheme'


const nodeType = TextInput
const SFC = createComponent({name: 'Input', defaultTheme, propTypes, themePath: 'input'})

export default React.forwardRef(
  function Input (props, innerRef) {
    return SFC({
      innerRef,
      ...props,
      children: function (typeProps) {
        typeProps.nodeType = TextInput
        return React.createElement(Type, typeProps)
      }
    })
  }

)
