"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

// Portfolio project data
const projects = [
  {
    id: 1,
    title: "农业病虫害巡检机器狗",
    tags: ["AI应用", "UX/UI", "3D&开发"],
    image: "/images/ai-robot-dog.png",
    description: "基于AI视觉识别的农业病虫害自动巡检系统，提高农业生产效率。",
    role: "产品经理 & UX设计师",
    highlights: ["机器狗农田间自主导航", "机械臂交互设计", "数据可视化app"],
    gallery: [
      "/images/ai-robot-dog.png",
      "/images/robot-dog-dashboard.png",
      "/images/robot-dog-camera.jpeg",
      "/images/robot-dog-interfaces.jpeg",
    ],
    tools: ["Figma", "Python", "TensorFlow"],
  },
  {
    id: 2,
    title: "逆水寒流派风云馆",
    tags: ["服务设计"],
    image: "/images/nishuihan-popup.png",
    description: "为网易游戏《逆水寒》设计的线下快闪体验店，融合传统文化与现代科技。",
    role: "体验设计师",
    highlights: ["沉浸式空间设计", "AR互动装置", "传统文化元素融合"],
    gallery: ["/images/nishuihan-popup.png", "/images/nishuihan-floorplan.png", "/images/nishuihan-flowchart.png"],
    tools: ["Rhino", "AR开发", "3D建模"],
  },
  {
    id: 3,
    title: "数字红会App改造",
    tags: ["UX/UI"],
    image: "/images/digital-red-cross.png",
    description: "改造数字红会市民用户端小程序界面，根据数据分析用户使用路径，优化使用流程。",
    role: "UI/UX设计师",
    highlights: ["用户体验旅程优化", "信息架构重构", "无障碍设计"],
    gallery: [
      "/images/digital-red-cross.png",
      "/images/digital-red-cross-poster1.jpeg",
      "/images/digital-red-cross-poster2.jpeg",
      "/images/digital-red-cross-flow.jpeg",
      "/images/digital-red-cross-wireframe.png",
    ],
    tools: ["Figma", "墨刀", "Principle"],
  },
  {
    id: 4,
    title: "AIGC文化生成",
    tags: ["AI应用"],
    image: "/images/aigc-culture.png",
    description: "基于AIGC技术的中国传统文化艺术生成项目，探索AI与传统艺术的融合。",
    role: "AI产品设计师",
    highlights: ["AI视频工作流", "文化教育内容把控与微调", "用AI承载文化传播的使命"],
    gallery: ["/images/aigc-culture.png", "/images/aigc-culture-impact.png"],
    tools: ["Stable Diffusion", "Python", "React"],
  },
  {
    id: 6,
    title: "跃迈YoMat儿童智能运动地垫",
    tags: ["UX/UI", "产品设计"],
    image: "/images/yomat-yoga.jpeg",
    description: "智能瑜伽垫产品与配套应用设计，提供实时姿势纠正与个性化训练。",
    role: "产品经理 & UX设计师",
    highlights: ["硬件交互设计", "应用界面设计", "用户测试与迭代"],
    gallery: ["/images/yomat-yoga.jpeg", "/placeholder.svg?height=400&width=600"],
    tools: ["Figma", "Arduino", "Rhino"],
  },
  {
    id: 7,
    title: "遗珍归途RPG游戏demo",
    tags: ["UX/UI", "3D&开发"],
    image: "/images/heritage-journey-rpg.jpeg",
    description: "以中国文物保护为主题的RPG游戏Demo，融合教育与娱乐。",
    role: "游戏设计师 & UI设计师",
    highlights: ["游戏机制设计", "文化元素融合", "UI界面设计"],
    gallery: ["/images/heritage-journey-rpg.jpeg", "/images/heritage-journey-gameplay.png"],
    tools: ["Unity3D", "Blender", "Figma"],
  },
  {
    id: 8,
    title: "AI情绪识别小夜灯",
    tags: ["AI应用", "3D&开发"],
    image: "/images/emo-cloud-light.png",
    description: "能够感知用户情绪并相应改变灯光效果的智能小夜灯产品。",
    role: "产品设计师",
    highlights: ["情绪识别算法", "交互设计", "产品造型设计"],
    gallery: ["/images/emo-cloud-light.png", "/images/emo-cloud-light-demo.jpeg"],
    tools: ["Rhino", "Arduino", "Python"],
  },
  {
    id: 9,
    title: "健身房AI数字人",
    tags: ["AI应用", "UX/UI"],
    image: "/images/ai-fitness-coach.png",
    description: "为健身房设计的AI数字人教练，提供个性化训练指导与动作纠正。",
    role: "AI产品经理",
    highlights: ["动作识别算法", "数字人设计", "训练计划生成"],
    gallery: ["/images/ai-fitness-coach.png", "/images/ai-fitness-coach-chat.png", "/images/ai-fitness-coach-diet.png"],
    tools: ["Figma", "TensorFlow", "Unity3D"],
  },
  {
    id: 10,
    title: "城市步行友好度指南",
    tags: ["UX/UI"],
    image: "/images/citywalk-visualization.png",
    description: "基于城市步行数据的可视化项目，为城市规划提供决策支持。",
    role: "数据可视化设计师",
    highlights: ["数据分析", "交互式仪表盘", "城市热力图"],
    gallery: ["/images/citywalk-visualization.png", "/images/citywalk-analysis-1.png"],
    tools: ["D3.js", "Figma", "Python"],
  },
]

export default function PortfolioSection() {
  const [filter, setFilter] = useState("全部")
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  // Filter options
  const filterOptions = ["全部", "AI应用", "UX/UI", "服务设计", "3D&开发"]

  // Filter projects based on selected tag
  const filteredProjects = filter === "全部" ? projects : projects.filter((project) => project.tags.includes(filter))

  // Handle scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get all project cards
            const cards = document.querySelectorAll(".portfolio-card")

            // Animate each card with delay
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index])
              }, 100 * index)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [filter]) // Re-run when filter changes

  return (
    <section id="portfolio" ref={sectionRef} className="section-container">
      <h2 className="section-title">未来引力场：智见生活，体验重构</h2>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {filterOptions.map((option) => (
          <button
            key={option}
            onClick={() => {
              setFilter(option)
              setVisibleItems([])
            }}
            className={cn(
              "px-4 py-2 rounded-full transition-all duration-300",
              filter === option ? "bg-primary text-background glow-border" : "bg-card hover:bg-card/80",
            )}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className={cn(
              "portfolio-card bg-card rounded-lg overflow-hidden transition-all duration-500",
              visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            {/* Project card */}
            <div className="cursor-pointer relative" onClick={() => window.open(`/project/${project.id}`, "_blank")}>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-48 object-cover transition-all duration-300"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 rounded-full bg-accent text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
