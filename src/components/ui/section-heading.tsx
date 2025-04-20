"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface SectionHeadingProps {
  badge: string
  title: string
  subtitle?: string
  center?: boolean
  light?: boolean
  className?: string
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
  light = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`max-w-3xl mx-auto mb-16 ${center ? "text-center" : "text-left"} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      <Badge
        className={`mb-4 ${
          light
            ? "bg-amber-500/20 text-amber-300 hover:bg-amber-500/20"
            : "bg-amber-100 text-amber-800 hover:bg-amber-100"
        }`}
      >
        {badge}
      </Badge>
      <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${light ? "text-white" : "text-navy-900"}`}>{title}</h2>
      <motion.div
        className={`w-20 h-1 ${center ? "mx-auto" : "ml-0"} bg-amber-500 mb-8`}
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      ></motion.div>
      {subtitle && (
        <p className={`text-lg ${light ? "text-gray-300" : "text-gray-600"} max-w-3xl mx-auto`}>{subtitle}</p>
      )}
    </motion.div>
  )
}
