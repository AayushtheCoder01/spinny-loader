import React from 'react'
import { motion } from 'framer-motion'
import "./simple.css"

export type SimpleLoaderProps = {
  size?: string
}
const SimpleLoader = ({ size="35px" } : SimpleLoaderProps) => {
  return (
    <>
    <motion.div 
      style={{height: size, width: size} as React.CSSProperties}
      className="simple-loader"
      initial={{
         scale: 1,
         x: 0,
      }}
      animate={
        {
          scale: 1,
          x: 0,
          rotate: 360,
        }
      }
      transition={
          {
            duration: 0.8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0
          }
        }
    />    
      </>
  )
}

export default SimpleLoader