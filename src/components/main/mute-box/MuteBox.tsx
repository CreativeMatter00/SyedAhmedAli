"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Bell, BellOff, Clock, X, ChevronRight, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StaggerContainer } from "@/components/ui/stagger-container"
import { MotionCard } from "@/components/ui/motion-card"
import { AnimatedText } from "@/components/ui/animated-text"

// Types for our muted items
interface MutedItem {
  id: string
  title: string
  time: string
  description: string
  category: string
  priority: "high" | "medium" | "low"
  status: "active" | "expired"
  details: string
  source: string
  actions: string[]
}

export default function MuteBoxPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedItem, setSelectedItem] = useState<MutedItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Sample data for muted items
  const mutedItems: MutedItem[] = [
    {
      id: "1",
      title: "System Maintenance Alert",
      time: "Muted for 24 hours",
      description: "Scheduled maintenance for the ERP system. Expected downtime of 2 hours during non-business hours.",
      category: "System",
      priority: "high",
      status: "active",
      details:
        "The IT department will be performing critical updates to the ERP system infrastructure. This maintenance is necessary to apply security patches and performance improvements. All data will be backed up before the maintenance begins. Users may experience intermittent connectivity issues during this period.",
      source: "IT Operations",
      actions: ["Reschedule", "Notify Team", "Acknowledge"],
    },
    {
      id: "2",
      title: "Cloud Storage Capacity Warning",
      time: "Muted until resolved",
      description: "Cloud storage approaching 85% capacity. Consider upgrading or cleaning up unused resources.",
      category: "Infrastructure",
      priority: "medium",
      status: "active",
      details:
        "The cloud storage allocated to the marketing department is approaching its capacity limit. This may impact the ability to upload new assets and could affect ongoing campaigns. The system will automatically delete temporary files, but manual review is recommended to identify large or unnecessary files that can be archived or removed.",
      source: "Cloud Monitoring",
      actions: ["Upgrade Storage", "Run Cleanup", "Analyze Usage"],
    },
    {
      id: "3",
      title: "Security Vulnerability Detected",
      time: "Muted for 12 hours",
      description: "Medium severity vulnerability detected in the customer portal. Patch available for deployment.",
      category: "Security",
      priority: "high",
      status: "active",
      details:
        "A security scan has identified a potential cross-site scripting vulnerability in the customer portal. This vulnerability could allow attackers to inject malicious scripts that execute when users view affected pages. A patch has been developed and tested in the staging environment. Deployment to production is recommended within the next 24 hours.",
      source: "Security Operations Center",
      actions: ["Deploy Patch", "Run Verification", "Update Report"],
    },
    {
      id: "4",
      title: "Database Performance Degradation",
      time: "Muted for 4 hours",
      description: "Query response times increasing. Database optimization recommended during off-peak hours.",
      category: "Database",
      priority: "medium",
      status: "active",
      details:
        "Monitoring has detected a gradual increase in database query response times over the past 48 hours. Analysis indicates that several inefficient queries are causing excessive load. The database team has identified optimization opportunities including index creation and query rewriting. Implementation is recommended during the next maintenance window to avoid disruption to business operations.",
      source: "Performance Monitoring",
      actions: ["Schedule Optimization", "Review Queries", "Increase Resources"],
    },
    {
      id: "5",
      title: "API Rate Limit Warning",
      time: "Muted for 8 hours",
      description: "Third-party API approaching rate limit. Consider optimizing requests or upgrading service tier.",
      category: "Integration",
      priority: "low",
      status: "active",
      details:
        "The integration with the payment processing API is approaching its rate limit for the current billing cycle. If the limit is exceeded, additional charges may apply or service disruption could occur. Options include optimizing the frequency of API calls, implementing better caching strategies, or upgrading to a higher service tier with increased limits.",
      source: "Integration Monitoring",
      actions: ["Optimize Calls", "Upgrade Plan", "Contact Vendor"],
    },
    {
      id: "6",
      title: "Backup Verification Failed",
      time: "Muted for 2 hours",
      description: "Weekly backup verification failed. Manual inspection required to ensure data integrity.",
      category: "Backup",
      priority: "high",
      status: "active",
      details:
        "The automated verification process for the weekly full backup has failed. The backup appears to have completed successfully, but the verification step encountered errors when validating the integrity of certain database files. A manual inspection is required to determine if the backup is usable or if a new backup should be initiated. This issue could impact disaster recovery capabilities if not addressed.",
      source: "Backup System",
      actions: ["Verify Manually", "Initiate New Backup", "Update Procedures"],
    },
    {
      id: "7",
      title: "License Expiration Notice",
      time: "Muted until next week",
      description: "Enterprise software license expires in 30 days. Renewal process should be initiated.",
      category: "Licensing",
      priority: "medium",
      status: "active",
      details:
        "The enterprise license for the project management software suite will expire in 30 days. If not renewed, access to premium features will be restricted and support services will be unavailable. The procurement team should be notified to begin the renewal process, which typically takes 2-3 weeks. Budget approval may be required if there are price changes from the previous term.",
      source: "License Management",
      actions: ["Initiate Renewal", "Request Quote", "Evaluate Alternatives"],
    },
    {
      id: "8",
      title: "Server Resource Utilization Alert",
      time: "Muted for 6 hours",
      description: "Application server CPU consistently above 80%. Performance optimization recommended.",
      category: "Infrastructure",
      priority: "medium",
      status: "active",
      details:
        "The application server hosting the inventory management system has been experiencing sustained high CPU utilization over the past 72 hours. This could lead to degraded performance during peak usage periods. Initial analysis suggests that recent code changes may have introduced inefficient processing patterns. A code review is recommended, along with potential vertical scaling of the server resources as a short-term solution.",
      source: "Resource Monitoring",
      actions: ["Scale Resources", "Code Review", "Optimize Queries"],
    },
    {
      id: "9",
      title: "Compliance Audit Reminder",
      time: "Muted until tomorrow",
      description: "Quarterly compliance audit scheduled for next week. Documentation preparation required.",
      category: "Compliance",
      priority: "low",
      status: "active",
      details:
        "The quarterly compliance audit is scheduled for next week. The audit will focus on data handling practices, access controls, and incident response procedures. Department heads should ensure that all required documentation is up to date, including process documentation, risk assessments, and evidence of control effectiveness. The compliance team is available to assist with preparation and to conduct pre-audit reviews upon request.",
      source: "Compliance Department",
      actions: ["Prepare Documentation", "Schedule Review", "Notify Stakeholders"],
    },
    {
      id: "10",
      title: "Network Latency Detected",
      time: "Muted for 3 hours",
      description: "Increased latency observed in the east region data center. Monitoring for potential issues.",
      category: "Network",
      priority: "low",
      status: "expired",
      details:
        "Network monitoring has detected an increase in latency for connections to the east region data center. Average response times have increased by 15-20ms, which is within acceptable limits but warrants monitoring. Initial investigation suggests this may be related to recent ISP maintenance in the area. No immediate action is required, but the situation should be monitored for any further degradation that could impact application performance.",
      source: "Network Operations",
      actions: ["Monitor Trends", "Contact ISP", "Route Traffic"],
    },
  ]

  // Filter items based on search query
  const filteredItems = mutedItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Handle opening the modal with the selected item
  const handleOpenModal = (item: MutedItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedItem(null), 300) // Clear the selected item after the animation completes
  }

  // Get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      case "medium":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100"
      case "low":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-600 hover:text-navy-800 transition-colors flex items-center">
              <ArrowLeft size={18} className="mr-2" />
              Back to Dashboard
            </Link>
            <h1 className="text-xl font-semibold text-navy-900">Mute Box</h1>
          </div>

          <div className="flex items-center space-x-2">
            <Badge className="bg-navy-800 text-white hover:bg-navy-900">
              <BellOff size={14} className="mr-1" /> 10 Muted
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Input
              type="text"
              placeholder="Search alerts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border-gray-300 focus:border-amber-500 focus:ring focus:ring-amber-200 focus:ring-opacity-50 rounded-lg"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button variant="outline" className="flex items-center">
              <Filter size={16} className="mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="flex items-center">
              <Clock size={16} className="mr-2" />
              Sort by Time
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="bg-gray-100 mb-6">
            <TabsTrigger value="all" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              All Alerts
            </TabsTrigger>
            <TabsTrigger value="active" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              Active
            </TabsTrigger>
            <TabsTrigger value="expired" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              Expired
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <AnimatedText
              text="All muted alerts and notifications"
              className="text-gray-600 mb-6"
              type="words"
              staggerChildren={0.01}
            />
            <MutedItemsGrid items={filteredItems} onItemClick={handleOpenModal} />
          </TabsContent>

          <TabsContent value="active">
            <AnimatedText
              text="Currently active muted alerts"
              className="text-gray-600 mb-6"
              type="words"
              staggerChildren={0.01}
            />
            <MutedItemsGrid
              items={filteredItems.filter((item) => item.status === "active")}
              onItemClick={handleOpenModal}
            />
          </TabsContent>

          <TabsContent value="expired">
            <AnimatedText
              text="Expired muted alerts"
              className="text-gray-600 mb-6"
              type="words"
              staggerChildren={0.01}
            />
            <MutedItemsGrid
              items={filteredItems.filter((item) => item.status === "expired")}
              onItemClick={handleOpenModal}
            />
          </TabsContent>
        </Tabs>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl w-full max-w-3xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start p-6 border-b border-gray-200">
                <div>
                  <div className="flex items-center mb-2">
                    <Badge className={getPriorityColor(selectedItem.priority)}>
                      {selectedItem.priority.charAt(0).toUpperCase() + selectedItem.priority.slice(1)} Priority
                    </Badge>
                    <Badge className="ml-2 bg-gray-100 text-gray-800">{selectedItem.category}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900">{selectedItem.title}</h3>
                  <p className="text-gray-500 flex items-center mt-1">
                    <Clock size={14} className="mr-1" /> {selectedItem.time}
                  </p>
                </div>
                <button onClick={handleCloseModal} className="text-gray-400 hover:text-gray-600 transition-colors">
                  <X size={24} />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-navy-800 mb-2">Details</h4>
                  <p className="text-gray-700">{selectedItem.details}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-navy-800 mb-2">Source</h4>
                  <p className="text-gray-700">{selectedItem.source}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-navy-800 mb-2">Recommended Actions</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {selectedItem.actions.map((action, index) => (
                      <li key={index} className="mb-1">
                        {action}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
                <Button variant="outline" onClick={handleCloseModal}>
                  Close
                </Button>
                <div className="flex space-x-2">
                  <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                    Unmute
                  </Button>
                  <Button className="bg-navy-800 hover:bg-navy-900 text-white">Take Action</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Component for the grid of muted items
