/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React from "react"

import { motion, type MotionProps } from "framer-motion"
import type { ReactNode } from "react"

interface StaggerContainerProps extends MotionProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  initialDelay?: number
  once?: boolean
  amount?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  initialDelay = 0,
  once = true,
  amount = 0.3,
  direction = "up",
  distance = 20,
  ...props
}: StaggerContainerProps) {
  // Container variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  }

  // Calculate initial position based on direction for children
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

  // Child variants
  const item = {
    hidden: { opacity: 0, ...getInitialPosition() },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.5,
      },
    },
  }

  // Clone children and add variants
  const childrenWithVariants = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        variants: item,
      })
    }
    return child
  })

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      className={className}
      {...props}
    >
      {childrenWithVariants}
    </motion.div>
  )
}
