"use client"

import type React from "react"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedTextProps {
  text: string | string[]
  className?: string
  delay?: number
  duration?: number
  staggerChildren?: number
  type?: "words" | "chars" | "lines"
  once?: boolean
  amount?: number
  highlightWords?: string[]
  highlightClassName?: string
  as?: React.ElementType
  children?: ReactNode
}

export function AnimatedText({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
  staggerChildren = 0.03,
  type = "words",
  once = true,
  amount = 0.3,
  highlightWords = [],
  highlightClassName = "text-amber-500",
  as: Component = "p",
  children,
}: AnimatedTextProps) {
  // Handle array of strings for multi-line text
  const textArray = Array.isArray(text) ? text : [text]

  // Container variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delay * i,
      },
    }),
  }

  // Child variants with spring physics
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration,
      },
    },
  }

  // Check if a word should be highlighted
  const shouldHighlight = (word: string) => {
    return highlightWords.includes(word.replace(/[.,!?;:]/g, ""))
  }

  // Process text based on type
  const renderAnimatedText = (line: string, lineIndex: number) => {
    if (type === "chars") {
      const chars = line.split("")
      return chars.map((char, index) => (
        <motion.span
          key={`${lineIndex}-${index}`}
          variants={child}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))
    } else if (type === "words") {
      const words = line.split(/\s+/)
      return words.map((word, index) => (
        <motion.span
          key={`${lineIndex}-${index}`}
          variants={child}
          className={shouldHighlight(word) ? highlightClassName : ""}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {word}
          {index !== words.length - 1 ? " " : ""}
        </motion.span>
      ))
    } else {
      // Lines
      return (
        <motion.div key={lineIndex} variants={child}>
          {line}
        </motion.div>
      )
    }
  }

  return (
    <Component className={className}>
      <motion.div
        style={{ overflow: "hidden" }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount }}
      >
        {textArray.map((line, lineIndex) => renderAnimatedText(line, lineIndex))}
        {children}
      </motion.div>
    </Component>
  )
}
