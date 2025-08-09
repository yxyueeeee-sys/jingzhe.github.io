"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

// Education and honors data
const timelineData = [
  {
    year: "2022.09 - 至今",
    title: "浙江大学，计算机科学与技术学院，工业设计",
    description: "GPA: 4.49/5.0 (专业排名8/47)\n英语CET-6等级考试525分\n主修课程",
  },
  {
    year: "2025.07",
    title: "移动应用创新赛省一等奖",
    description: "中国高校计算机大赛-移动应用创新赛华东赛区一等奖",
  },
  {
    year: "2025.05",
    title: "挑战杯省赛金奖",
    description: "项目《See you agAln》获浙江省挑战杯大赛金奖",
  },
  {
    year: "2023.05",
    title: "省政府奖学金",
    description: "浙江省政府奖学金",
  },
  {
    year: "2022.12",
    title: "校三等奖学金",
    description: "浙江大学三等奖学金",
  },
  {
    year: "2022.11",
    title: "学业优秀标兵",
    description: "浙江大学学业优秀标兵",
  },
  {
    year: "2022.10",
    title: "优秀团员",
    description: "浙江大学优秀团员",
  },
  {
    year: "2022.09",
    title: "社团干事",
    description: "浙江大学学生社团指导中心人力资源部干事",
  },
]

// Skills data
const skillsData = [
  {
    category: "设计&原型",
    skills: [
      { name: "Figma", level: 90 },
      { name: "墨刀", level: 85 },
      { name: "PS", level: 80 },
    ],
  },
  {
    category: "AI工具",
    skills: [
      { name: "Midjourney", level: 85 },
      { name: "Stable Diffusion", level: 80 },
    ],
  },
  {
    category: "协作&文档",
    skills: [
      { name: "飞书", level: 90 },
      { name: "语雀", level: 85 },
      { name: "Notion", level: 80 },
    ],
  },
  {
    category: "3D&开发",
    skills: [
      { name: "Blender", level: 75 },
      { name: "Rhino", level: 80 },
      { name: "Unity3D", level: 70 },
      { name: "UE", level: 65 },
    ],
  },
]

export default function AboutSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)

  // Handle timeline scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Get all timeline items
            const items = document.querySelectorAll(".timeline-item")

            // Animate each item with delay
            items.forEach((item, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index])
              }, 200 * index)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current)
      }
    }
  }, [])

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">我的星图</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* About Me Column */}
        <div>
          <div className="flex items-center mb-8">
            <div className="relative">
              <img
                src="/images/profile-photo.png"
                alt="袁心悦"
                className="w-32 h-32 rounded-full object-cover border-2 border-primary"
              />
              <div className="absolute inset-0 rounded-full border-2 border-primary glow-border"></div>
            </div>
            <div className="ml-6">
              <h3 className="text-2xl font-bold">袁心悦</h3>
              <p className="text-foreground/80">产品经理 & 用户体验设计师</p>
              <p className="text-primary">浙江大学 · 工业设计</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">关于我</h3>
            <p className="text-foreground/90 leading-relaxed">
              我是一名充满创造力和技术洞察力的产品经理与用户体验设计师，专注于AI+设计领域的创新实践。
              擅长将复杂的技术概念转化为直观的用户体验，并善于在团队协作中发挥领导作用。
              我热衷于探索新兴技术如何重塑人机交互，并致力于创造既美观又实用的数字产品。
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">荣誉 & 经历</h3>
            <div ref={timelineRef} className="relative pl-8 border-l border-accent">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={cn("timeline-item mb-6 relative", visibleItems.includes(index) ? "visible" : "")}
                >
                  <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-card border-2 border-primary"></div>
                  <div className="text-sm text-primary mb-1">{item.year}</div>
                  <h4 className="text-lg font-medium mb-1">{item.title}</h4>
                  <div className="text-foreground/70 text-sm">
                    {item.description.split("\n").map((line, i) => (
                      <p key={i} className={i > 0 ? "mt-1" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Column */}
        <div>
          <h3 className="text-xl font-bold mb-6">技能矩阵</h3>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 gap-6 mb-8">
            {skillsData.map((category, index) => (
              <div key={index} className="glass-effect p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-primary">{category.category}</h4>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium">{skill.name}</span>
                        <span className="text-primary font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-3 bg-accent/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            boxShadow: "0 0 10px rgba(0, 255, 255, 0.5)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
