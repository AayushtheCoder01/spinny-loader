import React from 'react'
import { motion } from 'framer-motion'

export type ScalingPulsesProps = {
    size?: string,
    color?: string,
    speed?: number
}
export const ScalingPulses = ({size= "10px", color= "#1c64f2", speed= .7}: ScalingPulsesProps) => {
  return (
    <div style={{ padding: "5px", width: "auto", height: "auto",display: "flex", justifyContent: "center", alignItems: "center"}}>
          <motion.div 
          style={{height: size, width: size, background: "#808080", borderRadius: "100%", margin: "4px"} as React.CSSProperties}
            initial={{
              scale: 1,
              x: 0,
              opacity: 1,
            }}
            animate={
              {
                scale: [1, 1.2, 1, 1, 1],
                backgroundColor:  ["#808080", color, "#808080", "#808080", "#808080"],
              }
            }
            transition={
              {
                duration: speed,
                ease: "linear",
                times: [0,0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0,
                }
              }
              />     
          <motion.div 
          style={{height: size, width: size, background: "gray", borderRadius: "100%"} as React.CSSProperties}
            initial={{
              scale: 1,
              x: 0,
              opacity: 1,
            }}
            animate={
              {
                scale: [1, 1, 1.2, 1, 1],
                backgroundColor:  ["#808080", "#808080", color, "#808080", "#808080"],
              }
            }
            transition={
              {
                duration: speed,
                ease: "linear",
                times: [0,0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0,
                }
              }
              />     
          <motion.div 
          style={{height: size, width: size, background: "gray", borderRadius: "100%", margin: "4px"} as React.CSSProperties}
            initial={{
              scale: 1,
              x: 0,
              opacity: 1,
            }}
            animate={
              {
                scale: [1, 1, 1, 1.2, 1],
                backgroundColor:  ["#808080", "#808080", "#808080", color,"#808080"],
              }
            }
            transition={
              {
                duration: speed,
                ease: "linear",
                times: [0,0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0,
                }
              }
              />     
        </div>
  )
}
