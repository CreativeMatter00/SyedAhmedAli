"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedText } from "@/components/ui/animated-text"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  // Parallax effects for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  return (
    <section
      id="home"
      ref={heroRef}
      className="w-full relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden bg-gradient-to-br from-navy-900 to-navy-800 text-white"
    >
      {/* Animated background particles */}
      <AnimatedBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div className="md:w-2/3 mb-10 md:mb-0" style={{ y, opacity }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="mb-6 bg-amber-500/20 text-amber-300 hover:bg-amber-500/20">
                Chief Information Officer
              </Badge>
            </motion.div>

            <AnimatedText
              text={["Driving Innovation.", "Building Digital Excellence."]}
              type="words"
              highlightWords={["Digital", "Excellence"]}
              highlightClassName="text-amber-400"
              className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
              as="h1"
              delay={0.4}
              staggerChildren={0.05}
            />

            <AnimatedText
              text="Strategic Technology Leadership | Enterprise Architecture | Digital Transformation"
              className="text-xl md:text-2xl text-gray-300 mb-8"
              delay={0.8}
              type="words"
            />

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white" asChild>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Get in Touch
                </motion.a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:text-white hover:bg-white/10" asChild>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  View Projects
                </motion.a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/3 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            style={{ scale }}
          >
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-amber-400 shadow-xl"
              animate={{
                boxShadow: [
                  "0px 0px 0px rgba(251, 191, 36, 0.4)",
                  "0px 0px 30px rgba(251, 191, 36, 0.7)",
                  "0px 0px 0px rgba(251, 191, 36, 0.4)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Image src="/images/cio.webp" alt="Syed Ahmed Ali" fill className="object-cover" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-amber-500/10"
            style={{
              width: Math.random() * 100 + 20,
              height: Math.random() * 100 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, Math.random() * 0.3 + 1, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>
  )
}
