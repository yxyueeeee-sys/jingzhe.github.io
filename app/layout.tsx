import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_SC, Roboto_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-noto-sans",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto-mono",
})

export const metadata: Metadata = {
  title: "袁心悦 | 产品经理 & 用户体验设计师",
  description: "袁心悦的个人作品集网站，展示AI+设计领域的实践经验与潜力",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={`${notoSansSC.variable} ${robotoMono.variable} font-sans bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
