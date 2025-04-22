"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  Users,
  Briefcase,
  Code,
  LineChart,
  HeadphonesIcon,
  ChevronRight,
  Search,
  UserPlus,
  Mail,
  Phone,
  Filter,
  Download,
  Info,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedText } from "@/components/ui/animated-text"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { MotionCard } from "@/components/ui/motion-card"

// Types for team members
interface TeamMember {
  id: string
  name: string
  designation: string
  department: string
  subDepartment: string
  role: string
  email: string
  status: "existing" | "new"
  image?: string
}

export default function OrganizationPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("all")

  // Sample data for team members
  const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Md. Akramul Hasan",
      designation: "Analyst Programmer",
      department: "Software Technology",
      subDepartment: "Mobile Apps",
      role: "Senior Team Lead",
      email: "akramul@atilimited.net",
      status: "existing",
    },
    {
      id: "2",
      name: "Md. Saiful Islam",
      designation: "Analyst Programmer",
      department: "Software Technology",
      subDepartment: "Java",
      role: "Team Lead",
      email: "saiful@atilimited.net",
      status: "existing",
    },
    {
      id: "3",
      name: "Md. Muhaimin Sk",
      designation: "Analyst Programmer",
      department: "Software Technology",
      subDepartment: "Oracle",
      role: "Team Lead",
      email: "muhaimin@atilimited.net",
      status: "existing",
    },
    {
      id: "4",
      name: "Anik Barua",
      designation: "Analyst Programmer",
      department: "Software Technology",
      subDepartment: "Oracle",
      role: "Team Lead",
      email: "anik@atilimited.net",
      status: "new",
    },
    {
      id: "5",
      name: "Md. Junaid Islam",
      designation: "Analyst Programmer",
      department: "Software Technology",
      subDepartment: "Oracle Apps",
      role: "Team Lead",
      email: "junaid@atilimited.net",
      status: "new",
    },
    {
      id: "6",
      name: "Mohammad Jakir Hossain",
      designation: "Sr. Programmer",
      department: "Software Technology",
      subDepartment: "Oracle",
      role: "Team Lead",
      email: "jakir@atilimited.net",
      status: "new",
    },
    {
      id: "7",
      name: "Md. Aminul Hossain",
      designation: "Sr. Programmer",
      department: "Software Technology",
      subDepartment: "Java",
      role: "Team Lead",
      email: "aminul@atilimited.net",
      status: "new",
    },
    {
      id: "8",
      name: "Md. Firoj Mahmud",
      designation: "Sr. Programmer",
      department: "Software Technology",
      subDepartment: "Java",
      role: "Team Lead",
      email: "firoj@atilimited.net",
      status: "new",
    },
    {
      id: "9",
      name: "Md. Hossain",
      designation: "Sr. Programmer",
      department: "Software Technology",
      subDepartment: "Mobile Apps",
      role: "Team Lead",
      email: "hossain@atilimited.net",
      status: "new",
    },
    {
      id: "10",
      name: "Abu Talha Rocky",
      designation: "Programmer",
      department: "Software Technology",
      subDepartment: "Automation",
      role: "Tech Lead",
      email: "rocky@atilimited.net",
      status: "new",
    },
    {
      id: "11",
      name: "Mahfuz Islam",
      designation: "Full-Stack Developer",
      department: "Software Technology",
      subDepartment: "MEAN",
      role: "Team Lead",
      email: "mahfuzislam@atilimited.net",
      status: "existing",
    },
    {
      id: "12",
      name: "Md. Golam Muid Talukder",
      designation: "Full-Stack Developer",
      department: "Software Technology",
      subDepartment: "MEAN",
      role: "Team Lead",
      email: "talukder@atilimited.net",
      status: "existing",
    },
    {
      id: "13",
      name: "Md. Mizanur Rahman",
      designation: "Sr. Executive",
      department: "HR & Administration",
      subDepartment: "HR",
      role: "Team Lead",
      email: "mizanur@atilimited.net",
      status: "existing",
    },
    {
      id: "14",
      name: "Mizanur Rahman",
      designation: "Executive, Admin",
      department: "HR & Administration",
      subDepartment: "Admin",
      role: "Assistant Team Lead",
      email: "mizanur@atilimited.net",
      status: "new",
    },
    {
      id: "15",
      name: "Md. Sajjad Hossain",
      designation: "HR Executive",
      department: "HR & Administration",
      subDepartment: "HR",
      role: "Assistant Team Lead",
      email: "sajjad@atilimited.net",
      status: "new",
    },
    {
      id: "16",
      name: "Alimul Rajib Shuvo",
      designation: "Sr. System & Support Engineer",
      department: "Infrastructure Technology",
      subDepartment: "Network Service",
      role: "Team Lead",
      email: "shovo@atilimited.net",
      status: "existing",
    },
    {
      id: "17",
      name: "Asif Reza",
      designation: "Sr. Infrastructure Engineer",
      department: "Infrastructure Technology",
      subDepartment: "Server Service",
      role: "Team Lead",
      email: "adil@atilimited.net",
      status: "existing",
    },
    {
      id: "18",
      name: "Md. Tanzimul Hasan",
      designation: "Sr. Infrastructure Engineer",
      department: "Infrastructure Technology",
      subDepartment: "Network Service",
      role: "Team Lead",
      email: "tanzimul@atilimited.net",
      status: "new",
    },
    {
      id: "19",
      name: "Md. Sinjal Islam",
      designation: "Database Administrator",
      department: "Infrastructure Technology",
      subDepartment: "Database Services",
      role: "Team Lead",
      email: "sinjal@atilimited.net",
      status: "new",
    },
    {
      id: "20",
      name: "Md. Abdul Latif",
      designation: "Support Engineer",
      department: "Infrastructure Technology",
      subDepartment: "Hardware Services",
      role: "Team Lead",
      email: "latif@atilimited.net",
      status: "new",
    },
    {
      id: "21",
      name: "Md. Shaheed Hossain",
      designation: "Sr. Executive, Business Development",
      department: "Business Strategy Engagement",
      subDepartment: "Business Development",
      role: "Business Lead",
      email: "shaheed@atilimited.net",
      status: "new",
    },
    {
      id: "22",
      name: "Md. Mahfuzur Rahman",
      designation: "CSR Representative",
      department: "Business Strategy Engagement",
      subDepartment: "Customer Service and Support",
      role: "Service Lead",
      email: "mahfuzur@atilimited.net",
      status: "new",
    },
    {
      id: "23",
      name: "Md. Taufik Taj",
      designation: "Software Quality Assurance",
      department: "Business Strategy Engagement",
      subDepartment: "Software Quality Assurance",
      role: "Team Lead",
      email: "taufik@atilimited.net",
      status: "new",
    },
    {
      id: "24",
      name: "Farha Tabassum Chowdhury",
      designation: "Project Coordinator",
      department: "Business Strategy Engagement",
      subDepartment: "Project Management",
      role: "Assistant Team Lead",
      email: "farha@atilimited.net",
      status: "new",
    },
    {
      id: "25",
      name: "Md. Morshed Ullah Rabin",
      designation: "Project Coordinator",
      department: "Business Strategy Engagement",
      subDepartment: "Project Management",
      role: "Assistant Team Lead",
      email: "morshed@atilimited.net",
      status: "new",
    },
    {
      id: "26",
      name: "Sanjoy Sutradhar",
      designation: "CSR Representative",
      department: "Business Strategy Engagement",
      subDepartment: "Customer Support and Service",
      role: "Assistant Service Lead",
      email: "sanjoy@atilimited.net",
      status: "new",
    },
    {
      id: "27",
      name: "Zarin Tasnim Azim",
      designation: "Executive, Business Process Management",
      department: "Business Strategy Engagement",
      subDepartment: "Business Process Management",
      role: "Assistant Team Lead",
      email: "zarin@atilimited.net",
      status: "new",
    },
  ]

  // Filter team members based on search query and active tab
  const filteredMembers = teamMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") return matchesSearch
    if (activeTab === "team-leads") return matchesSearch && member.role.includes("Team Lead")
    if (activeTab === "tech-leads") return matchesSearch && member.role.includes("Tech Lead")
    if (activeTab === "business-leads") return matchesSearch && member.role.includes("Business Lead")
    if (activeTab === "service-leads") return matchesSearch && member.role.includes("Service Lead")
    if (activeTab === "new") return matchesSearch && member.status === "new"

    return matchesSearch
  })

  // Group members by department
  const membersByDepartment = filteredMembers.reduce<Record<string, TeamMember[]>>((acc, member) => {
    if (!acc[member.department]) {
      acc[member.department] = []
    }
    acc[member.department].push(member)
    return acc
  }, {})

  // Handle opening the modal with the selected member
  const handleOpenModal = (member: TeamMember) => {
    setSelectedMember(member)
    setIsModalOpen(true)
  }

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedMember(null), 300) // Clear the selected member after the animation completes
  }

  // Get badge color for role
  const getRoleBadgeColor = (role: string) => {
    if (role.includes("Senior")) return "bg-purple-100 text-purple-800 hover:bg-purple-100"
    if (role.includes("Team Lead")) return "bg-blue-100 text-blue-800 hover:bg-blue-100"
    if (role.includes("Tech Lead")) return "bg-green-100 text-green-800 hover:bg-green-100"
    if (role.includes("Business Lead")) return "bg-amber-100 text-amber-800 hover:bg-amber-100"
    if (role.includes("Service Lead")) return "bg-cyan-100 text-cyan-800 hover:bg-cyan-100"
    if (role.includes("Assistant")) return "bg-indigo-100 text-indigo-800 hover:bg-indigo-100"
    return "bg-gray-100 text-gray-800 hover:bg-gray-100"
  }

  // Get icon for role
  const getRoleIcon = (role: string) => {
    if (role.includes("Team Lead")) return <Users className="h-5 w-5" />
    if (role.includes("Tech Lead")) return <Code className="h-5 w-5" />
    if (role.includes("Business Lead")) return <LineChart className="h-5 w-5" />
    if (role.includes("Service Lead")) return <HeadphonesIcon className="h-5 w-5" />
    if (role.includes("Manager")) return <Briefcase className="h-5 w-5" />
    return <Users className="h-5 w-5" />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="text-gray-600 hover:text-navy-800 transition-colors flex items-center">
              <ArrowLeft size={18} className="mr-2" />
              Back to Dashboard
            </Link>
            <h1 className="text-xl font-semibold text-navy-900">Organization Structure</h1>
          </div>

          <div className="flex items-center space-x-2">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
              <UserPlus size={14} className="mr-1" /> 5 New Appointments
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Organization Hierarchy */}
        <section className="mb-10">
          <AnimatedText text="Leadership Hierarchy" className="text-xl font-semibold text-navy-800 mb-6" type="words" />

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Managerial Roles */}
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Managerial Roles</h3>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded border border-blue-200">Senior Manager</div>
                  <div className="bg-white p-2 rounded border border-blue-200">Manager</div>
                  <div className="bg-white p-2 rounded border border-blue-200">Assistant Manager</div>
                </div>
              </div>

              {/* Team Roles */}
              <div className="bg-indigo-50 p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-indigo-800 mb-3">Team Roles</h3>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded border border-indigo-200">Senior Team Lead</div>
                  <div className="bg-white p-2 rounded border border-indigo-200">Team Lead</div>
                  <div className="bg-white p-2 rounded border border-indigo-200">Assistant Team Lead</div>
                </div>
              </div>

              {/* Technical Roles */}
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Technical Roles</h3>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded border border-green-200">Senior Tech Lead</div>
                  <div className="bg-white p-2 rounded border border-green-200">Tech Lead</div>
                  <div className="bg-white p-2 rounded border border-green-200">Assistant Tech Lead</div>
                </div>
              </div>

              {/* Business Roles */}
              <div className="bg-amber-50 p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-amber-800 mb-3">Business Roles</h3>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded border border-amber-200">Senior Business Lead</div>
                  <div className="bg-white p-2 rounded border border-amber-200">Business Lead</div>
                  <div className="bg-white p-2 rounded border border-amber-200">Assistant Business Lead</div>
                </div>
              </div>

              {/* Service Roles */}
              <div className="bg-cyan-50 p-4 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-cyan-800 mb-3">Service Roles</h3>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded border border-cyan-200">Senior Service Lead</div>
                  <div className="bg-white p-2 rounded border border-cyan-200">Service Lead</div>
                  <div className="bg-white p-2 rounded border border-cyan-200">Assistant Service Lead</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-navy-800 mb-4">Key Responsibilities</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-navy-800 mb-2 flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-2" /> Team Lead
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Foster team collaboration, open communication, and goal achievement while maintaining a positive and
                    productive environment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-navy-800 mb-2 flex items-center">
                    <Briefcase className="h-5 w-5 text-purple-600 mr-2" /> Manager Lead
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Oversee team operations, align goals with company objectives, and ensure smooth project execution
                    and team development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-navy-800 mb-2 flex items-center">
                    <Code className="h-5 w-5 text-green-600 mr-2" /> Tech Lead
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Lead technical execution, drive technical innovation, and handle escalations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-navy-800 mb-2 flex items-center">
                    <LineChart className="h-5 w-5 text-amber-600 mr-2" /> Business Lead
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Manage client relationships, identify business opportunities, and align strategies with the
                    company&#39;s vision to drive growth and customer satisfaction.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-navy-800 mb-2 flex items-center">
                    <HeadphonesIcon className="h-5 w-5 text-cyan-600 mr-2" /> Service Lead
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Ensure high-quality service delivery, address client concerns, and maintain a positive client
                    experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <AnimatedText text="Team Members" className="text-xl font-semibold text-navy-800" type="words" />

            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative w-full md:w-64">
                <Input
                  type="text"
                  placeholder="Search members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="outline" className="flex items-center">
                  <Filter size={16} className="mr-2" />
                  Filter
                </Button>
                <Button variant="outline" className="flex items-center">
                  <Download size={16} className="mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full mb-8" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-gray-100 mb-6">
              <TabsTrigger value="all" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
                All Members
              </TabsTrigger>
              <TabsTrigger
                value="team-leads"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
              >
                Team Leads
              </TabsTrigger>
              <TabsTrigger
                value="tech-leads"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
              >
                Tech Leads
              </TabsTrigger>
              <TabsTrigger
                value="business-leads"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
              >
                Business Leads
              </TabsTrigger>
              <TabsTrigger
                value="service-leads"
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
              >
                Service Leads
              </TabsTrigger>
              <TabsTrigger value="new" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
                New Appointments
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab}>
              {Object.entries(membersByDepartment).map(([department, members]) => (
                <div key={department} className="mb-8">
                  <h3 className="text-lg font-semibold text-navy-800 mb-4 flex items-center">
                    <Briefcase className="h-5 w-5 text-amber-600 mr-2" />
                    {department}
                    <Badge className="ml-2 bg-gray-100 text-gray-800">{members.length}</Badge>
                  </h3>

                  <StaggerContainer
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    staggerDelay={0.05}
                  >
                    {members.map((member) => (
                      <MotionCard
                        key={member.id}
                        className={`bg-white border ${member.status === "new" ? "border-green-200" : "border-gray-200"
                          } rounded-lg overflow-hidden hover:shadow-md transition-all cursor-pointer`}
                        whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                        onClick={() => handleOpenModal(member)}
                      >
                        <div className="p-5">
                          <div className="flex justify-between items-start mb-3">
                            <Badge className={getRoleBadgeColor(member.role)}>
                              {getRoleIcon(member.role)}
                              <span className="ml-1">{member.role}</span>
                            </Badge>
                            {member.status === "new" && <Badge className="bg-green-100 text-green-800">New</Badge>}
                          </div>

                          <div className="flex items-center mb-3">
                            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                              {member.image ? (
                                <Image
                                  src={member.image || "/placeholder.svg"}
                                  alt={member.name}
                                  width={48}
                                  height={48}
                                  className="rounded-full"
                                />
                              ) : (
                                <span className="text-lg font-semibold text-gray-600">
                                  {member.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .slice(0, 2)
                                    .join("")}
                                </span>
                              )}
                            </div>
                            <div>
                              <h3 className="font-semibold text-navy-800">{member.name}</h3>
                              <p className="text-sm text-gray-600">{member.designation}</p>
                            </div>
                          </div>

                          <div className="text-sm text-gray-600 mb-3">
                            <div className="flex items-center mb-1">
                              <Mail className="h-4 w-4 text-gray-400 mr-2" />
                              <span className="truncate">{member.email}</span>
                            </div>
                            <div className="flex items-center">
                              <Info className="h-4 w-4 text-gray-400 mr-2" />
                              <span>{member.subDepartment}</span>
                            </div>
                          </div>

                          <div className="flex justify-end">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 p-0"
                            >
                              View Details <ChevronRight size={16} className="ml-1" />
                            </Button>
                          </div>
                        </div>
                      </MotionCard>
                    ))}
                  </StaggerContainer>
                </div>
              ))}

              {Object.keys(membersByDepartment).length === 0 && (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <Users className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-700 mb-2">No team members found</h3>
                  <p className="text-gray-500">Try adjusting your search or filters</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </section>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      {selectedMember.image ? (
                        <Image
                          src={selectedMember.image || "/placeholder.svg"}
                          alt={selectedMember.name}
                          width={64}
                          height={64}
                          className="rounded-full"
                        />
                      ) : (
                        <span className="text-2xl font-semibold text-gray-600">
                          {selectedMember.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy-800">{selectedMember.name}</h3>
                      <p className="text-gray-600">{selectedMember.designation}</p>
                      <Badge className={`${getRoleBadgeColor(selectedMember.role)} mt-2`}>
                        {selectedMember.role}
                      </Badge>
                      {selectedMember.status === "new" && (
                        <Badge className="ml-2 bg-green-100 text-green-800">New Appointment</Badge>
                      )}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={handleCloseModal} className="text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Contact Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-gray-800">{selectedMember.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-gray-800">+880 1XXXXXXXXX</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Department Information</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <Briefcase className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                        <div>
                          <p className="text-gray-800">{selectedMember.department}</p>
                          <p className="text-sm text-gray-600">{selectedMember.subDepartment}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Role Responsibilities</h4>
                  <Card className="bg-gray-50">
                    <CardContent className="p-4">
                      <p className="text-gray-700">
                        {selectedMember.role.includes("Team Lead") &&
                          "Foster team collaboration, open communication, and goal achievement while maintaining a positive and productive environment."}
                        {selectedMember.role.includes("Tech Lead") &&
                          "Lead technical execution, drive technical innovation, and handle escalations."}
                        {selectedMember.role.includes("Business Lead") &&
                          "Manage client relationships, identify business opportunities, and align strategies with the company's vision to drive growth and customer satisfaction."}
                        {selectedMember.role.includes("Service Lead") &&
                          "Ensure high-quality service delivery, address client concerns, and maintain a positive client experience."}
                        {selectedMember.role.includes("Assistant") &&
                          "Support the lead in their responsibilities and take ownership of assigned tasks and initiatives."}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
                <Button variant="outline" onClick={handleCloseModal}>
                  Close
                </Button>
                <div className="flex space-x-2">
                  <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                    <Mail className="h-4 w-4 mr-2" /> Contact
                  </Button>
                  <Button className="bg-navy-800 hover:bg-navy-900 text-white">View Full Profile</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
