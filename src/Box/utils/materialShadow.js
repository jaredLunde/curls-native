export default function (dp, theme) {
  dp = parseInt(dp)

  if (dp === 0) {
    return
  }

  const ambientY = dp * 0.618
  let ambientAlpha = (dp + 10) / 100
  ambientAlpha = ambientAlpha > 0.16 ? 0.16 : ambientAlpha
  const ambientBlur = dp === 1 ? 3 : dp * 0.618

  return {
    shadowColor: '#444',
    shadowOffset: {
      width: 0,
      height: ambientY,
    },
    shadowOpacity: ambientAlpha,
    shadowRadius: ambientBlur
  }
}