function MutedItemsGrid({ items, onItemClick }: { items: MutedItem[]; onItemClick: (item: MutedItem) => void }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <Bell className="h-12 w-12 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-700 mb-2">No muted alerts found</h3>
        <p className="text-gray-500">Try adjusting your search or filters</p>
      </div>
    )
  }

  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.05}>
      {items.map((item) => (
        <MutedItemCard key={item.id} item={item} onClick={() => onItemClick(item)} />
      ))}
    </StaggerContainer>
  )
}

// Component for individual muted item cards
function MutedItemCard({ item, onClick }: { item: MutedItem; onClick: () => void }) {
  // Get priority color
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 hover:bg-red-100"
      case "medium":
        return "bg-amber-100 text-amber-800 hover:bg-amber-100"
      case "low":
        return "bg-green-100 text-green-800 hover:bg-green-100"
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100"
    }
  }

  return (
    <MotionCard
      className={`bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow ${
        item.status === "expired" ? "opacity-70" : ""
      }`}
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
      onClick={onClick}
    >
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <Badge className={getPriorityColor(item.priority)}>
            {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
          </Badge>
          <Badge className="bg-gray-100 text-gray-800">{item.category}</Badge>
        </div>
        <h3 className="text-lg font-semibold text-navy-800 mb-2 line-clamp-1">{item.title}</h3>
        <p className="text-gray-500 flex items-center text-sm mb-3">
          <Clock size={14} className="mr-1 flex-shrink-0" /> {item.time}
        </p>
        <p className="text-gray-700 line-clamp-2 text-sm mb-4">{item.description}</p>
        <div className="flex justify-end">
          <Button variant="ghost" size="sm" className="text-amber-600 hover:text-amber-700 hover:bg-amber-50 p-0">
            View Details <ChevronRight size={16} className="ml-1" />
          </Button>
        </div>
      </div>
    </MotionCard>
  )
}
