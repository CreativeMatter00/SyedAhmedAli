"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { MotionCard } from "@/components/ui/motion-card"

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("enterprise")

  const projectCategories = {
    enterprise: [
      {
        title: "Enterprise ERP Implementation",
        image: "/placeholder.svg?height=300&width=600",
        status: "Completed",
        role: "Project Lead & Architect",
        tech: "SAP S/4HANA, Azure, Power BI",
        description:
          "Led the implementation of an enterprise-wide ERP system, integrating finance, supply chain, and HR modules across 5 business units.",
        tags: ["ERP", "SAP", "Digital Transformation"],
        impact: "Reduced operational costs by 25% and improved process efficiency by 40%",
      },
      {
        title: "Business Intelligence Platform",
        image: "/placeholder.svg?height=300&width=600",
        status: "Completed",
        role: "Solution Architect",
        tech: "Power BI, Azure Data Lake, SQL Server",
        description:
          "Designed and implemented an enterprise-wide business intelligence platform providing real-time insights to executives and operational teams.",
        tags: ["Business Intelligence", "Data Analytics", "Azure"],
        impact: "Enabled data-driven decision making, resulting in 15% revenue growth",
      },
    ],
    digital: [
      {
        title: "Customer Experience Platform",
        image: "/placeholder.svg?height=300&width=600",
        status: "Completed",
        role: "Digital Transformation Lead",
        tech: "React, Node.js, AWS, Salesforce",
        description:
          "Led the development of an omnichannel customer experience platform integrating web, mobile, and in-store touchpoints.",
        tags: ["CX", "Omnichannel", "Digital Transformation"],
        impact: "Increased customer satisfaction by 35% and boosted digital engagement by 42%",
      },
      {
        title: "AI-Powered Predictive Maintenance",
        image: "/placeholder.svg?height=300&width=600",
        status: "Ongoing",
        role: "Technical Director",
        tech: "Python, TensorFlow, Azure IoT, Power BI",
        description:
          "Implementing an AI-driven predictive maintenance system for manufacturing equipment using IoT sensors and machine learning.",
        tags: ["AI/ML", "IoT", "Predictive Analytics"],
        impact: "On track to reduce downtime by 60% and maintenance costs by 40%",
      },
    ],
    cloud: [
      {
        title: "Multi-Cloud Infrastructure Migration",
        image: "/placeholder.svg?height=300&width=600",
        status: "Completed",
        role: "Cloud Architect",
        tech: "AWS, Azure, Terraform, Kubernetes",
        description:
          "Designed and executed a multi-cloud strategy, migrating 200+ applications from on-premises to cloud infrastructure.",
        tags: ["Cloud Migration", "Multi-Cloud", "DevOps"],
        impact: "Reduced infrastructure costs by 35% and improved system reliability by 99.99%",
      },
      {
        title: "Serverless Microservices Architecture",
        image: "/placeholder.svg?height=300&width=600",
        status: "Completed",
        role: "Lead Architect",
        tech: "AWS Lambda, API Gateway, DynamoDB, Serverless Framework",
        description:
          "Redesigned a monolithic application into a serverless microservices architecture for improved scalability and performance.",
        tags: ["Serverless", "Microservices", "AWS"],
        impact: "Achieved 5x faster deployment cycles and 70% reduction in operational overhead",
      },
    ],
  }

  return (
    <section id="projects" className="py-20 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <SectionHeading badge="Projects" title="Projects That Make an Impact" />

        <Tabs defaultValue="enterprise" className="w-full" value={activeTab} onValueChange={setActiveTab}>
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <TabsList className="bg-gray-100">
              <TabsTrigger
                value="enterprise"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
              >
                Enterprise Systems
              </TabsTrigger>
              <TabsTrigger value="digital" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
                Digital Transformation
              </TabsTrigger>
              <TabsTrigger value="cloud" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
                Cloud Migration
              </TabsTrigger>
            </TabsList>
          </motion.div>

          <AnimatePresence mode="wait">
            {Object.entries(projectCategories).map(([category, projects]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <StaggerContainer
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    staggerDelay={0.15}
                    initialDelay={0.1}
                  >
                    {projects.map((project, index) => (
                      <MotionCard
                        key={index}
                        className="overflow-hidden bg-white rounded-lg shadow-lg"
                        whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
                        direction={index % 2 === 0 ? "left" : "right"}
                        distance={20}
                      >
                        <div className="h-48 bg-gray-200 relative overflow-hidden">
                          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </motion.div>
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-semibold text-navy-800">{project.title}</h3>
                            <Badge
                              className={
                                project.status === "Completed"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                              }
                            >
                              {project.status}
                            </Badge>
                          </div>
                          <div className="mb-4">
                            <p className="text-sm text-gray-500 mb-1">Role: {project.role}</p>
                            <p className="text-sm text-gray-500">Tech Stack: {project.tech}</p>
                          </div>
                          <p className="text-gray-700 mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="outline" className="bg-gray-50">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="border-t pt-4 mt-2">
                            <p className="text-amber-600 font-semibold">Impact:</p>
                            <p className="text-gray-700">{project.impact}</p>
                          </div>
                        </div>
                      </MotionCard>
                    ))}
                  </StaggerContainer>
                </motion.div>
              </TabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  )
}
