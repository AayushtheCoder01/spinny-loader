import React from 'react'

type PropsTypes = {
    children: React.ReactNode
}

const SimpleLoader = ({children}: PropsTypes) => {
  return (<div>
    {children}
  </div>
  )
}

export default SimpleLoader