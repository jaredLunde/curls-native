import React from 'react'
import {Dimensions} from 'react-native'
import DimensionsContext from './DimensionsContext'


export default class DimensionsProvider extends React.Component {
  constructor (props) {
    super(props)
    this.state = Dimensions.get(props.observe || 'window')
  }

  componentDidMount () {
    Dimensions.addEventListener('change', this.setDimensions)
  }

  componentWillUnmount () {
    Dimensions.removeEventListener('change', this.setDimensions)
  }

  setDimensions = () => this.setState(Dimensions.get(this.props.observe || 'window'))

  render () {
    return (
      <DimensionsContext.Provider value={this.state}>
        {this.props.children}
      </DimensionsContext.Provider>
    )
  }
}