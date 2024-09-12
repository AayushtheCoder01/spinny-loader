import React from 'react'
import { motion } from "framer-motion"

export type ButterflyWaveProps = {
    width?: string,
    color?: string,
    speed?: number
}
export const ButterflyWave = ({width = "5px", color = "#1c64f2", speed = .6}: ButterflyWaveProps) => {
  return (
    <div style={{ padding: "5px", display: "flex", justifyContent: "center", alignItems: "center", width: "auto", height: "auto"}}>
          <motion.div 
          style={{height: "35px", width: width,borderRadius: '3px', background: color, margin: "3px"} as React.CSSProperties}
            initial={{
              opacity: 1,
            }}
            animate={
              {
                scale: [1.2, 1, 1, 1, 1],
              }
            }
            transition={
              {
                duration: speed,
                ease: "linear",
                times: [0,0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0,
                repeatType: "reverse",
                }
              }
              />  
              <motion.div 
          style={{height: "25px", width: width,borderRadius: '3px', background: color, margin: "3px"} as React.CSSProperties}
            initial={{
              opacity: 1,
            }}
            animate={
              {
                scale: [1, 1.2, 1, 1, 1],
              }
            }
            transition={
              {
                duration: speed,
                ease: "linear",
                times: [0,0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0,
                repeatType: "reverse",
                }
              }
              />   

          <motion.div 
          style={{height: "12px", width: width, borderRadius: '3px', background: color, margin: "3px"} as React.CSSProperties}
            initial={{
              x: 0,
              opacity: 1,
            }}
            animate={
              {
                scale: [1, 1, 1.2, 1, 1],
              }
            }
            transition={
              {
                duration: speed,
                ease: "linear",
                times: [0,0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0,
                repeatType: "reverse",
                }
              }
              />     
          <motion.div 
          style={{height: "25px", width: width, borderRadius: '3px', background: color, margin: "3px"} as React.CSSProperties}
            initial={{
              opacity: 1,
            }}
            animate={
              {
                scale: [1, 1, 1, 1.2, 1],
              }
            }
            transition={
              {
                duration: speed,
                ease: "linear",
                times: [0,0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0,
                repeatType: "reverse",
                }
              }
              />     
          <motion.div 
          style={{height: "35px", width: width, borderRadius: '3px', background: color, margin: "3px"} as React.CSSProperties}
            initial={{
              opacity: 1,
            }}
            animate={
              {
                scale: [1, 1, 1, 1, 1.2],
                borderRadius: '3px'
              }
            }
            transition={
              {
                duration: speed,
                ease: "linear",
                times: [0,0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0,
                repeatType: "reverse",
                }
              }
              />   
                </div>
  )
}

