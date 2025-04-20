/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { motion, type MotionProps } from "framer-motion"
import type { ReactNode } from "react"

interface MotionCardProps extends MotionProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  hoverScale?: number
  hoverRotate?: number
  hoverElevation?: boolean
  once?: boolean
  amount?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  onClick?: any
}

export function MotionCard({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  hoverScale = 1.02,
  hoverRotate = 0,
  hoverElevation = true,
  once = true,
  amount = 0.3,
  direction = "up",
  distance = 20,
  ...props
}: MotionCardProps) {
  // Calculate initial position based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance }
      case "down":
        return { y: -distance }
      case "left":
        return { x: distance }
      case "right":
        return { x: -distance }
      case "none":
      default:
        return {}
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialPosition() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        scale: hoverScale,
        rotate: hoverRotate,
        boxShadow: hoverElevation ? "0 10px 25px rgba(0, 0, 0, 0.1)" : undefined,
        transition: { duration: 0.2 },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
