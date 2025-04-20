"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  from: number
  to: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  formatter?: (value: number) => string
  className?: string
  once?: boolean
  threshold?: number
  easing?: (t: number) => number
}

// Easing functions
const easings = {
  linear: (t: number) => t,
  easeOutQuad: (t: number) => t * (2 - t),
  easeOutCubic: (t: number) => --t * t * t + 1,
  easeOutQuart: (t: number) => 1 - --t * t * t * t,
  easeOutQuint: (t: number) => 1 + --t * t * t * t * t,
  easeOutExpo: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  easeOutElastic: (t: number) => {
    const c4 = (2 * Math.PI) / 3
    return t === 0 ? 0 : t === 1 ? 1 : Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1
  },
}

export function AnimatedCounter({
  from,
  to,
  duration = 2.5,
  delay = 0,
  prefix = "",
  suffix = "",
  // formatter = (value) => value.toString(),
  className = "",
  once = true,
  threshold = 0.5,
  easing = easings.easeOutExpo,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(from)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!isInView || hasAnimated) return

    let startTime: number
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      const easedProgress = easing(progress)

      // Handle decimal values appropriately
      const currentCount = from + easedProgress * (to - from)
      const roundedCount = to % 1 !== 0 ? currentCount : Math.floor(currentCount)

      setCount(roundedCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      } else {
        setCount(to)
        setHasAnimated(true)
      }
    }

    const startAnimation = () => {
      animationFrame = requestAnimationFrame(step)
    }

    const timeoutId = setTimeout(startAnimation, delay * 1000)

    return () => {
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationFrame)
    }
  }, [from, to, duration, delay, isInView, hasAnimated, easing])

  return (
    <div ref={ref} className={className}>
      {prefix}
      {to % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </div>
  )
}
