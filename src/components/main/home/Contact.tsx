"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Briefcase, ExternalLink } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { MotionCard } from "@/components/ui/motion-card"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail className="h-5 w-5 text-amber-600" />,
      title: "Email",
      value: "syed.ahmed.ali@example.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-amber-600" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: <MapPin className="h-5 w-5 text-amber-600" />,
      title: "Location",
      value: "San Francisco, California",
    },
    {
      icon: <Briefcase className="h-5 w-5 text-amber-600" />,
      title: "Work Inquiries",
      value: "projects@syedahmedali.com",
    },
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white w-full">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Contact"
          title="Let's Build Something Extraordinary"
          subtitle="I'm always open to discussing new projects, innovative ideas, or opportunities to be part of your vision. Let's connect and explore how we can work together."
        />

        <StaggerContainer
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          staggerDelay={0.15}
          initialDelay={0.2}
        >
          <MotionCard>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-navy-800 mb-6">Get in Touch</h3>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-amber-100 p-3 rounded-full mr-4">{method.icon}</div>
                      <div>
                        <h4 className="font-medium text-navy-800">{method.title}</h4>
                        <p className="text-gray-600">{method.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-amber-100 hover:text-amber-600 transition-colors"
                      whileHover={{ y: -5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </MotionCard>

          <MotionCard>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-navy-800 mb-6">Schedule a Meeting</h3>

                <p className="text-gray-600 mb-6">
                  Prefer a face-to-face discussion? Schedule a virtual meeting at your convenience.
                </p>

                <motion.div
                  className="bg-gray-50 p-6 rounded-lg border border-gray-100 text-center"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                >
                  <h4 className="font-semibold text-navy-800 mb-2">Available for</h4>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <Badge variant="outline" className="bg-amber-50">
                      Strategy Consultation
                    </Badge>
                    <Badge variant="outline" className="bg-amber-50">
                      Project Discussion
                    </Badge>
                    <Badge variant="outline" className="bg-amber-50">
                      Technology Advisory
                    </Badge>
                  </div>

                  <motion.a
                    href="#"
                    className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    View Calendar <ExternalLink className="ml-2 h-4 w-4" />
                  </motion.a>
                </motion.div>

                <div className="mt-8">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Book a 30-Minute Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </MotionCard>
        </StaggerContainer>
      </div>
    </section>
  )
}
