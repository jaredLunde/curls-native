import React from 'react'

const DimensionsContext = React.createContext({width: 0, height: 0})
export default DimensionsContext
export const DimensionsConsumer = DimensionsContext.Consumer