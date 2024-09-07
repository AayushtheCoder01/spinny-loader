import React from 'react'
import { motion } from 'framer-motion'

export type PulseSphereProps = {
    size?: string,
    color?: string,
    fillcolor?: string
}
const PulseSphere = ({size = "30px", color="#1c64f2", fillcolor="transparent"}: PulseSphereProps) => {

    return (
      <>
      <motion.div 
        style={
          {
            height: size,
            width: size,
            border: `3px solid ${color}`,
            borderRadius: "100%",
            backgroundColor: `${fillcolor}`
          } as React.CSSProperties}
        // className="pusle-sphere"
        initial={{scale: 0.5, x: 0}}
        animate={{
          scale: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0
        }}
      />    
        </>
    )
}

export default PulseSphere