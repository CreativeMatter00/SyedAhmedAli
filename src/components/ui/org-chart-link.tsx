"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Network } from "lucide-react"

interface OrgChartLinkProps {
  className?: string
  children?: React.ReactNode
}

export function OrgChartLink({ className, children }: OrgChartLinkProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push("/org-chart")
  }

  return (
    <Button onClick={handleClick} className={`flex items-center gap-2 ${className}`} variant="outline">
      <Network size={16} />
      {children || "View Org Chart"}
    </Button>
  )
}
