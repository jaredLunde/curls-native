export default function getStyles (props, theme, CSS) {
  const styles = []
  const propKeys = Object.keys(props)

  for (let x = 0; x < propKeys.length; x++) {
    const propName = propKeys[x]
    const getCSS = CSS[propName]

    if (getCSS === void 0) continue;
    const propVal = props[propName]

    if (propVal !== void 0/*&& propVal !== false*/) {
      const typeofCSS = typeof getCSS

      const result = (
        typeofCSS === 'object'
          ? propVal === false
            ? void 0
            : getCSS
          : getCSS(propVal, theme, props)
      )

      if (result === void 0 || result === null) {
        continue
      }
      else {
        styles.push(result)
      }
    }
  }

  if (styles.length === 0) {
    return
  }

  return {styles}
}
