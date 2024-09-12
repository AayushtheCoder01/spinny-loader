
import React from 'react'
import { motion } from 'framer-motion'

export type SimpleLoaderProps = {
  size?: string
}
const SimpleLoader = ({ size="35px" } : SimpleLoaderProps) => {
  return (
    <>
    <div style={{padding: "5px", width: 'auto', height: 'auto'}}>

    </div>
    <motion.div 
      style={{height: size, width: size, borderRadius: "100%", backgroundColor: "transparent", border: "7px solid rgba(0, 0, 0, 0.193)",  borderTop: "7px solid #3498db"} as React.CSSProperties}
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
