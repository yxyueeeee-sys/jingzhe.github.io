import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "项目详情 | 袁心悦",
  description: "袁心悦的项目详情页面",
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
