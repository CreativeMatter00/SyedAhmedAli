"use client"

import { SectionHeading } from "@/components/ui/section-heading"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { MotionCard } from "@/components/ui/motion-card"
import { AnimatedCounter } from "@/components/ui/animated-counter"


export function AchievementsSection() {
  const achievements = [
    { value: 15, label: "Years leading IT teams and initiatives" },
    { value: 50, prefix: "$", suffix: "M+", label: "Technology budget managed" },
    { value: 30, suffix: "%", label: "Average cost reduction achieved" },
    { value: 12, suffix: "+", label: "Enterprise systems implemented" },
    { value: 5, label: "Digital transformation initiatives led" },
    { value: 99.9, suffix: "%", label: "System uptime maintained" },
  ]

  return (
    <section className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Achievements" title="Key Highlights" />

        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10"
          staggerDelay={0.1}
          initialDelay={0.2}
        >
          {achievements.map((stat, index) => (
            <MotionCard
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg border border-gray-100"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              direction={index % 2 === 0 ? "up" : "down"}
              distance={15}
            >
              <AnimatedCounter
                from={0}
                to={stat.value}
                prefix={stat.prefix || ""}
                suffix={stat.suffix || ""}
                className="text-3xl md:text-4xl font-bold text-amber-600 mb-2"
                duration={2.5}
                easing={(t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))} // easeOutExpo
              />
              <p className="text-gray-700">{stat.label}</p>
            </MotionCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
