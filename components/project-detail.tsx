"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"

interface Project {
  id: number
  title: string
  tags: string[]
  image: string
  description: string
  role: string
  highlights: string[]
  gallery: string[]
  tools: string[]
  overview?: string
  challenges?: string[]
  solutions?: string[]
  results?: string[]
}

interface ProjectDetailProps {
  project: Project
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      window.location.href = "/#portfolio"
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-container">
        <div className="mb-8">
          <button
            onClick={handleBack}
            className="flex items-center text-primary hover:text-secondary transition-colors mb-6 group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            返回作品集
          </button>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-primary glow-text mb-4">{project.title}</h1>
          <p className="text-xl text-foreground/80 mb-6">{project.description}</p>

          <div className="glass-effect p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">我的工作</h3>
                <p className="text-foreground/90">{project.role}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">使用工具</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="text-sm px-2 py-1 rounded bg-accent/50 text-foreground">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">核心亮点</h3>
                <ul className="text-sm text-foreground/90">
                  {project.highlights.slice(0, 2).map((highlight, i) => (
                    <li key={i} className="mb-1">
                      • {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-12">
          <img
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-96 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImage(project.image)}
          />
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content - Takes up 3 columns */}
          <div className="lg:col-span-3 space-y-12">
            {/* Project Overview */}
            {project.overview && (
              <div className="glass-effect p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-primary mb-6">项目概述</h2>
                <p className="text-foreground/90 leading-relaxed text-lg">{project.overview}</p>
              </div>
            )}

            {/* Challenges & Solutions */}
            {project.challenges && project.solutions && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-effect p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-secondary mb-4">面临挑战</h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-secondary mr-2 mt-1">•</span>
                        <span className="text-foreground/90">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-effect p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-primary mb-4">解决方案</h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-foreground/90">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Gallery */}
            <div className="glass-effect p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-primary mb-6">项目展示</h2>
              <div className="grid grid-cols-1 gap-6">
                {project.gallery.map((image, i) => (
                  <img
                    key={i}
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} gallery ${i + 1}`}
                    className="w-full h-auto object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Takes up 1 column */}
          <div className="space-y-8">
            {/* All Highlights */}
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">核心亮点</h3>
              <ul className="space-y-3">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span className="text-foreground/90">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Used */}
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">技术工具</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-2 rounded-full bg-primary/20 text-primary border border-primary/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Info */}
            <div className="glass-effect p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">项目信息</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm text-foreground/70">我的角色</span>
                  <p className="text-foreground/90">{project.role}</p>
                </div>
                <div>
                  <span className="text-sm text-foreground/70">项目类型</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded bg-accent/50 text-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage || "/placeholder.svg"}
              alt="Project detail"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-background/50 rounded-full p-2 hover:bg-background/70 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
