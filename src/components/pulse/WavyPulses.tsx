import React from 'react'
import {motion} from 'framer-motion'

export type WavyPulsesProps = {
  color?: string,
  size?: string,
}
export const WavyPulses= ({color = "#1c64f2", size = "5px"}) => {
  return (
    <div style={{padding: "5px", width: 'auto', height: 'auto', display: "flex", justifyContent: "center", alignItems: "center"}}>
      
    <motion.div 
      style={{height: size,margin: "3px", width: size, backgroundColor: color, borderRadius:  '20px 20px  20px 20px'} as React.CSSProperties}
      initial={{
        scale: 1,
        x: 0,
        opacity: 1
      }}
      animate={
        {
          scale: 1,
          y: [0, -10, 0]
        }
      }
      transition={
        {
          duration: .8,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatDelay: 0,
          }
        }
        />    
    <motion.div 
      style={{height: size, margin: "3px", width: size, backgroundColor: color, borderRadius:  '20px 20px  20px 20px'} as React.CSSProperties}
      initial={{
        scale: 1,
        x: 0,
        opacity: 1
      }}
      animate={
        {
          scale: 1,
          y: [0, -10, 0]
        }
      }
      transition={
        {
          duration: 0.8,
          ease: "easeInOut",
          times: [0, 0.7, 1],
          repeat: Infinity,
          repeatDelay: 0,
          }
        }
        />    
    <motion.div 
      style={{height: size,margin: "3px", width: size, backgroundColor: color, borderRadius:  '20px 20px  20px 20px'} as React.CSSProperties}
      initial={{
        scale: 1,
        x: 0,
        opacity: 1
      }}
      animate={
        {
          scale: 1,
          y: [0, -9, 0]
        }
      }
      transition={
        {
          duration: .8,
          ease: "easeInOut",
          times: [0, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 0,
          }
        }
        />    
    </div>
  )
}
