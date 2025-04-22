"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import {
  ArrowLeft,
  ChevronDown,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RefreshCw,
  Download,
  Users,
  Database,
  Code,
  Briefcase,
  Palette,
  UserPlus,
  Info,
  Mail,
  Phone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

// Types for org chart
interface Employee {
  id: string
  name: string
  title: string
  department: string
  subDepartment?: string
  image?: string
  children?: Employee[]
}

export default function OrgChartPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("software")
  const [zoomLevel, setZoomLevel] = useState(1)
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Handle redirect to dashboard
  const handleRedirectToDashboard = () => {
    setIsLoading(true)
    router.push("/dashboard")
  }

  // Zoom controls
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.1, 1.5))
  }

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.1, 0.5))
  }

  const handleResetZoom = () => {
    setZoomLevel(1)
  }

  // Handle opening the modal with the selected employee
  const handleOpenModal = (employee: Employee) => {
    setSelectedEmployee(employee)
    setIsModalOpen(true)
  }

  // Handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedEmployee(null), 300) // Clear the selected employee after the animation completes
  }

  const softwareDepartment: Employee = {
    id: "1",
    name: "Anisul Islam",
    title: "Head of Software Technology",
    department: "Software Technology",
    image: "/images/ati-logo.png",
    children: [
      {
        id: "1-1",
        name: "Oracle Team",
        title: "Oracle Development",
        department: "Software Technology",
        subDepartment: "Oracle",
        children: [
          {
            id: "1-1-1",
            name: "Shahinoor Akhtar",
            title: "Sr. Programmer",
            department: "Software Technology",
            subDepartment: "Oracle",
          },
          {
            id: "1-1-2",
            name: "Md. Sanwar Hossain",
            title: "Analyst Programmer",
            department: "Software Technology",
            subDepartment: "Oracle",
          },
          {
            id: "1-1-3",
            name: "Md. Muhashin Sk",
            title: "Analyst Programmer",
            department: "Software Technology",
            subDepartment: "Oracle",
          },
          {
            id: "1-1-4",
            name: "Anik Barua",
            title: "Analyst Programmer",
            department: "Software Technology",
            subDepartment: "Oracle",
          },
          {
            id: "1-1-5",
            name: "Shammi Akhtar",
            title: "Sr. Programmer",
            department: "Software Technology",
            subDepartment: "Oracle",
          },
          {
            id: "1-1-6",
            name: "Md. Jamilul Islam",
            title: "Analyst Programmer",
            department: "Software Technology",
            subDepartment: "Oracle",
          },
          {
            id: "1-1-7",
            name: "Muhammad Rashedul Alam",
            title: "Programmer",
            department: "Software Technology",
            subDepartment: "Oracle",
          },
          {
            id: "1-1-8",
            name: "Shampa Islam",
            title: "Programmer",
            department: "Software Technology",
            subDepartment: "Oracle",
          },
          {
            id: "1-1-9",
            name: "Nasifat Sultana",
            title: "Jr. Programmer",
            department: "Software Technology",
            subDepartment: "Oracle",
          },
          {
            id: "1-1-10",
            name: "Sabbir Ahmed",
            title: "Trainee Programmer",
            department: "Software Technology",
            subDepartment: "Oracle",
          }
        ],
      },
      {
        id: "1-2",
        name: "Technology Teams",
        title: "Technology Teams",
        department: "Software Technology",
        children: [
          {
            id: "1-2-1",
            name: "Oracle Apex",
            title: "Oracle Apex Development",
            department: "Software Technology",
            subDepartment: "Oracle Apex",
            children: [
              {
                id: "1-2-1-1",
                name: "Md. Farhad Hossain",
                title: "Programmer",
                department: "Software Technology",
                subDepartment: "Oracle Apex",
              },
              {
                id: "1-2-1-2",
                name: "Md. Pabel Hossain",
                title: "Jr. Programmer",
                department: "Software Technology",
                subDepartment: "Oracle Apex",
              },
              {
                id: "1-2-1-3",
                name: "Md. Faysal Ahmed",
                title: "Jr. Programmer",
                department: "Software Technology",
                subDepartment: "Oracle Apex",
              },
              {
                id: "1-2-1-4",
                name: "Israt Jahan Binta Kabir",
                title: "Trainee Programmer",
                department: "Software Technology",
                subDepartment: "Oracle Apex",
              }
            ],
          },
          {
            id: "1-2-2",
            name: "JAVA",
            title: "Java Development",
            department: "Software Technology",
            subDepartment: "Java",
            children: [
              {
                id: "1-2-2-1",
                name: "Md. Firoj Mahmud",
                title: "Sr. Programmer",
                department: "Software Technology",
                subDepartment: "Java",
              },
              {
                id: "1-2-2-2",
                name: "Sakib Ahmed",
                title: "Jr. Programmer",
                department: "Software Technology",
                subDepartment: "Java",
              },
              {
                id: "1-2-2-3",
                name: "Din Islam",
                title: "Jr. Programmer",
                department: "Software Technology",
                subDepartment: "Java",
              },
              {
                id: "1-2-2-4",
                name: "Mahzabin Ferdous",
                title: "Trainee Programmer",
                department: "Software Technology",
                subDepartment: "Java",
              },
              {
                id: "1-2-2-5",
                name: "Md. Jahir Uddin",
                title: "Trainee Programmer",
                department: "Software Technology",
                subDepartment: "Java",
              }
            ],
          },
          {
            id: "1-2-3",
            name: "PHP",
            title: "PHP Development",
            department: "Software Technology",
            subDepartment: "PHP",
            children: [
              {
                id: "1-2-3-1",
                name: "Md. Aminul Huq",
                title: "Sr. Programmer",
                department: "Software Technology",
                subDepartment: "PHP",
              },
              {
                id: "1-2-3-2",
                name: "Khan Rafaat Abtahe",
                title: "Programmer",
                department: "Software Technology",
                subDepartment: "PHP",
              },
              {
                id: "1-2-3-3",
                name: "Md. Sohel Rana Tipu",
                title: "Programmer",
                department: "Software Technology",
                subDepartment: "PHP",
              },
              {
                id: "1-2-3-4",
                name: "Kazi Moazzem Hossain",
                title: "Jr. Programmer",
                department: "Software Technology",
                subDepartment: "PHP",
              },
              {
                id: "1-2-3-5",
                name: "Md. Shohag Hossain",
                title: "Jr. Programmer",
                department: "Software Technology",
                subDepartment: "PHP",
              },
              {
                id: "1-2-3-6",
                name: "Azizul Hakim Anik",
                title: "Trainee Programmer",
                department: "Software Technology",
                subDepartment: "PHP",
              },
              {
                id: "1-2-3-7",
                name: "Shahria Sultana Sunnah",
                title: "Trainee Programmer",
                department: "Software Technology",
                subDepartment: "PHP",
              }
            ],
          },
          {
            id: "1-2-4",
            name: "Mobile APPS",
            title: "Mobile Applications",
            department: "Software Technology",
            subDepartment: "Mobile Apps",
            children: [
              {
                id: "1-2-4-1",
                name: "Md. Akramul Hasan",
                title: "Analyst Programmer",
                department: "Software Technology",
                subDepartment: "Mobile Apps",
              },
              {
                id: "1-2-4-2",
                name: "Md. Hossain",
                title: "Sr. Programmer",
                department: "Software Technology",
                subDepartment: "Mobile Apps",
              },
              {
                id: "1-2-4-3",
                name: "Rokib Rahman",
                title: "Jr. Programmer",
                department: "Software Technology",
                subDepartment: "Mobile Apps",
              },
              {
                id: "1-2-4-4",
                name: "Md. Nayeem",
                title: "Jr. Programmer",
                department: "Software Technology",
                subDepartment: "Mobile Apps",
              },
              {
                id: "1-2-4-5",
                name: "Md. Shakil Ahmed (MA)",
                title: "Jr. Programmer",
                department: "Software Technology",
                subDepartment: "Mobile Apps",
              }
            ],
          },
          {
            id: "1-2-5",
            name: "Automation",
            title: "Automation",
            department: "Software Technology",
            subDepartment: "Automation",
            children: [
              {
                id: "1-2-5-1",
                name: "Abu Talha Rocky",
                title: "Programmer",
                department: "Software Technology",
                subDepartment: "Automation",
              },
              {
                id: "1-2-5-2",
                name: "Rizeya Rabbi",
                title: "Jr. Programmer",
                department: "Software Technology",
                subDepartment: "Automation",
              },
              {
                id: "1-2-5-3",
                name: "Saad Ahmed",
                title: "Jr. Programmer",
                department: "Software Technology",
                subDepartment: "Automation",
              }
            ],
          },
          {
            id: "1-2-6",
            name: "MERN",
            title: "MERN Stack",
            department: "Software Technology",
            subDepartment: "MERN",
            children: [
              {
                id: "1-2-6-1",
                name: "Mahfuz Islam",
                title: "Full-stack Developer",
                department: "Software Technology",
                subDepartment: "MERN",
              },
              {
                id: "1-2-6-2",
                name: "Quazi Samiha Tasnim",
                title: "Jr. Front End Developer",
                department: "Software Technology",
                subDepartment: "MERN",
              },
              {
                id: "1-2-6-3",
                name: "Meraj Hossain",
                title: "Jr. Front End Developer",
                department: "Software Technology",
                subDepartment: "MERN",
              },
              {
                id: "1-2-6-4",
                name: "Minhazur Rahman",
                title: "Frontend Developer",
                department: "Software Technology",
                subDepartment: "MERN",
              },
              {
                id: "1-2-6-5",
                name: "Mohammad Mahabub Alam",
                title: "Intern",
                department: "Software Technology",
                subDepartment: "MERN",
              },
              {
                id: "1-2-6-6",
                name: "Kamrul Hasan Bhuiyan",
                title: "Intern",
                department: "Software Technology",
                subDepartment: "MERN",
              },
              {
                id: "1-2-6-7",
                name: "Abir Hasan Al Amin",
                title: "Intern",
                department: "Software Technology",
                subDepartment: "MERN",
              }
            ],
          },
          {
            id: "1-2-7",
            name: "Python",
            title: "Python Development",
            department: "Software Technology",
            subDepartment: "Python",
            children: [
              {
                id: "1-2-7-1",
                name: "Md. Nurnobi Islam",
                title: "Trainee Programmer",
                department: "Software Technology",
                subDepartment: "Python",
              },
              {
                id: "1-2-7-2",
                name: "Md. Tarek Aziz",
                title: "Trainee Programmer",
                department: "Software Technology",
                subDepartment: "Python",
              },
              {
                id: "1-2-7-3",
                name: "Anika Anjum",
                title: "Intern",
                department: "Software Technology",
                subDepartment: "Python",
              }
            ],
          }
        ],
      }
    ]
  };

  const infrastructureDepartment: Employee = {
    id: "2",
    name: "Muhammad Mehedi Hasan",
    title: "Manager, Database Management",
    department: "Infrastructure Technology",
    image: "/images/ati-logo.png",
    children: [
      {
        id: "2-1",
        name: "DBMS",
        title: "Database Management Systems",
        department: "Infrastructure Technology",
        subDepartment: "DBMS",
        children: [
          {
            id: "2-1-1",
            name: "Md. Sirajul Islam",
            title: "Assistant Database Administrator",
            department: "Infrastructure Technology",
            subDepartment: "DBMS",
          },
          {
            id: "2-1-2",
            name: "Sadman Rahamat Bishal",
            title: "Trainee Database Administrator",
            department: "Infrastructure Technology",
            subDepartment: "DBMS",
          }
        ],
      },
      {
        id: "2-2",
        name: "System Service",
        title: "System Services",
        department: "Infrastructure Technology",
        subDepartment: "System Service",
        children: [
          {
            id: "2-2-1",
            name: "Alimul Rajib Shuvo",
            title: "Sr. System & Support Engineer",
            department: "Infrastructure Technology",
            subDepartment: "System Service",
          },
          {
            id: "2-2-2",
            name: "Asif Reza",
            title: "Sr. System & Support Engineer",
            department: "Infrastructure Technology",
            subDepartment: "System Service",
          },
          {
            id: "2-2-3",
            name: "Md. Yousha Islam",
            title: "System Engineer",
            department: "Infrastructure Technology",
            subDepartment: "System Service",
          },
          {
            id: "2-2-4",
            name: "Md. Jakaria",
            title: "System Engineer",
            department: "Infrastructure Technology",
            subDepartment: "System Service",
          },
          {
            id: "2-2-5",
            name: "Montasir Mamun",
            title: "Jr. System Engineer",
            department: "Infrastructure Technology",
            subDepartment: "System Service",
          },
          {
            id: "2-2-6",
            name: "Md. Labib Hasan",
            title: "Intern",
            department: "Infrastructure Technology",
            subDepartment: "System Service",
          }
        ],
      },
      {
        id: "2-3",
        name: "Network Service",
        title: "Network Services",
        department: "Infrastructure Technology",
        subDepartment: "Network Service",
        children: [
          {
            id: "2-3-1",
            name: "Md. Tanzimul Hasan",
            title: "System & Support Engineer",
            department: "Infrastructure Technology",
            subDepartment: "Network Service",
          },
          {
            id: "2-3-2",
            name: "Md. Shobuj Mondal",
            title: "Network Engineer",
            department: "Infrastructure Technology",
            subDepartment: "Network Service",
          }
        ],
      },
      {
        id: "2-4",
        name: "Support Service",
        title: "Support Services",
        department: "Infrastructure Technology",
        subDepartment: "Support Service",
        children: [
          {
            id: "2-4-1",
            name: "Md. Abdul Latif",
            title: "Support Engineer",
            department: "Infrastructure Technology",
            subDepartment: "Support Service",
          },
          {
            id: "2-4-2",
            name: "Md. Romik Babu",
            title: "Jr. Support Engineer",
            department: "Infrastructure Technology",
            subDepartment: "Support Service",
          },
          {
            id: "2-4-3",
            name: "Md. Mafidul Islam",
            title: "Jr. Support Engineer",
            department: "Infrastructure Technology",
            subDepartment: "Support Service",
          },
          {
            id: "2-4-4",
            name: "Abdul Kadir",
            title: "Junior System Engineer",
            department: "Infrastructure Technology",
            subDepartment: "Support Service",
          },
          {
            id: "2-4-5",
            name: "Md. Jamil Hosen",
            title: "Jr. Support Engineer",
            department: "Infrastructure Technology",
            subDepartment: "Support Service",
          },
          {
            id: "2-4-6",
            name: "Md. Shahriar Hossain",
            title: "Support Engineer",
            department: "Infrastructure Technology",
            subDepartment: "Support Service",
          }
        ],
      }
    ]
  };

  const creativeDepartment: Employee = {
    id: "3",
    name: "Hifzul Karim Khan",
    title: "Head of Creative",
    department: "Creative",
    image: "/images/ati-logo.png",
    children: [
      {
        id: "3-1",
        name: "UI/UX",
        title: "UI/UX Design",
        department: "Creative",
        subDepartment: "UI/UX",
        children: [
          {
            id: "3-1-1",
            name: "Umme Kulsum Suriya",
            title: "Intern",
            department: "Creative",
            subDepartment: "UI/UX",
          },
          {
            id: "3-1-2",
            name: "Md. Abdul Aziz Mazumder",
            title: "Jr. UI/UX Designer",
            department: "Creative",
            subDepartment: "UI/UX",
          },
          {
            id: "3-1-3",
            name: "Mushfiq Qayyum",
            title: "Jr. UI/UX Designer",
            department: "Creative",
            subDepartment: "UI/UX",
          },
          {
            id: "3-1-4",
            name: "Tanvir Rayhan",
            title: "Jr. UI/UX Designer",
            department: "Creative",
            subDepartment: "UI/UX",
          },
          {
            id: "3-1-5",
            name: "Md. Shakil Ahmed",
            title: "Jr. UI/UX Designer",
            department: "Creative",
            subDepartment: "UI/UX",
          },
          {
            id: "3-1-6",
            name: "Binti Biswas",
            title: "Trainee UI/UX Designer",
            department: "Creative",
            subDepartment: "UI/UX",
          },
          {
            id: "3-1-7",
            name: "Zerin Taslim",
            title: "Jr. UI/UX Designer",
            department: "Creative",
            subDepartment: "UI/UX",
          }
        ],
      },
      {
        id: "3-2",
        name: "Creative",
        title: "Creative Design",
        department: "Creative",
        subDepartment: "Creative Design",
        children: [
          {
            id: "3-2-1",
            name: "Nihal Habib Ahmed",
            title: "Head of Business Communication",
            department: "Creative",
            subDepartment: "Creative Design",
          },
          {
            id: "3-2-2",
            name: "Avimannu Roy",
            title: "Copy Supervisor Strategist",
            department: "Creative",
            subDepartment: "Creative Design",
          },
          {
            id: "3-2-3",
            name: "Safquat Nazib",
            title: "Copywriter",
            department: "Creative",
            subDepartment: "Creative Design",
          },
          {
            id: "3-2-4",
            name: "Md. Ashequl Alam Reefat",
            title: "Graphies & Motion Designer",
            department: "Creative",
            subDepartment: "Creative Design",
          },
          {
            id: "3-2-5",
            name: "Tajrain Mahera Ali",
            title: "Design & Illustration Executive",
            department: "Creative",
            subDepartment: "Creative Design",
          },
          {
            id: "3-2-6",
            name: "Rahmatur Rahman",
            title: "Graphies & Motion Designer",
            department: "Creative",
            subDepartment: "Creative Design",
          },
          {
            id: "3-2-7",
            name: "Meraz Ul Haque",
            title: "Creative Matter",
            department: "Creative",
            subDepartment: "Creative Design",
          }
        ],
      },
      {
        id: "3-3",
        name: "CSS",
        title: "Customer Support and Service",
        department: "Creative",
        subDepartment: "CSS",
        children: [
          {
            id: "3-3-1",
            name: "Kazi Iffat Monowara",
            title: "Client Servicing Executive",
            department: "Creative",
            subDepartment: "CSS",
          },
          {
            id: "3-3-2",
            name: "Merina Rashid",
            title: "CSS Representative",
            department: "Creative",
            subDepartment: "CSS",
          },
          {
            id: "3-3-3",
            name: "Md. Mahfuzur Rahman Mishu",
            title: "CSS Representative",
            department: "Creative",
            subDepartment: "CSS",
          },
          {
            id: "3-3-4",
            name: "Sumaya Sultana",
            title: "Jr. CSS Representative",
            department: "Creative",
            subDepartment: "CSS",
          },
          {
            id: "3-3-5",
            name: "Sadia Afrin",
            title: "Trainee CSS Representative",
            department: "Creative",
            subDepartment: "CSS",
          },
          {
            id: "3-3-6",
            name: "Mahmudur Rahman",
            title: "Trainee CSS Representative",
            department: "Creative",
            subDepartment: "CSS",
          },
          {
            id: "3-3-7",
            name: "Mobarak Hosen Emon",
            title: "Trainee",
            department: "Creative",
            subDepartment: "CSS",
          }
        ],
      }
    ]
  };

  const hrDepartment: Employee = {
    id: "4",
    name: "Md. Mizan Hossain",
    title: "Sr. Executive",
    department: "HR & Administration",
    image: "/images/ati-logo.png",
    children: [
      {
        id: "4-1",
        name: "Admin",
        title: "Administration",
        department: "HR & Administration",
        subDepartment: "Admin",
        children: [
          {
            id: "4-1-1",
            name: "Md. Nazim Uddin",
            title: "Sr. Office Assistant",
            department: "HR & Administration",
            subDepartment: "Admin",
          },
          {
            id: "4-1-2",
            name: "Md. Mamun ur Rashid",
            title: "Office Guard",
            department: "HR & Administration",
            subDepartment: "Admin",
          },
          {
            id: "4-1-3",
            name: "Md. Sagor Sarkar",
            title: "Office Guard",
            department: "HR & Administration",
            subDepartment: "Admin",
          },
          {
            id: "4-1-4",
            name: "Md. Mojibur Rahman",
            title: "Cook",
            department: "HR & Administration",
            subDepartment: "Admin",
          },
          {
            id: "4-1-5",
            name: "Nazma Begum",
            title: "Assistant Cook",
            department: "HR & Administration",
            subDepartment: "Admin",
          },
          {
            id: "4-1-6",
            name: "Md. Nurul Islam",
            title: "Cleaner",
            department: "HR & Administration",
            subDepartment: "Admin",
          },
          {
            id: "4-1-7",
            name: "Md. Ataur Rahman",
            title: "Cleaner",
            department: "HR & Administration",
            subDepartment: "Admin",
          },
          {
            id: "4-1-8",
            name: "Chandra Das",
            title: "Cleaner",
            department: "HR & Administration",
            subDepartment: "Admin",
          },
          {
            id: "4-1-9",
            name: "Rafiqul Islam",
            title: "Sr. Office Assistant",
            department: "HR & Administration",
            subDepartment: "Admin",
          },
          {
            id: "4-1-10",
            name: "Minhaj Sarker",
            title: "Support Staff",
            department: "HR & Administration",
            subDepartment: "Admin",
          }
        ],
      },
      {
        id: "4-2",
        name: "HR",
        title: "Human Resources",
        department: "HR & Administration",
        subDepartment: "HR",
        children: [
          {
            id: "4-2-1",
            name: "Md. Sajjad Hossain",
            title: "Executive, HR & Admin",
            department: "HR & Administration",
            subDepartment: "HR",
          },
          {
            id: "4-2-2",
            name: "Mizanur Rahman",
            title: "Executive, HR & Admin",
            department: "HR & Administration",
            subDepartment: "HR",
          },
          {
            id: "4-2-3",
            name: "Oliullah",
            title: "Jr. Executive Billing & Purchase",
            department: "HR & Administration",
            subDepartment: "HR",
          }
        ],
      }
    ]
  };

  const businessDepartment: Employee = {
    id: "5",
    name: "Abu Saleh Yusuf",
    title: "Head of Business Strategy Engagement",
    department: "Business Strategy Engagement",
    image: "/images/ati-logo.png",
    children: [
      {
        id: "5-1",
        name: "Business Development",
        title: "Business Development",
        department: "Business Strategy Engagement",
        subDepartment: "Business Development",
        children: [
          {
            id: "5-1-1",
            name: "Md. Shaheed Hossain",
            title: "Business Development Associate",
            department: "Business Strategy Engagement",
            subDepartment: "Business Development",
          },
          {
            id: "5-1-2",
            name: "Ms. Tahsin Kamal",
            title: "Senior Business Development Associate",
            department: "Business Strategy Engagement",
            subDepartment: "Business Development",
          },
          {
            id: "5-1-3",
            name: "Rahad Hasan Chyon",
            title: "Jr. Business Process Coordinator",
            department: "Business Strategy Engagement",
            subDepartment: "Business Development",
          },
          {
            id: "5-1-4",
            name: "Md. Sakhawat Hossain Rabbi",
            title: "Business Development Associate",
            department: "Business Strategy Engagement",
            subDepartment: "Business Development",
          },
          {
            id: "5-1-5",
            name: "Foysal Hasan Shakil",
            title: "Marketing Associate",
            department: "Business Strategy Engagement",
            subDepartment: "Business Development",
          },
          {
            id: "5-1-6",
            name: "Fahmidun Nabi",
            title: "Marketing Associate",
            department: "Business Strategy Engagement",
            subDepartment: "Business Development",
          },
          {
            id: "5-1-7",
            name: "Syeda Ramima Rafsana Nadia",
            title: "Business Development Associate",
            department: "Business Strategy Engagement",
            subDepartment: "Business Development",
          },
          {
            id: "5-1-8",
            name: "Ananna Rahman",
            title: "Business Development Associate",
            department: "Business Strategy Engagement",
            subDepartment: "Business Development",
          },
          {
            id: "5-1-9",
            name: "Mahadi Hassan Rasel",
            title: "Technical Sales Associate",
            department: "Business Strategy Engagement",
            subDepartment: "Business Development",
          }
        ],
      },
      {
        id: "5-2",
        name: "Project Management",
        title: "Project Management",
        department: "Business Strategy Engagement",
        subDepartment: "Project Management",
        children: [
          {
            id: "5-2-1",
            name: "Maksuda Mila",
            title: "Jr. Project Coordinator",
            department: "Business Strategy Engagement",
            subDepartment: "Project Management",
          },
          {
            id: "5-2-2",
            name: "Fariha Tabassum Chinmoy",
            title: "Jr. Project Coordinator",
            department: "Business Strategy Engagement",
            subDepartment: "Project Management",
          },
          {
            id: "5-2-3",
            name: "Md. Moinul Islam Rakib",
            title: "Jr. Project Coordinator",
            department: "Business Strategy Engagement",
            subDepartment: "Project Management",
          },
          {
            id: "5-2-4",
            name: "Md. Al Imran Tonmoy",
            title: "Intern",
            department: "Business Strategy Engagement",
            subDepartment: "Project Management",
          },
          {
            id: "5-2-5",
            name: "Nazmul Hassan",
            title: "Trainee Project Coordinator",
            department: "Business Strategy Engagement",
            subDepartment: "Project Management",
          }
        ],
      },
      {
        id: "5-3",
        name: "Software Quality Assurance",
        title: "Software Quality Assurance",
        department: "Business Strategy Engagement",
        subDepartment: "Software Quality Assurance",
        children: [
          {
            id: "5-3-1",
            name: "Md. Toufik Taj",
            title: "Jr. Software Quality Assurance",
            department: "Business Strategy Engagement",
            subDepartment: "Software Quality Assurance",
          },
          {
            id: "5-3-2",
            name: "Natasha Yasmin",
            title: "Jr. Software Quality Assurance",
            department: "Business Strategy Engagement",
            subDepartment: "Software Quality Assurance",
          }
        ],
      },
      {
        id: "5-4",
        name: "Business Process Management",
        title: "Business Process Management",
        department: "Business Strategy Engagement",
        subDepartment: "Business Process Management",
        children: [
          {
            id: "5-4-1",
            name: "Shila Rahman",
            title: "Jr. Business Process Coordinator",
            department: "Business Strategy Engagement",
            subDepartment: "Business Process Management",
          }
        ],
      }
    ]
  };

  //Top level management
  const topManagement: Employee = {
    id: "0",
    name: "Syed Ahmed Ali",
    title: "Chief Information Officer",
    department: "Management",
    image: "/images/ati-logo.png",
    children: [
      {
        id: "0-1",
        name: "Software Technology",
        title: "Software Technology Department",
        department: "Management",
        children: [softwareDepartment]
      },
      {
        id: "0-2",
        name: "Infrastructure Technology",
        title: "Infrastructure Technology Department",
        department: "Management",
        children: [infrastructureDepartment]
      },
      {
        id: "0-3",
        name: "Creative",
        title: "Creative Department",
        department: "Management",
        children: [creativeDepartment]
      },
      {
        id: "0-4",
        name: "HR & Administration",
        title: "HR & Administration Department",
        department: "Management",
        children: [hrDepartment]
      },
      {
        id: "0-5",
        name: "Business Strategy",
        title: "Business Strategy Department",
        department: "Management",
        children: [businessDepartment]
      }
    ]
  };

  // // Software Technology Department Data
  // const softwareDepartment: Employee = {
  //   id: "1",
  //   name: "Anisul Islam",
  //   title: "Head of Software Technology",
  //   department: "Software Technology",
  //   image: "/images/ati-logo.png",
  //   children: [
  //     {
  //       id: "1-1",
  //       name: "Oracle Team",
  //       title: "Oracle Development",
  //       department: "Software Technology",
  //       subDepartment: "Oracle",
  //       children: [
  //         {
  //           id: "1-1-1",
  //           name: "Shahinoor Akhtar",
  //           title: "Sr. Programmer",
  //           department: "Software Technology",
  //           subDepartment: "Oracle",
  //         },
  //         {
  //           id: "1-1-2",
  //           name: "Md. Sanwar Hossain",
  //           title: "Analyst Programmer",
  //           department: "Software Technology",
  //           subDepartment: "Oracle",
  //         },
  //         {
  //           id: "1-1-3",
  //           name: "Md. Muhaimin Sk",
  //           title: "Analyst Programmer",
  //           department: "Software Technology",
  //           subDepartment: "Oracle",
  //         },
  //         {
  //           id: "1-1-4",
  //           name: "Anik Barua",
  //           title: "Analyst Programmer",
  //           department: "Software Technology",
  //           subDepartment: "Oracle",
  //         },
  //         {
  //           id: "1-1-5",
  //           name: "Shammi Akhtar",
  //           title: "Sr. Programmer",
  //           department: "Software Technology",
  //           subDepartment: "Oracle",
  //         },
  //         {
  //           id: "1-1-6",
  //           name: "Nusrat Sultana",
  //           title: "Jr. Programmer",
  //           department: "Software Technology",
  //           subDepartment: "Oracle",
  //         },
  //         {
  //           id: "1-1-7",
  //           name: "Sabir Ahmed",
  //           title: "Programmer",
  //           department: "Software Technology",
  //           subDepartment: "Oracle",
  //         },
  //         {
  //           id: "1-1-8",
  //           name: "Shampa Islam",
  //           title: "Programmer",
  //           department: "Software Technology",
  //           subDepartment: "Oracle",
  //         },
  //         {
  //           id: "1-1-9",
  //           name: "Muhammad Rashidul Alam",
  //           title: "Programmer",
  //           department: "Software Technology",
  //           subDepartment: "Oracle",
  //         },
  //         {
  //           id: "1-1-10",
  //           name: "Ashraf Siddique",
  //           title: "Trainee Support Engineer",
  //           department: "Software Technology",
  //           subDepartment: "Oracle",
  //         },
  //         {
  //           id: "1-1-11",
  //           name: "Md. Almahamud",
  //           title: "Trainee Technical Support Engineer",
  //           department: "Software Technology",
  //           subDepartment: "Oracle",
  //         },
  //       ],
  //     },
  //     {
  //       id: "1-2",
  //       name: "Technology Teams",
  //       title: "Technology Teams",
  //       department: "Software Technology",
  //       children: [
  //         {
  //           id: "1-2-1",
  //           name: "Oracle Apex",
  //           title: "Oracle Apex Development",
  //           department: "Software Technology",
  //           subDepartment: "Oracle Apex",
  //           children: [
  //             {
  //               id: "1-2-1-1",
  //               name: "Md. Jahirul Islam",
  //               title: "Trainee Technical Support Engineer",
  //               department: "Software Technology",
  //               subDepartment: "Oracle Apex",
  //             },
  //             {
  //               id: "1-2-1-2",
  //               name: "Md. Fahad Hossain",
  //               title: "Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Oracle Apex",
  //             },
  //           ],
  //         },
  //         {
  //           id: "1-2-2",
  //           name: "JAVA",
  //           title: "Java Development",
  //           department: "Software Technology",
  //           subDepartment: "Java",
  //           children: [
  //             {
  //               id: "1-2-2-1",
  //               name: "Mohammad Jakir Hossain",
  //               title: "Sr. Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Java",
  //             },
  //             {
  //               id: "1-2-2-2",
  //               name: "Md. Jamilul Islam",
  //               title: "Analyst Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Java",
  //             },
  //             {
  //               id: "1-2-2-3",
  //               name: "Md. Firoj Mahmud",
  //               title: "Sr. Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Java",
  //             },
  //             {
  //               id: "1-2-2-4",
  //               name: "Md. Aminul Haq",
  //               title: "Sr. Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Java",
  //             },
  //             {
  //               id: "1-2-2-5",
  //               name: "Sakib Ahmed",
  //               title: "Jr. Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Java",
  //             },
  //             {
  //               id: "1-2-2-6",
  //               name: "Din Islam",
  //               title: "Jr. Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Java",
  //             },
  //             {
  //               id: "1-2-2-7",
  //               name: "Md. Foysal Ahmed",
  //               title: "Jr. Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Java",
  //             },
  //             {
  //               id: "1-2-2-8",
  //               name: "Sifat Al Arif",
  //               title: "Intern",
  //               department: "Software Technology",
  //               subDepartment: "Java",
  //             },
  //             {
  //               id: "1-2-2-9",
  //               name: "Israt Jahan Binta Kabir",
  //               title: "Trainee Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Java",
  //             },
  //           ],
  //         },
  //         {
  //           id: "1-2-3",
  //           name: "PHP",
  //           title: "PHP Development",
  //           department: "Software Technology",
  //           subDepartment: "PHP",
  //           children: [
  //             {
  //               id: "1-2-3-1",
  //               name: "Md. Aminul Hossain",
  //               title: "Sr. Programmer",
  //               department: "Software Technology",
  //               subDepartment: "PHP",
  //             },
  //             {
  //               id: "1-2-3-2",
  //               name: "Md. Aminul Haq",
  //               title: "Sr. Programmer",
  //               department: "Software Technology",
  //               subDepartment: "PHP",
  //             },
  //             {
  //               id: "1-2-3-3",
  //               name: "Md. Shobuj Hossain",
  //               title: "Jr. Programmer",
  //               department: "Software Technology",
  //               subDepartment: "PHP",
  //             },
  //             {
  //               id: "1-2-3-4",
  //               name: "Mahrabin Ferdous",
  //               title: "Trainee Programmer",
  //               department: "Software Technology",
  //               subDepartment: "PHP",
  //             },
  //             {
  //               id: "1-2-3-5",
  //               name: "Md. Tahir Uddin",
  //               title: "Trainee Programmer",
  //               department: "Software Technology",
  //               subDepartment: "PHP",
  //             },
  //             {
  //               id: "1-2-3-6",
  //               name: "Muhtasim Fuad Ayon",
  //               title: "Trainee Programmer",
  //               department: "Software Technology",
  //               subDepartment: "PHP",
  //             },
  //             {
  //               id: "1-2-3-7",
  //               name: "Azizul Hakim Anik",
  //               title: "Trainee Programmer",
  //               department: "Software Technology",
  //               subDepartment: "PHP",
  //             },
  //             {
  //               id: "1-2-3-8",
  //               name: "Shahria Sultana Sunnah",
  //               title: "Trainee Programmer",
  //               department: "Software Technology",
  //               subDepartment: "PHP",
  //             },
  //           ],
  //         },
  //         {
  //           id: "1-2-4",
  //           name: "Mobile APPS",
  //           title: "Mobile Applications",
  //           department: "Software Technology",
  //           subDepartment: "Mobile Apps",
  //           children: [
  //             {
  //               id: "1-2-4-1",
  //               name: "Md. Akramul Hasan",
  //               title: "Analyst Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Mobile Apps",
  //             },
  //             {
  //               id: "1-2-4-2",
  //               name: "Md. Hossain",
  //               title: "Sr. Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Mobile Apps",
  //             },
  //             {
  //               id: "1-2-4-3",
  //               name: "Khan Faizan Akhila",
  //               title: "Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Mobile Apps",
  //             },
  //             {
  //               id: "1-2-4-4",
  //               name: "Md. Sobel Rana Tipu",
  //               title: "Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Mobile Apps",
  //             },
  //             {
  //               id: "1-2-4-5",
  //               name: "Kazi Moazzem Hossain",
  //               title: "Jr. Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Mobile Apps",
  //             },
  //           ],
  //         },
  //         {
  //           id: "1-2-5",
  //           name: "Automation",
  //           title: "Automation",
  //           department: "Software Technology",
  //           subDepartment: "Automation",
  //           children: [
  //             {
  //               id: "1-2-5-1",
  //               name: "Abu Talha Rocky",
  //               title: "Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Automation",
  //             },
  //             {
  //               id: "1-2-5-2",
  //               name: "Robib Rahman",
  //               title: "Jr. Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Automation",
  //             },
  //             {
  //               id: "1-2-5-3",
  //               name: "Md. Naymur",
  //               title: "Jr. Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Automation",
  //             },
  //             {
  //               id: "1-2-5-4",
  //               name: "Md. Shakil Ahmed",
  //               title: "Jr. Programmer",
  //               department: "Software Technology",
  //               subDepartment: "Automation",
  //             },
  //           ],
  //         },
  //         {
  //           id: "1-2-6",
  //           name: "MEAN",
  //           title: "MEAN Stack",
  //           department: "Software Technology",
  //           subDepartment: "MEAN",
  //           children: [
  //             {
  //               id: "1-2-6-1",
  //               name: "Mahfuz Islam",
  //               title: "Full-Stack Developer",
  //               department: "Software Technology",
  //               subDepartment: "MEAN",
  //             },
  //             {
  //               id: "1-2-6-2",
  //               name: "Md. Golam Muid Talukder",
  //               title: "Full-Stack Developer",
  //               department: "Software Technology",
  //               subDepartment: "MEAN",
  //             },
  //             {
  //               id: "1-2-6-3",
  //               name: "Rusya Rabbi",
  //               title: "Jr. Programmer",
  //               department: "Software Technology",
  //               subDepartment: "MEAN",
  //             },
  //             {
  //               id: "1-2-6-4",
  //               name: "Saad Ahmed",
  //               title: "Jr. Programmer",
  //               department: "Software Technology",
  //               subDepartment: "MEAN",
  //             },
  //           ],
  //         },
  //         {
  //           id: "1-2-7",
  //           name: "Python",
  //           title: "Python Development",
  //           department: "Software Technology",
  //           subDepartment: "Python",
  //           children: [
  //             {
  //               id: "1-2-7-1",
  //               name: "Mohd Zarir",
  //               title: "Full-stack Developer",
  //               department: "Software Technology",
  //               subDepartment: "Python",
  //             },
  //             {
  //               id: "1-2-7-2",
  //               name: "Anika Anjum",
  //               title: "Jr. Front End Developer",
  //               department: "Software Technology",
  //               subDepartment: "Python",
  //             },
  //             {
  //               id: "1-2-7-3",
  //               name: "Md. Tarek Aziz",
  //               title: "Jr. Developer",
  //               department: "Software Technology",
  //               subDepartment: "Python",
  //             },
  //             {
  //               id: "1-2-7-4",
  //               name: "Merzi Hossain",
  //               title: "Jr. Front End Developer",
  //               department: "Software Technology",
  //               subDepartment: "Python",
  //             },
  //             {
  //               id: "1-2-7-5",
  //               name: "Mohammad Mahtabob Alam",
  //               title: "Intern",
  //               department: "Software Technology",
  //               subDepartment: "Python",
  //             },
  //             {
  //               id: "1-2-7-6",
  //               name: "Kamrul Hasan Bhuiyan",
  //               title: "Intern",
  //               department: "Software Technology",
  //               subDepartment: "Python",
  //             },
  //             {
  //               id: "1-2-7-7",
  //               name: "Abu Hasan Al Amin",
  //               title: "Intern",
  //               department: "Software Technology",
  //               subDepartment: "Python",
  //             },
  //             {
  //               id: "1-2-7-8",
  //               name: "Mubasur Rahman",
  //               title: "Frontend Developer",
  //               department: "Software Technology",
  //               subDepartment: "Python",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // }

  // // Infrastructure Department Data
  // const infrastructureDepartment: Employee = {
  //   id: "2",
  //   name: "Muhammad Mahedi Hasan",
  //   title: "Head of Infrastructure & Database",
  //   department: "Infrastructure Technology",
  //   image: "/images/ati-logo.png",
  //   children: [
  //     {
  //       id: "2-1",
  //       name: "DBMS",
  //       title: "Database Management Systems",
  //       department: "Infrastructure Technology",
  //       subDepartment: "DBMS",
  //       children: [
  //         {
  //           id: "2-1-1",
  //           name: "Md. Sirajul Islam",
  //           title: "Database Administrator",
  //           department: "Infrastructure Technology",
  //           subDepartment: "DBMS",
  //         },
  //       ],
  //     },
  //     {
  //       id: "2-2",
  //       name: "System Service",
  //       title: "System Services",
  //       department: "Infrastructure Technology",
  //       subDepartment: "System Service",
  //       children: [
  //         {
  //           id: "2-2-1",
  //           name: "Altmul Rajib Shuvo",
  //           title: "System Engineer",
  //           department: "Infrastructure Technology",
  //           subDepartment: "System Service",
  //         },
  //         {
  //           id: "2-2-2",
  //           name: "Asif Reza",
  //           title: "System Engineer",
  //           department: "Infrastructure Technology",
  //           subDepartment: "System Service",
  //         },
  //         {
  //           id: "2-2-3",
  //           name: "Md. Shahriar Hossain",
  //           title: "System Engineer",
  //           department: "Infrastructure Technology",
  //           subDepartment: "System Service",
  //         },
  //         {
  //           id: "2-2-4",
  //           name: "Md. Zakaria",
  //           title: "System Engineer",
  //           department: "Infrastructure Technology",
  //           subDepartment: "System Service",
  //         },
  //         {
  //           id: "2-2-5",
  //           name: "Md. Mafidul Islam",
  //           title: "System Engineer",
  //           department: "Infrastructure Technology",
  //           subDepartment: "System Service",
  //         },
  //         {
  //           id: "2-2-6",
  //           name: "Abdul Kadir",
  //           title: "System Engineer",
  //           department: "Infrastructure Technology",
  //           subDepartment: "System Service",
  //         },
  //       ],
  //     },
  //     {
  //       id: "2-3",
  //       name: "Network Service",
  //       title: "Network Services",
  //       department: "Infrastructure Technology",
  //       subDepartment: "Network Service",
  //       children: [
  //         {
  //           id: "2-3-1",
  //           name: "Md. Tanzimul Hasan",
  //           title: "Network Engineer",
  //           department: "Infrastructure Technology",
  //           subDepartment: "Network Service",
  //         },
  //         {
  //           id: "2-3-2",
  //           name: "Md. Shobuj Mondal",
  //           title: "Network Engineer",
  //           department: "Infrastructure Technology",
  //           subDepartment: "Network Service",
  //         },
  //       ],
  //     },
  //     {
  //       id: "2-4",
  //       name: "Hardware Service",
  //       title: "Hardware Services",
  //       department: "Infrastructure Technology",
  //       subDepartment: "Hardware Service",
  //       children: [
  //         {
  //           id: "2-4-1",
  //           name: "Md. Abdul Latif",
  //           title: "Hardware Engineer",
  //           department: "Infrastructure Technology",
  //           subDepartment: "Hardware Service",
  //         },
  //         {
  //           id: "2-4-2",
  //           name: "Md. Romik Babu",
  //           title: "Hardware Engineer",
  //           department: "Infrastructure Technology",
  //           subDepartment: "Hardware Service",
  //         },
  //         {
  //           id: "2-4-3",
  //           name: "Md. Jamil Hosen",
  //           title: "Hardware Engineer",
  //           department: "Infrastructure Technology",
  //           subDepartment: "Hardware Service",
  //         },
  //       ],
  //     },
  //   ],
  // }

  // // Creative Department Data
  // const creativeDepartment: Employee = {
  //   id: "3",
  //   name: "Head of Creative",
  //   title: "Head of Creative Department",
  //   department: "Creative",
  //   image: "/images/ati-logo.png",
  //   children: [
  //     {
  //       id: "3-1",
  //       name: "UI/UX",
  //       title: "UI/UX Design",
  //       department: "Creative",
  //       subDepartment: "UI/UX",
  //       children: [
  //         {
  //           id: "3-1-1",
  //           name: "Md. Abdul Aziz Mazumder",
  //           title: "UI/UX Designer",
  //           department: "Creative",
  //           subDepartment: "UI/UX",
  //         },
  //         {
  //           id: "3-1-2",
  //           name: "Mushfiq Qayyum",
  //           title: "UI/UX Designer",
  //           department: "Creative",
  //           subDepartment: "UI/UX",
  //         },
  //         {
  //           id: "3-1-3",
  //           name: "Tanvir Paytam",
  //           title: "UI/UX Designer",
  //           department: "Creative",
  //           subDepartment: "UI/UX",
  //         },
  //         {
  //           id: "3-1-4",
  //           name: "Md. Shakil Ahmed",
  //           title: "UI/UX Designer",
  //           department: "Creative",
  //           subDepartment: "UI/UX",
  //         },
  //         {
  //           id: "3-1-5",
  //           name: "Bisni Biswas",
  //           title: "UI/UX Designer",
  //           department: "Creative",
  //           subDepartment: "UI/UX",
  //         },
  //         {
  //           id: "3-1-6",
  //           name: "Zerin Taslim",
  //           title: "UI/UX Designer",
  //           department: "Creative",
  //           subDepartment: "UI/UX",
  //         },
  //       ],
  //     },
  //     {
  //       id: "3-2",
  //       name: "Creative",
  //       title: "Creative Design",
  //       department: "Creative",
  //       subDepartment: "Creative Design",
  //       children: [
  //         {
  //           id: "3-2-1",
  //           name: "Hafiz",
  //           title: "Creative Designer",
  //           department: "Creative",
  //           subDepartment: "Creative Design",
  //         },
  //         {
  //           id: "3-2-2",
  //           name: "Arinommu Roy",
  //           title: "Creative Designer",
  //           department: "Creative",
  //           subDepartment: "Creative Design",
  //         },
  //         {
  //           id: "3-2-3",
  //           name: "Farnaz Haque Nim",
  //           title: "Creative Designer",
  //           department: "Creative",
  //           subDepartment: "Creative Design",
  //         },
  //         {
  //           id: "3-2-4",
  //           name: "Md. Ashequl Alam Raafe",
  //           title: "Creative Designer",
  //           department: "Creative",
  //           subDepartment: "Creative Design",
  //         },
  //         {
  //           id: "3-2-5",
  //           name: "Rahanur Rahman",
  //           title: "Creative Designer",
  //           department: "Creative",
  //           subDepartment: "Creative Design",
  //         },
  //       ],
  //     },
  //     {
  //       id: "3-3",
  //       name: "CSS",
  //       title: "CSS Development",
  //       department: "Creative",
  //       subDepartment: "CSS",
  //       children: [],
  //     },
  //   ],
  // }

  // // HR Department Data
  // const hrDepartment: Employee = {
  //   id: "4",
  //   name: "Md. Mizan Hossain",
  //   title: "Human Resource Management",
  //   department: "HR & Administration",
  //   image: "/images/ati-logo.png",
  //   children: [
  //     {
  //       id: "4-1",
  //       name: "Mizanur Rahman",
  //       title: "Executive, Admin",
  //       department: "HR & Administration",
  //       subDepartment: "Admin",
  //       children: [
  //         {
  //           id: "4-1-1",
  //           name: "Md. Naim Uddin",
  //           title: "Sr. Office Assistant",
  //           department: "HR & Administration",
  //           subDepartment: "Admin",
  //         },
  //         {
  //           id: "4-1-2",
  //           name: "Md. Mamun ur Rashid",
  //           title: "Office Guard",
  //           department: "HR & Administration",
  //           subDepartment: "Admin",
  //         },
  //         {
  //           id: "4-1-3",
  //           name: "Md. Sagar Nahar",
  //           title: "Office Guard",
  //           department: "HR & Administration",
  //           subDepartment: "Admin",
  //         },
  //         {
  //           id: "4-1-4",
  //           name: "Md. Mojibur Rahman",
  //           title: "Cook",
  //           department: "HR & Administration",
  //           subDepartment: "Admin",
  //         },
  //         {
  //           id: "4-1-5",
  //           name: "Nazma Begum",
  //           title: "Assistant Cook",
  //           department: "HR & Administration",
  //           subDepartment: "Admin",
  //         },
  //         {
  //           id: "4-1-6",
  //           name: "Md. Nurul Islam",
  //           title: "Cleaner",
  //           department: "HR & Administration",
  //           subDepartment: "Admin",
  //         },
  //         {
  //           id: "4-1-7",
  //           name: "Md. Anup Rahman",
  //           title: "Cleaner",
  //           department: "HR & Administration",
  //           subDepartment: "Admin",
  //         },
  //       ],
  //     },
  //     {
  //       id: "4-2",
  //       name: "Md. Sajjad Hossain",
  //       title: "HR Executive",
  //       department: "HR & Administration",
  //       subDepartment: "HR",
  //       children: [],
  //     },
  //     {
  //       id: "4-3",
  //       name: "Obidullah Jr.",
  //       title: "Executive Billing & Purchase",
  //       department: "HR & Administration",
  //       subDepartment: "Billing & Purchase",
  //       children: [],
  //     },
  //   ],
  // }

  // // Business Strategy Department Data
  // const businessDepartment: Employee = {
  //   id: "5",
  //   name: "Abu Saleh",
  //   title: "Head of Business Strategy Engagement",
  //   department: "Business Strategy Engagement",
  //   image: "/images/ati-logo.png",
  //   children: [
  //     {
  //       id: "5-1",
  //       name: "Business Development",
  //       title: "Business Development",
  //       department: "Business Strategy Engagement",
  //       subDepartment: "Business Development",
  //       children: [
  //         {
  //           id: "5-1-1",
  //           name: "Md. Shaheed Hossain",
  //           title: "Business Development Associate",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Business Development",
  //         },
  //         {
  //           id: "5-1-2",
  //           name: "Ms. Tahsin Kamal",
  //           title: "Senior Business Development Associate",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Business Development",
  //         },
  //         {
  //           id: "5-1-3",
  //           name: "Rahad Hasan Gayen",
  //           title: "Jr. Business Process Coordinator",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Business Development",
  //         },
  //         {
  //           id: "5-1-4",
  //           name: "Md. Sakhawat Hossain Rabbi",
  //           title: "Business Development Associate",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Business Development",
  //         },
  //         {
  //           id: "5-1-5",
  //           name: "Foyzal Hasan Shakil",
  //           title: "Marketing Associate",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Business Development",
  //         },
  //         {
  //           id: "5-1-6",
  //           name: "Fahimidun Nabi",
  //           title: "Marketing Associate",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Business Development",
  //         },
  //         {
  //           id: "5-1-7",
  //           name: "Syeda Ramima Rahana Nadia",
  //           title: "Business Development Associate",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Business Development",
  //         },
  //         {
  //           id: "5-1-8",
  //           name: "Ananna Rahman",
  //           title: "Business Development Associate",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Business Development",
  //         },
  //       ],
  //     },
  //     {
  //       id: "5-2",
  //       name: "Customer Service and Support",
  //       title: "Customer Service and Support",
  //       department: "Business Strategy Engagement",
  //       subDepartment: "Customer Service and Support",
  //       children: [
  //         {
  //           id: "5-2-1",
  //           name: "Md. Mahfuzur Rahman Mithu",
  //           title: "CSR Representative",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Customer Service and Support",
  //         },
  //         {
  //           id: "5-2-2",
  //           name: "Sumaya Sultana",
  //           title: "Assistant Service Lead",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Customer Service and Support",
  //         },
  //         {
  //           id: "5-2-3",
  //           name: "Sadia Afrin",
  //           title: "Trainee CSR Representative",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Customer Service and Support",
  //         },
  //         {
  //           id: "5-2-4",
  //           name: "Morzina Rashid",
  //           title: "CSR Representative",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Customer Service and Support",
  //         },
  //       ],
  //     },
  //     {
  //       id: "5-3",
  //       name: "Software Quality Assurance",
  //       title: "Software Quality Assurance",
  //       department: "Business Strategy Engagement",
  //       subDepartment: "Software Quality Assurance",
  //       children: [
  //         {
  //           id: "5-3-1",
  //           name: "Md. Toufik Taj",
  //           title: "Jr. Software Quality Assurance",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Software Quality Assurance",
  //         },
  //         {
  //           id: "5-3-2",
  //           name: "Nrittisha Yasmin",
  //           title: "Jr. Software Quality Assurance",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Software Quality Assurance",
  //         },
  //       ],
  //     },
  //     {
  //       id: "5-4",
  //       name: "Project Management",
  //       title: "Project Management",
  //       department: "Business Strategy Engagement",
  //       subDepartment: "Project Management",
  //       children: [
  //         {
  //           id: "5-4-1",
  //           name: "Farha Tabassum Chowdhury",
  //           title: "Jr. Project Coordinator",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Project Management",
  //         },
  //         {
  //           id: "5-4-2",
  //           name: "Md. Moinul Islam Rakib",
  //           title: "Jr. Project Coordinator",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Project Management",
  //         },
  //         {
  //           id: "5-4-3",
  //           name: "Md. Al Imran Tonnoy",
  //           title: "Intern",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Project Management",
  //         },
  //         {
  //           id: "5-4-4",
  //           name: "Nazmul Hassan",
  //           title: "Trainee Project Coordinator",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Project Management",
  //         },
  //       ],
  //     },
  //     {
  //       id: "5-5",
  //       name: "Business Process Management",
  //       title: "Business Process Management",
  //       department: "Business Strategy Engagement",
  //       subDepartment: "Business Process Management",
  //       children: [
  //         {
  //           id: "5-5-1",
  //           name: "Shila Rahman",
  //           title: "Jr. Business Process Coordinator",
  //           department: "Business Strategy Engagement",
  //           subDepartment: "Business Process Management",
  //         },
  //       ],
  //     },
  //   ],
  // }

  // Get department data based on active tab
  const getDepartmentData = () => {
    switch (activeTab) {
      case "software":
        return softwareDepartment
      case "infrastructure":
        return infrastructureDepartment
      case "creative":
        return creativeDepartment
      case "hr":
        return hrDepartment
      case "business":
        return businessDepartment
      default:
        return softwareDepartment
    }
  }

  // Get color for department
  const getDepartmentColor = (department: string) => {
    switch (department) {
      case "Software Technology":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Infrastructure Technology":
        return "bg-green-100 text-green-800 border-green-200"
      case "Creative":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "HR & Administration":
        return "bg-amber-100 text-amber-800 border-amber-200"
      case "Business Strategy Engagement":
        return "bg-cyan-100 text-cyan-800 border-cyan-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  // Get icon for department
  const getDepartmentIcon = (department: string) => {
    switch (department) {
      case "Software Technology":
        return <Code className="h-5 w-5 text-blue-600" />
      case "Infrastructure Technology":
        return <Database className="h-5 w-5 text-green-600" />
      case "Creative":
        return <Palette className="h-5 w-5 text-purple-600" />
      case "HR & Administration":
        return <Users className="h-5 w-5 text-amber-600" />
      case "Business Strategy Engagement":
        return <Briefcase className="h-5 w-5 text-cyan-600" />
      default:
        return <Info className="h-5 w-5 text-gray-600" />
    }
  }

  // Update the OrgChartNode component to improve the visualization
  const OrgChartNode = ({ node, level = 0 }: { node: Employee; level?: number }) => {
    const [isExpanded, setIsExpanded] = useState(level < 2)
    const hasChildren = node.children && node.children.length > 0

    const toggleExpand = (e: React.MouseEvent) => {
      e.stopPropagation()
      setIsExpanded(!isExpanded)
    }

    const handleNodeClick = () => {
      if (node.name !== "Technology Teams" && node.name !== "Oracle Team" && !node.name.includes("Team")) {
        handleOpenModal(node)
      }
    }

    // Determine if this is a department head
    const isDepartmentHead = level === 0
    // Determine if this is a main branch (Oracle Team or Technology Teams)
    const isMainBranch = level === 1
    // Determine if this is a sub-department
    const isSubDepartment = level === 2 || (level === 1 && node.subDepartment)
    // Determine if this is an employee
    // const isEmployee = level > 2 || (!hasChildren && level > 0)

    // Determine the width of the node based on its level
    const getNodeWidth = () => {
      if (isDepartmentHead) return "w-64"
      if (isMainBranch) return "w-56"
      if (isSubDepartment) return "w-48"
      return "w-40"
    }

    // Get background color based on node type
    const getNodeBackground = () => {
      if (isDepartmentHead) return "bg-gradient-to-r from-amber-100 to-amber-50 border-amber-200"
      if (isMainBranch) return "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200"
      if (isSubDepartment) return getDepartmentColor(node.department)
      return "bg-white border border-gray-200"
    }

    return (
      <div
        className={`flex flex-col items-center ${level === 0 ? "w-full" : ""}`}
        style={{ transform: `scale(${zoomLevel})`, transformOrigin: "top center" }}
      >
        <div
          className={`relative ${getNodeBackground()} rounded-lg ${isDepartmentHead ? "p-4" : isMainBranch ? "p-3" : "p-2"
            } shadow-sm ${getNodeWidth()} ${!isDepartmentHead ? "cursor-pointer hover:shadow-md transition-shadow" : ""}`}
          onClick={handleNodeClick}
        >
          <div className="flex flex-col items-center text-center">
            {node.image && isDepartmentHead && (
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-2 overflow-hidden">
                <Image
                  src={node.image || "/placeholder.svg"}
                  alt={node.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            )}
            <h3
              className={`font-semibold ${isDepartmentHead
                ? "text-lg text-navy-800"
                : isMainBranch
                  ? "text-md text-blue-800"
                  : isSubDepartment
                    ? "text-md"
                    : "text-sm"
                }`}
            >
              {node.name}
            </h3>
            <p className={`${isDepartmentHead ? "text-sm" : "text-xs"} text-gray-600 mt-1`}>{node.title}</p>

            {hasChildren && (
              <button
                onClick={toggleExpand}
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-full w-6 h-6 flex items-center justify-center shadow-sm hover:bg-gray-50"
              >
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-500" />
                )}
              </button>
            )}
          </div>
        </div>

        {hasChildren && isExpanded && (
          <div className={`mt-6 relative ${level === 0 || level === 1 ? "w-full" : ""}`}>
            {/* Vertical line from parent to children container */}
            <div className="absolute top-[-10px] left-1/2 w-0.5 h-6 bg-gray-300"></div>

            {/* Horizontal line above children */}
            {(node.children?.length ?? 0) > 1 && (
              <div
                className="absolute top-[-4px] bg-gray-300 h-0.5"
                style={{
                  left: `calc(${100 / ((node.children?.length ?? 1) * 2)}% - 1px)`,
                  right: `calc(${100 / ((node.children?.length ?? 1) * 2)}% - 1px)`,
                }}
              ></div>
            )}

            <div
              className={`flex flex-wrap ${level === 0 ? "justify-around" : "justify-center"
                } gap-6 ${level === 0 || level === 1 ? "px-4" : ""}`}
            >
              {(node.children ?? []).map((child) => (
                <div key={child.id} className="relative">
                  {/* Vertical line from horizontal line to child */}
                  {(node.children?.length ?? 1) > 1 && (
                    <div className="absolute top-[-10px] left-1/2 w-0.5 h-6 bg-gray-300 -translate-x-1/2"></div>
                  )}
                  <OrgChartNode node={child} level={level + 1} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-navy-800 transition-colors flex items-center"
              onClick={handleRedirectToDashboard}
              disabled={isLoading}
            >
              <ArrowLeft size={18} className="mr-2" />
              {isLoading ? "Redirecting..." : "Back to Dashboard"}
            </Button>
            <h1 className="text-xl font-semibold text-navy-900">Organizational Chart</h1>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
              <Button variant="ghost" size="sm" onClick={handleZoomOut} className="h-8 w-8 p-0">
                <ZoomOut size={16} />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleResetZoom} className="h-8 w-8 p-0">
                <RefreshCw size={16} />
              </Button>
              <Button variant="ghost" size="sm" onClick={handleZoomIn} className="h-8 w-8 p-0">
                <ZoomIn size={16} />
              </Button>
            </div>
            <Button variant="outline" className="flex items-center">
              <Download size={16} className="mr-2" />
              Export Chart
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">

        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
          <h3 className="text-sm font-semibold text-navy-800 mb-2">Chart Legend</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200 rounded mr-2"></div>
              <span className="text-xs text-gray-600">Department Head</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded mr-2"></div>
              <span className="text-xs text-gray-600">Main Branch</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-100 border border-blue-200 rounded mr-2"></div>
              <span className="text-xs text-gray-600">Software Teams</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-100 border border-green-200 rounded mr-2"></div>
              <span className="text-xs text-gray-600">Infrastructure Teams</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-100 border border-purple-200 rounded mr-2"></div>
              <span className="text-xs text-gray-600">Creative Teams</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-amber-100 border border-amber-200 rounded mr-2"></div>
              <span className="text-xs text-gray-600">HR & Admin Teams</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-cyan-100 border border-cyan-200 rounded mr-2"></div>
              <span className="text-xs text-gray-600">Business Teams</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-white border border-gray-200 rounded mr-2"></div>
              <span className="text-xs text-gray-600">Team Members</span>
            </div>
          </div>
        </div>
        {/* Department Tabs */}
        <Tabs defaultValue="software" className="w-full mb-8" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-gray-100 mb-6">
            <TabsTrigger value="software" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              <Code className="h-4 w-4 mr-2" />
              Software Technology
            </TabsTrigger>
            <TabsTrigger
              value="infrastructure"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-white"
            >
              <Database className="h-4 w-4 mr-2" />
              Infrastructure
            </TabsTrigger>
            <TabsTrigger value="creative" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              <Palette className="h-4 w-4 mr-2" />
              Creative
            </TabsTrigger>
            <TabsTrigger value="hr" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              <Users className="h-4 w-4 mr-2" />
              HR & Admin
            </TabsTrigger>
            <TabsTrigger value="business" className="data-[state=active]:bg-amber-500 data-[state=active]:text-white">
              <Briefcase className="h-4 w-4 mr-2" />
              Business Strategy
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="mt-0">
            <div className="bg-white p-6 rounded-lg shadow-sm overflow-auto">
              <div className="min-w-[1200px] min-h-[600px] flex justify-center">
                <OrgChartNode node={getDepartmentData()} />
              </div>
            </div>
          </TabsContent>
        </Tabs>
        {/* Department Info */}
        <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
          <h2 className="text-xl font-semibold text-navy-800 mb-4 flex items-center">
            {getDepartmentIcon(getDepartmentData().department)}
            <span className="ml-2">{getDepartmentData().department} Overview</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-navy-800 mb-2 flex items-center">
                  <UserPlus className="h-5 w-5 text-amber-600 mr-2" /> Department Head
                </h3>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-semibold text-gray-600">
                      {getDepartmentData()
                        .name.split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{getDepartmentData().name}</p>
                    <p className="text-sm text-gray-600">{getDepartmentData().title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-navy-800 mb-2 flex items-center">
                  <Users className="h-5 w-5 text-amber-600 mr-2" /> Team Size
                </h3>
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-amber-600 mr-3">
                    {activeTab === "software"
                      ? "101"
                      : activeTab === "infrastructure"
                        ? "18"
                        : activeTab === "creative"
                          ? "15"
                          : activeTab === "hr"
                            ? "12"
                            : "24"}
                  </div>
                  <p className="text-gray-600">team members</p>
                </div>
                <div className="mt-2 text-sm text-gray-600">Including department head and all sub-departments</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-navy-800 mb-2 flex items-center">
                  <Briefcase className="h-5 w-5 text-amber-600 mr-2" /> Sub-Departments
                </h3>
                <div className="flex items-center">
                  <div className="text-3xl font-bold text-amber-600 mr-3">
                    {activeTab === "software"
                      ? "8"
                      : activeTab === "infrastructure"
                        ? "4"
                        : activeTab === "creative"
                          ? "3"
                          : activeTab === "hr"
                            ? "3"
                            : "5"}
                  </div>
                  <p className="text-gray-600">specialized teams</p>
                </div>
                <div className="mt-2 text-sm text-gray-600">Click on nodes to see team member details</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedEmployee && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden"
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
                      <span className="text-xl font-semibold text-gray-600">
                        {selectedEmployee.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-navy-800">{selectedEmployee.name}</h3>
                      <p className="text-gray-600">{selectedEmployee.title}</p>
                      <Badge className={`mt-2 ${getDepartmentColor(selectedEmployee.department)}`}>
                        {selectedEmployee.department}
                      </Badge>
                      {selectedEmployee.subDepartment && (
                        <Badge className="ml-2 bg-gray-100 text-gray-800">{selectedEmployee.subDepartment}</Badge>
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
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Contact Information</h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-gray-800">
                          {selectedEmployee.name.toLowerCase().replace(/\s+/g, ".")}@atilimited.net
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-gray-400 mr-3" />
                        <span className="text-gray-800">+880 1XXXXXXXXX</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Department Information</h4>
                    <div className="space-y-2">
                      <div className="flex items-start">
                        <Briefcase className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                        <div>
                          <p className="text-gray-800">{selectedEmployee.department}</p>
                          {selectedEmployee.subDepartment && (
                            <p className="text-sm text-gray-600">{selectedEmployee.subDepartment}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Position Details</h4>
                    <Card className="bg-gray-50">
                      <CardContent className="p-4">
                        <p className="text-gray-700">{selectedEmployee.title}</p>
                        <p className="text-sm text-gray-600 mt-2">
                          Reports to:{" "}
                          {selectedEmployee.department === "Software Technology"
                            ? "Anisul Islam, Head of Software Technology"
                            : selectedEmployee.department === "Infrastructure Technology"
                              ? "Muhammad Mahedi Hasan, Head of Infrastructure & Database"
                              : selectedEmployee.department === "HR & Administration"
                                ? "Md. Mizan Hossain, Human Resource Management"
                                : selectedEmployee.department === "Business Strategy Engagement"
                                  ? "Abu Saleh, Head of Business Strategy Engagement"
                                  : "Department Head"}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
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
