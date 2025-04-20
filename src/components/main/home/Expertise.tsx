"use client"

import { motion } from "framer-motion"
import { Lightbulb, Globe, Server, Database, Code, Users } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { MotionCard } from "@/components/ui/motion-card"
import { AnimatedText } from "@/components/ui/animated-text"

export function ExpertiseSection() {
  const services = [
    {
      icon: <Lightbulb className="text-amber-400 h-6 w-6" />,
      title: "IT Strategy & Governance",
      description:
        "Developing comprehensive IT strategies aligned with business goals, establishing governance frameworks, and optimizing IT investments.",
    },
    {
      icon: <Globe className="text-amber-400 h-6 w-6" />,
      title: "Digital Transformation",
      description:
        "Leading organizations through digital transformation journeys, modernizing legacy systems, and implementing innovative solutions.",
    },
    {
      icon: <Server className="text-amber-400 h-6 w-6" />,
      title: "Cloud Strategy & Migration",
      description:
        "Designing and implementing cloud strategies, managing migrations, and optimizing cloud infrastructure for performance and cost.",
    },
    {
      icon: <Database className="text-amber-400 h-6 w-6" />,
      title: "Data & Analytics",
      description:
        "Implementing data strategies, building analytics capabilities, and leveraging insights to drive business decisions and outcomes.",
    },
    {
      icon: <Code className="text-amber-400 h-6 w-6" />,
      title: "Enterprise Architecture",
      description:
        "Designing scalable, secure, and efficient enterprise architectures that support business objectives and enable growth.",
    },
    {
      icon: <Users className="text-amber-400 h-6 w-6" />,
      title: "IT Leadership & Team Building",
      description:
        "Building high-performing IT teams, developing talent, and fostering a culture of innovation and continuous improvement.",
    },
  ]

  return (
    <section id="expertise" className="py-20 bg-navy-900 text-white w-full">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Expertise"
          title="What I Do"
          light={true}
          subtitle={`"From strategy to execution, I align technology with business vision."`}
        />

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
          initialDelay={0.2}
        >
          {services.map((service, index) => (
            <MotionCard
              key={index}
              className="bg-navy-800 border border-navy-700 hover:border-amber-500 transition-all duration-300 p-6 rounded-lg"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.2 },
              }}
              direction={index % 2 === 0 ? "up" : "down"}
              distance={15}
            >
              <motion.div
                className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4"
                whileHover={{
                  rotate: [0, 10, -10, 0],
                  transition: { duration: 0.5 },
                }}
              >
                {service.icon}
              </motion.div>
              <AnimatedText
                text={service.title}
                className="text-xl font-semibold mb-3 text-white"
                as="h3"
                type="words"
                delay={0.1}
              />
              <p className="text-gray-300">{service.description}</p>
            </MotionCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
