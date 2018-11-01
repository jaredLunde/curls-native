import {bool, string, number, oneOfType} from 'prop-types'


export default {
  // Sizes
  xxs: bool,
  xs: bool,
  sm: bool,
  md: bool,
  lg: bool,
  xl: bool,
  xxl: bool,
  size: string,
  // Weights
  thin: bool,
  ultraLight: bool,
  light: bool,
  regular: bool,
  medium: bool,
  semiBold: bool,
  bold: bool,
  heavy: bool,
  ultraHeavy: bool,
  // Alignment
  left: bool,
  center: bool,
  right: bool,
  // Color
  color: string,
  // Typeface
  face: string,
  // line-height
  lh: oneOfType([string, number])
}
