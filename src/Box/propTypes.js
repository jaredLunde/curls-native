import {bool, string, number, oneOf, oneOfType} from 'prop-types'


const strOrNum = oneOfType([number, string])

export default {
  // background-color
  bg: string,
  // border radius
  br: strOrNum,
  // border width
  bw: strOrNum,
  // border color
  bc: string,
  // box-shadow
  sh: strOrNum,
  // margin
  m: strOrNum,
  // padding
  p: strOrNum,
  // position
  pos: oneOf(['relative', 'absolute']),
  // display
  d: oneOf(['none']),
  // z-index
  z: number,
  // width: __
  w: strOrNum,
  // height: __
  h: strOrNum,
  // top
  t: strOrNum,
  // right
  r: strOrNum,
  // bottmo
  b: strOrNum,
  // left
  l: strOrNum,
  // overflow
  ov: oneOf(['scroll', 'hidden', 'scroll']),
  // min-width
  minW: strOrNum,
  // min-height
  minH: strOrNum,
  // max-width
  maxW: strOrNum,
  // max-height
  maxH: strOrNum,
}
