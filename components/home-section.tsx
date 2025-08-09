"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import ParticleBackground from "./particle-background"

export default function HomeSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <ParticleBackground />

      <div
        className={`glass-effect p-8 md:p-12 rounded-lg max-w-2xl text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary glow-text mb-4">袁心悦</h1>
        <h2 className="text-xl md:text-2xl font-medium mb-4">
          <span className="typing-text inline-block">产品经理 | 用户体验设计师</span>
        </h2>
        <h3 className="text-lg md:text-xl text-foreground/80">浙江大学 · 工业设计</h3>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary">
        <a href="#portfolio" className="flex flex-col items-center">
          <span className="mb-2 text-sm">探索作品</span>
          <ChevronDown className="scroll-down" size={24} />
        </a>
      </div>
    </section>
  )
}
