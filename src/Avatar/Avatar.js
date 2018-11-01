import React from 'react'
import {css} from '@emotion/primitives'
import {View, Image} from 'react-native'
import {FlexBox} from '../Box'
import createComponent, {renderNode} from '../createComponent'
import * as CSS from './CSS'
import propTypes from './propTypes'
import * as defaultTheme from './defaultTheme'


const nodeType = View
const defaultCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
const SFC = createComponent({
  name: 'Avatar',
  propTypes,
  defaultTheme,
  CSS,
  themePath: 'avatar'
})

class AvatarComponent extends React.PureComponent {
  state = {size: {width: 0, height: 0}, hasError: false}

  componentDidMount () {
    Image.getSize(this.props.source, this.setSize, this.setError)
  }

  componentDidUpdate ({source}) {
    if (source !== this.props.source) {
      Image.getSize(this.props.source, this.setSize, this.setError)
    }
  }

  setSize = (width, height) => this.setState({size: {width, height}, error: false})
  setError = () => this.setState({size: {width: 0, height: 0}, error: true})

  render () {
    const sfcProps = {
      ...this.props,
      nodeType,
      children: boxProps => {
        // adds child prop for 'Box' and rendering the avatar node
        boxProps.children = ({style, nodeType, innerRef, ...nodeProps}) => {
          let width, height

          if (this.state.size.width < this.state.size.height) {
            width = style.width
            height = (width / this.state.size.width) * this.state.size.height
          }
          else {
            height = style.height
            width = (height / this.state.size.height) * this.state.size.width
          }

          return renderNode(
            {
              style,
              nodeType,
              children: <Image
                {...nodeProps}
                ref={innerRef}
                style={{width, height}}
                source={
                  this.state.error
                    ? this.props.errorSource
                    : this.props.source
                }
              />
            },
            defaultCSS
          )
        }

        return FlexBox(boxProps)
      }
    }

    return SFC(sfcProps)
  }
}

export default React.forwardRef(
  function Avatar (props, innerRef) {
    return <AvatarComponent innerRef={innerRef} {...props}/>
  }
)
