import React from 'react'

export type SpinnyWrapperProps = {
  children?: React.ReactNode,
  backgroundEffect?: boolean
}
const SpinnyWrapper = ({children = "<div>Loading...</div>", backgroundEffect = false} : SpinnyWrapperProps) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: `${backgroundEffect? 'blur(10px)': "blur(0px)"}`,
        zIndex: 50
      }}
    >
        {children}
    </div>
  )
}

export default SpinnyWrapper