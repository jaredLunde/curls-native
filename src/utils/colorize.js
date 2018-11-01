import {camelCase} from 'change-case'


export default function colorize (property, color, theme) {
  return {[camelCase(property)]: theme.colors[color] || color}
}
