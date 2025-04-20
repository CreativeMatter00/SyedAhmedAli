"use client"
import { SectionHeading } from "@/components/ui/section-heading"
import { MotionCard } from "@/components/ui/motion-card"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { AnimatedText } from "@/components/ui/animated-text"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <SectionHeading badge="About" title="Who I Am" />

        <div className="max-w-4xl mx-auto">
          <AnimatedText
            text="I'm Syed Ahmed Ali, a Chief Information Officer with over 15 years of experience in building scalable, secure, and user-centric technology solutions. My mission is to harness the power of technology to simplify complexity, drive digital transformation, and build resilient IT infrastructures that propel businesses forward."
            className="text-lg text-gray-700 mb-6 leading-relaxed"
            type="words"
            staggerChildren={0.01}
          />

          <AnimatedText
            text="As a hands-on tech strategist and leader, I've guided organizations through digital transformations, implemented enterprise-wide systems, and developed innovative solutions that align with business objectives. Whether it's cloud migration, cybersecurity enhancement, or AI implementation — I bring strategic vision, technical expertise, and business acumen to every challenge."
            className="text-lg text-gray-700 mb-6 leading-relaxed"
            type="words"
            staggerChildren={0.01}
            delay={0.2}
          />

          <StaggerContainer
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
            staggerDelay={0.1}
            initialDelay={0.3}
          >
            <MotionCard
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-navy-800 mb-2">Vision</h3>
              <p className="text-gray-600">
                Leveraging technology to create sustainable business value and competitive advantage.
              </p>
            </MotionCard>

            <MotionCard
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-navy-800 mb-2">Approach</h3>
              <p className="text-gray-600">
                Strategic planning with pragmatic execution, balancing innovation with operational excellence.
              </p>
            </MotionCard>

            <MotionCard
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-navy-800 mb-2">Philosophy</h3>
              <p className="text-gray-600">
                Technology should enable business goals, enhance user experience, and drive measurable outcomes.
              </p>
            </MotionCard>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
