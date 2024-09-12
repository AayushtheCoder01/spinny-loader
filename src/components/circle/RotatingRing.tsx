import React from 'react'
import { motion } from 'framer-motion'

export type RotatingRingProps = {
    size?: string
    color?: string
    lineWidth?: string
    speed?: number
}
export const RotatingRing = ({size= "25px", color = "#1c64f2", lineWidth = "2px", speed = .7} : RotatingRingProps) => {
  return (
    <div style={{ padding: "5px", width: "auto", height: "auto"}}>
        <motion.div 
    style={{ height: size, width: size, background: "transparent", border: `${lineWidth} solid ${color}`,borderTop: `${lineWidth} solid transparent`, borderRadius: "100%"} as React.CSSProperties}
      initial={{
        scale: 1,
        x: 0,
        opacity: 1
      }}
      animate={
        {
          scale: 1,
          rotate: 360
        }
      }
      transition={
        {
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 0,
          }
        }
        />  
    </div>     
  )
}
