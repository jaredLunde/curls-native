import {css} from '@emotion/primitives'
import {directionalScale, isDirectional, colorize, toSize} from '../utils'


const pos_ = {
  relative: css`position: relative;`,
  absolute: css`position: absolute;`,
}

export function pos (val) {
  return pos_[val]
}

const d_ = {
  none: css`display: none;`
}

export function d (val) {
  return d_[val]
}

export function z (value) {
  if (value === false) return null;
  return css`z-index: ${value};`
}


export function bg (value, theme) {
  if (value === false) return null;
  return colorize('background-color', value, theme)
}


export function sh (value, theme) {
  if (value === false) return null;

  return theme.getBoxShadow(value, theme)
}


export function bc (value, theme) {
  if (value === false) return null;
  return colorize('border-color', value, theme)
}


export function bw (value, theme) {
  if (value === false) return null;
  const {borderWidthScale} = theme

  if (isDirectional(value)) {
    return css`
      border-style: solid;
      ${directionalScale('border-{XYZ}-width', borderWidthScale, value, theme)};
    `
  } else {
    return css`
      border-style: solid;
      border-width: ${toSize(borderWidthScale[value])};
    `
  }
}

export function w (value) {
  if (value === false) return null;
  return css`width: ${toSize(value)};`;
}

export function h (value) {
  if (value === false) return null;
  return css`height: ${toSize(value)};`;
}

export function t (value) {
  if (value === false) return null;
  return css`top: ${toSize(value)};`;
}

export function r (value) {
  if (value === false) return null;
  return css`right: ${toSize(value)};`;
}

export function b (value) {
  if (value === false) return null;
  return css`bottom: ${toSize(value)};`;
}

export function l (value) {
  if (value === false) return null;
  return css`left: ${toSize(value)};`;
}

export function minW (value) {
  return css`min-width: ${toSize(value)};`;
}

export function minH (value) {
  return css`min-height: ${toSize(value)};`;
}

export function maxW (value) {
  return css`max-width: ${toSize(value)};`;
}

export function maxH (value) {
  return css`max-height: ${toSize(value)};`;
}

const borderRadiusDirections = {
  t: ['top-right', 'top-left'],
  r: ['top-right', 'bottom-right'],
  b: ['bottom-right', 'bottom-left'],
  l: ['top-left', 'bottom-left'],
  tl: ['top-left'],
  tr: ['top-right'],
  br: ['bottom-right'],
  bl: ['bottom-left']
}


export function br (value, theme) {
  if (value === false) return null;
  const {borderRadiusScale} = theme

  if (isDirectional(value)) {
    return css`
      ${directionalScale(
        'border-{XYZ}-radius',
        borderRadiusScale,
        value,
        theme,
        borderRadiusDirections
      )};
    `
  } else {
    return css`border-radius: ${toSize(borderRadiusScale[value])};`
  }
}


export function m (value, theme) {
  if (value === false) return null;
  const {spacingScale} = theme

  if (isDirectional(value)) {
    return directionalScale('margin-{XYZ}', spacingScale, value, theme)
  } else {
    return css`margin: ${toSize(spacingScale[value])};`
  }
}


export function p (value, theme) {
  if (value === false) return null;
  const {spacingScale} = theme

  if (isDirectional(value)) {
    return directionalScale('padding-{XYZ}', spacingScale, value, theme)
  } else {
    return css`padding: ${toSize(spacingScale[value])};`
  }
}

const _ov = {
  hidden: {overflow: 'hidden'},
  visible: {overflow: 'visible'},
  scroll: {overflow: 'scroll'}
}

export function ov (val) {
  return _ov[val]
}