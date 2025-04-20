"use client"

import { SectionHeading } from "@/components/ui/section-heading"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { MotionCard } from "@/components/ui/motion-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Syed's strategic vision and technical expertise transformed our IT infrastructure. His leadership was instrumental in our successful digital transformation journey.",
      name: "Sarah Johnson",
      title: "CEO, Global Innovations Inc.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Working with Syed was a game-changer. His ability to simplify complex systems and lead teams is unmatched. He delivered our cloud migration project ahead of schedule and under budget.",
      name: "Michael Chen",
      title: "CTO, TechForward Solutions",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Syed brings a rare blend of visionary leadership and deep technical knowledge. His strategic guidance helped us navigate complex technology decisions with confidence.",
      name: "Priya Sharma",
      title: "Board Member & Investor",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "As our CIO, Syed revolutionized our approach to technology. His focus on business outcomes and user experience created measurable impact across the organization.",
      name: "David Rodriguez",
      title: "COO, Enterprise Systems Ltd.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-navy-900 text-white w-full">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Testimonials" title="What Partners Say" light={true} />

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.15} initialDelay={0.2}>
          {testimonials.map((testimonial, index) => (
            <MotionCard
              key={index}
              className="bg-navy-800 p-6 rounded-lg border border-navy-700"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
              direction={index % 2 === 0 ? "up" : "down"}
              distance={20}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <svg className="h-8 w-8 text-amber-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-300 italic mb-4">{testimonial.quote}</p>
                </div>
                <div className="mt-auto flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </MotionCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
