"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import {
  BellOff,
  Server,
  Shield,
  Database,
  Cloud,
  Users,
  BarChart3,
  AlertTriangle,
  Clock,
  Activity,
  ArrowRight,
  ArrowUpRight,
  Layers,
  CheckCircle,
  Network,
  Briefcase,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { AnimatedText } from "@/components/ui/animated-text"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { MotionCard } from "@/components/ui/motion-card"
import { OrgChartLink } from "@/components/ui/org-chart-link"

export default function DashboardPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  console.log(isLoading);


  // Function to handle card click navigation
  const handleCardClick = (path: string) => {
    setIsLoading(true)
    router.push(path)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-2xl md:text-3xl font-bold text-navy-900">
                  Welcome, <span className="text-amber-600">Syed Ahmed Ali</span>
                </h1>
                <p className="text-gray-600 mt-1">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </motion.div>
            </div>

            <div className="flex items-center space-x-3">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                <CheckCircle size={14} className="mr-1" /> Systems Operational
              </Badge>
              <Button className="bg-navy-800 hover:bg-navy-900 text-white">
                <Activity size={16} className="mr-2" /> System Overview
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Summary Section */}
        <section className="mb-10">
          <AnimatedText text="Executive Dashboard" className="text-xl font-semibold text-navy-800 mb-6" type="words" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SummaryCard
              title="System Health"
              value={98.7}
              suffix="%"
              icon={<Server className="h-5 w-5 text-green-600" />}
              description="Overall system health score"
              trend="up"
              trendValue="1.2%"
              color="green"
            />

            <SummaryCard
              title="Active Users"
              value={1842}
              icon={<Users className="h-5 w-5 text-blue-600" />}
              description="Users active today"
              trend="up"
              trendValue="12%"
              color="blue"
            />

            <SummaryCard
              title="Incidents"
              value={3}
              icon={<AlertTriangle className="h-5 w-5 text-amber-600" />}
              description="Open incidents requiring attention"
              trend="down"
              trendValue="5"
              color="amber"
            />

            <SummaryCard
              title="Uptime"
              value={99.99}
              suffix="%"
              icon={<Activity className="h-5 w-5 text-indigo-600" />}
              description="30-day average uptime"
              trend="stable"
              trendValue="0.01%"
              color="indigo"
            />
          </div>
        </section>

        {/* Organization Structure Section */}
        <section className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <AnimatedText text="Organization Structure" className="text-xl font-semibold text-navy-800" type="words" />
            <div className="flex space-x-3">
              <Link
                href="/organization"
                className="text-amber-600 hover:text-amber-700 flex items-center text-sm font-medium transition-colors"
              >
                View Team Structure <ArrowUpRight size={14} className="ml-1" />
              </Link>
              <OrgChartLink />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Org Chart Card */}
            <MotionCard
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
              onClick={() => handleCardClick("/org-chart")}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-navy-100 p-3 rounded-lg">
                    <Network className="h-6 w-6 text-navy-600" />
                  </div>
                  <Badge className="bg-navy-100 text-navy-800 hover:bg-navy-100">Organization</Badge>
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-2">Organizational Chart</h3>
                <p className="text-gray-600 mb-6">View and explore the complete organizational hierarchy</p>

                <div className="grid grid-cols-5 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500 mb-1">Software</p>
                    <p className="text-2xl font-bold text-navy-800">101</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500 mb-1">Infrastructure</p>
                    <p className="text-2xl font-bold text-navy-800">18</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500 mb-1">Creative</p>
                    <p className="text-2xl font-bold text-navy-800">15</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500 mb-1">HR & Admin</p>
                    <p className="text-2xl font-bold text-navy-800">12</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-sm text-gray-500 mb-1">Business</p>
                    <p className="text-2xl font-bold text-navy-800">24</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Departments</p>
                    <div className="flex items-center">
                      <Briefcase className="h-4 w-4 text-amber-600 mr-1" />
                      <span className="text-amber-600 font-medium">5 major departments</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-navy-600 hover:text-navy-700 hover:bg-navy-50">
                    View Org Chart <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
            </MotionCard>

            {/* Team Structure Card */}
            <MotionCard
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
              onClick={() => handleCardClick("/organization")}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Team</Badge>
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-2">Team Structure</h3>
                <p className="text-gray-600 mb-6">View team members, roles and responsibilities</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Team Leads</p>
                    <p className="text-2xl font-bold text-amber-600">27</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">New Members</p>
                    <p className="text-2xl font-bold text-green-600">15</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Software Technology</span>
                    <span className="text-sm font-medium text-navy-800">8 teams</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Infrastructure Technology</span>
                    <span className="text-sm font-medium text-navy-800">4 teams</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Business Strategy</span>
                    <span className="text-sm font-medium text-navy-800">5 teams</span>
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700 hover:bg-amber-50">
                  View Team Structure <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </MotionCard>
          </div>
        </section>

        {/* Team Structure Section */}
        <section className="mb-10">
          <AnimatedText text="Management Modules" className="text-xl font-semibold text-navy-800 mb-6" type="words" />

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {/* Mute Box Card */}
            <MotionCard
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
              onClick={() => handleCardClick("/mute-box")}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <BellOff className="h-6 w-6 text-amber-600" />
                  </div>
                  <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Management</Badge>
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-2">Mute Box</h3>
                <p className="text-gray-600 mb-6">Manage and monitor muted alerts and notifications</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Active Alerts</p>
                    <p className="text-2xl font-bold text-navy-800">10</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">High Priority</p>
                    <p className="text-2xl font-bold text-red-600">3</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Expiring Soon</p>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-amber-600 mr-1" />
                      <span className="text-amber-600 font-medium">4 alerts</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700 hover:bg-amber-50">
                    View All <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
            </MotionCard>

            {/* Infrastructure Card */}
            <MotionCard
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Server className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Infrastructure</Badge>
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-2">Infrastructure</h3>
                <p className="text-gray-600 mb-6">Monitor and manage server and cloud resources</p>

                <div className="space-y-3 mb-6">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">CPU Usage</span>
                      <span className="text-sm font-medium text-gray-900">42%</span>
                    </div>
                    <Progress value={42} className="h-2 bg-gray-100" indicatorClassName="bg-blue-500" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Memory</span>
                      <span className="text-sm font-medium text-gray-900">68%</span>
                    </div>
                    <Progress value={68} className="h-2 bg-gray-100" indicatorClassName="bg-blue-500" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Storage</span>
                      <span className="text-sm font-medium text-gray-900">54%</span>
                    </div>
                    <Progress value={54} className="h-2 bg-gray-100" indicatorClassName="bg-blue-500" />
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  View Details <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </MotionCard>

            {/* Security Card */}
            <MotionCard
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Security</Badge>
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-2">Security Center</h3>
                <p className="text-gray-600 mb-6">Monitor security status and manage vulnerabilities</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Threats Blocked</p>
                    <p className="text-2xl font-bold text-green-600">1.2K</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Vulnerabilities</p>
                    <p className="text-2xl font-bold text-amber-600">7</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-gray-600">Protection Active</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 hover:bg-green-50">
                    View Report <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
            </MotionCard>

            {/* Database Card */}
            <MotionCard
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Database className="h-6 w-6 text-purple-600" />
                  </div>
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Data</Badge>
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-2">Database Management</h3>
                <p className="text-gray-600 mb-6">Monitor and optimize database performance</p>

                <div className="space-y-3 mb-6">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Query Performance</span>
                      <span className="text-sm font-medium text-gray-900">Good</span>
                    </div>
                    <Progress value={75} className="h-2 bg-gray-100" indicatorClassName="bg-purple-500" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-gray-600">Connections</span>
                      <span className="text-sm font-medium text-gray-900">156/500</span>
                    </div>
                    <Progress value={31} className="h-2 bg-gray-100" indicatorClassName="bg-purple-500" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Last Backup</p>
                    <p className="text-sm font-medium text-navy-800">Today, 04:30 AM</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                  >
                    Manage <ArrowRight size={16} className="ml-1" />
                  </Button>
                </div>
              </div>
            </MotionCard>

            {/* Analytics Card */}
            <MotionCard
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-indigo-600" />
                  </div>
                  <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">Analytics</Badge>
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-2">Business Analytics</h3>
                <p className="text-gray-600 mb-6">Track key performance indicators and metrics</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Reports Generated</p>
                    <p className="text-2xl font-bold text-indigo-600">24</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-500 mb-1">Data Sources</p>
                    <p className="text-2xl font-bold text-indigo-600">8</p>
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50">
                  View Analytics <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </MotionCard>

            {/* Cloud Services Card */}
            <MotionCard
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="bg-cyan-100 p-3 rounded-lg">
                    <Cloud className="h-6 w-6 text-cyan-600" />
                  </div>
                  <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-100">Cloud</Badge>
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-2">Cloud Services</h3>
                <p className="text-gray-600 mb-6">Manage cloud resources and deployments</p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">AWS</span>
                    <Badge className="bg-green-100 text-green-800">Healthy</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Azure</span>
                    <Badge className="bg-green-100 text-green-800">Healthy</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Google Cloud</span>
                    <Badge className="bg-amber-100 text-amber-800">Warning</Badge>
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50">
                  Manage Cloud <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            </MotionCard>
          </StaggerContainer>
        </section>

        {/* Recent Activity Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <AnimatedText text="Recent Activity" className="text-xl font-semibold text-navy-800" type="words" />
            <Link
              href="#"
              className="text-amber-600 hover:text-amber-700 flex items-center text-sm font-medium transition-colors"
            >
              View All Activities <ArrowUpRight size={14} className="ml-1" />
            </Link>
          </div>

          <Card>
            <CardContent className="p-6">
              <StaggerContainer className="space-y-4" staggerDelay={0.05}>
                {[
                  {
                    icon: <Shield className="h-5 w-5 text-green-600" />,
                    title: "Security Scan Completed",
                    time: "10 minutes ago",
                    description: "Weekly security scan completed with 0 critical issues found.",
                  },
                  {
                    icon: <Database className="h-5 w-5 text-blue-600" />,
                    title: "Database Backup",
                    time: "1 hour ago",
                    description: "Automated database backup completed successfully.",
                  },
                  {
                    icon: <AlertTriangle className="h-5 w-5 text-amber-600" />,
                    title: "Storage Warning",
                    time: "2 hours ago",
                    description: "Development server approaching 80% storage capacity.",
                  },
                  {
                    icon: <Users className="h-5 w-5 text-purple-600" />,
                    title: "New User Accounts",
                    time: "5 hours ago",
                    description: "5 new user accounts created for the marketing department.",
                  },
                  {
                    icon: <Layers className="h-5 w-5 text-indigo-600" />,
                    title: "System Update",
                    time: "Yesterday",
                    description: "System update v2.3.0 deployed successfully to production.",
                  },
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 rounded-full bg-gray-100 mr-4">{activity.icon}</div>
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium text-navy-800">{activity.title}</h4>
                        <span className="text-xs text-gray-500 ml-2">• {activity.time}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{activity.description}</p>
                    </div>
                  </motion.div>
                ))}
              </StaggerContainer>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}

// Summary Card Component
function SummaryCard({
  title,
  value,
  icon,
  description,
  trend,
  trendValue,
  suffix = "",
}: {
  title: string
  value: number
  icon: React.ReactNode
  description: string
  trend: "up" | "down" | "stable"
  trendValue: string
  color: string
  suffix?: string
}) {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return (
          <svg
            className={`h-4 w-4 text-green-500`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        )
      case "down":
        return (
          <svg
            className={`h-4 w-4 text-red-500`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        )
      case "stable":
        return (
          <svg
            className={`h-4 w-4 text-gray-500`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
          </svg>
        )
      default:
        return null
    }
  }

  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-green-600"
      case "down":
        return "text-red-600"
      case "stable":
        return "text-gray-600"
      default:
        return ""
    }
  }

  return (
    <MotionCard
      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all"
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-medium text-gray-700">{title}</h3>
          {icon}
        </div>

        <div className="mb-4">
          <AnimatedCounter
            from={0}
            to={value}
            suffix={suffix}
            className="text-3xl font-bold text-navy-900"
            duration={2}
          />
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        <div className="flex items-center">
          {getTrendIcon()}
          <span className={`text-sm ml-1 ${getTrendColor()}`}>{trendValue}</span>
          <span className="text-xs text-gray-500 ml-1">vs last period</span>
        </div>
      </div>
    </MotionCard>
  )
}
