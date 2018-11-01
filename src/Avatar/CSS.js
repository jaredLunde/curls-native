import {css} from '@emotion/primitives'
import {toSize} from '../utils'


function getAvatarSize (size, val, theme) {
  if (val === false) return null;

  return css`
    width: ${toSize(theme.scale[size])};
    height: ${toSize(theme.scale[size])};
  `
}

export function xxs (v, t) {
  return getAvatarSize('xxs', v, t)
}

export function xs (v, t) {
  return getAvatarSize('xs', v, t)
}

export function sm (v, t) {
  return getAvatarSize('sm', v, t)
}

export function md (v, t) {
  return getAvatarSize('md', v, t)
}

export function lg (v, t) {
  return getAvatarSize('lg', v, t)
}

export function xl (v, t) {
  return getAvatarSize('xl', v, t)
}

export function xxl (v, t) {
  return getAvatarSize('xxl', v, t)
}