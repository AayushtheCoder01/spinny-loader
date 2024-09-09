import React from 'react'
import {motion} from 'framer-motion'
export type WavyBarsProps = {
    color?: string,
}
export const WavyBars = ({color = "#1c64f2"}: WavyBarsProps) => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>

    <motion.div 
      style={{height: "5px",margin: "2px", width: "5px", backgroundColor: color, borderRadius:  '20px 20px  20px 20px'} as React.CSSProperties}
      initial={{
        scale: 1,
        x: 0,
        opacity: 1
      }}
      animate={
        {
          scale: 1,
          height: ["5px", "30px", "5px"],
        }
      }
      transition={
        {
          duration: .8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0,
          }
        }
        />    
    <motion.div 
      style={{height: "5px",margin: "2px", width: "5px", backgroundColor: color, borderRadius:  '20px 20px  20px 20px'} as React.CSSProperties}
      initial={{
        scale: 1,
        x: 0,
        opacity: 1
      }}
      animate={
        {
          scale: 1,
          height: ["5px", "30px", "5px"],
        }
      }
      transition={
        {
          duration: .9,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0
          }
        }
        />    
    <motion.div 
      style={{height: "5px",margin: "2px", width: "5px", backgroundColor: color, borderRadius:  '20px 20px  20px 20px'} as React.CSSProperties}
      initial={{
        scale: 1,
        x: 0,
        opacity: 1
      }}
      animate={
        {
          scale: 1,
          height: ["5px", "30px", "5px"],
        }
      }
      transition={
        {
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0
          }
        }
        />    
        </div>
  )
}
