import {css} from '@emotion/primitives'
import {toSize} from '../utils'

export const flex = css`display: flex;`
export const fixed = css`flex: 0 0 auto;`
export const fluid = css`
  flex: 1 1 auto;
`

export function grow (value) {
  return css`flex-grow: ${value === true ? 1 : value};`
}

export function shrink (value) {
  return css`flex-shrink: ${value === true ? 1 : value};`
}

export function basis (value) {
  return css`flex-basis: ${toSize(value)};`
}

export function order (value) {
  return css`order: ${value};`
}

const rowCSS = css`flex-direction: row;`
const row_ = {
  [true]: rowCSS,
  row: rowCSS,
  reverse: css`flex-direction: row-reverse;`
}

export function row (v) {
  return row_[v]
}

const columnCSS = css`flex-direction: column;`

const column_ = {
  [true]: columnCSS,
  column: columnCSS,
  reverse: css`flex-direction: column-reverse;`
}

export function column (v) {
  return column_[v]
}

const wrapCSS = css`flex-wrap: wrap;`
const wrap_ = {
  [true]: wrapCSS,
  wrap: wrapCSS,
  no: css`flex-wrap: nowrap;`,
  reverse: css`flex-wrap: wrap-reverse;`,
}

export function wrap(v) {
  return wrap_[v]
}

const justify_ = {
  start: css`justify-content: flex-start;`,
  end: css`justify-content: flex-end;`,
  center: css`justify-content: center;`,
  around: css`justify-content: space-around;`,
  between: css`justify-content: space-between;`,
}

export function justify (v) {
  return justify_[v]
}

const align_ = {
  start: css`align-items: flex-start;`,
  end: css`align-items: flex-end;`,
  center: css`align-items: center;`,
  stretch: css`align-items: stretch;`,
  baseline: css`align-items: baseline;`,
}

export function align (v) {
  return align_[v]
}

const alignContent_ = {
  start: css`align-content: flex-start;`,
  end: css`align-content: flex-end;`,
  center: css`align-content: center;`,
  stretch: css`align-content: stretch;`,
  between: css`align-content: space-between;`,
  around: css`align-content: space-around;`,
}

export function alignContent (v) {
  return alignContent_[v]
}

const alignSelf_ = {
  start: css`align-self: flex-start;`,
  end: css`align-self: flex-end;`,
  center: css`align-self: center;`,
  stretch: css`align-self: stretch;`,
  baseline: css`align-self: baseline;`
}

export function alignSelf (v) {
  return alignSelf_[v]
}