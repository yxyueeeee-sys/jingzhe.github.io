import { notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import ProjectDetail from "@/components/project-detail"
import CustomCursor from "@/components/custom-cursor"
import type { Metadata } from "next"

// Portfolio project data (same as in portfolio-section.tsx)
const projects = [
  {
    id: 1,
    title: "农业病虫害巡检机器狗",
    tags: ["AI应用", "UX/UI"],
    image: "/images/ai-robot-dog.png",
    description: "基于AI视觉识别的农业病虫害自动巡检系统，提高农业生产效率。",
    role: "产品流程制定，交互界面设计",
    highlights: ["机器狗农田间自主导航", "机械臂交互设计", "数据可视化app"],
    gallery: [
      "/images/ai-robot-dog.png",
      "/images/robot-dog-dashboard.png",
      "/images/robot-dog-camera.jpeg",
      "/images/robot-dog-interfaces.jpeg",
    ],
    tools: ["Figma", "Arduino", "TensorFlow"],
    overview:
      "这个项目旨在通过AI技术革新传统农业巡检方式，区别于现有的农业无人机和定点传感器，引入多条机器狗协助监测农田病虫害情况，并引入AI大模型提高病虫害检测的准确性和效率。在这个项目中，我用设计的办法解决了机器狗无法在农田导航的问题，实现自动巡检。其次，我对机械臂的交互控制形式进行思考，给出更为友好的交互界面。",
    challenges: [
      "复杂农田环境下机器狗的激光雷达无法识别路径",
      "机械臂操作的友好性与低门槛",
      "用户远程使用的逻辑与痛点",
    ],
    solutions: [
      "用户第一次手动让机器狗在田间走完所有的路径，将GPS数据存入云端生成巡检地图",
      "从镜头和机械臂手的两个维度去设计交互功能逻辑",
      "给予用户主支配地位，包括巡检任务确定、是否取样、是否听取AI意见等",
    ],
  },
  {
    id: 2,
    title: "逆水寒流派风云馆",
    tags: ["服务设计"],
    image: "/images/nishuihan-popup.png",
    description:
      "为网易手机端游戏《逆水寒》设计的流派风云馆线下快闪体验店，通过远程、近战、辅助体验馆以及AR互动装置与VR体验，让玩家身临其境感受逆水寒流派的魅力。",
    role: "空间动线设计，服务流程设计",
    highlights: ["沉浸式空间设计", "AR互动装置与游戏流程设计", "线上预约与线下排队并行"],
    gallery: ["/images/nishuihan-popup.png", "/images/nishuihan-floorplan.png", "/images/nishuihan-flowchart.png"],
    tools: ["blender", "Figma", "飞书"],
    overview:
      "为网易手机端游戏《逆水寒》设计的流派风云馆线下快闪体验店，通过空间设计和交互装置，让玩家沉浸在古风武侠的世界中，体验传统文化与现代游戏的完美融合。整体设计为参与活动集章兑换礼品，场馆共设3个展区——近战体验馆、远程体验馆、辅助体验馆。每五日轮换一次展区所展的流派内容。",
    challenges: ["如何在有限空间内打造沉浸式体验", "线下快闪店排队久秩序差", "玩法多样而不仅仅是售卖商品"],
    solutions: [
      "采用自由动线设计与沉浸式布境，辅以AR,VR设备",
      "开放线上预约与线下排队并行，同时排队区域有明晰的排队指示标",
      "有测力游戏，射箭游戏，你画我猜，coser互动，签名墙，AR流派体验以及VR沉浸式游览场景活动",
    ],
  },
  {
    id: 3,
    title: "数字红会App改造",
    tags: ["UX/UI"],
    image: "/images/digital-red-cross.png",
    description: "改造数字红会市民用户端小程序界面，根据数据分析用户使用路径，优化使用流程。",
    role: "前期数据调研分析，志愿服务部分界面优化",
    highlights: ["用户体验旅程优化", "信息架构重构"],
    gallery: [
      "/images/digital-red-cross.png",
      "/images/digital-red-cross-poster1.jpeg",
      "/images/digital-red-cross-poster2.jpeg",
      "/images/digital-red-cross-flow.jpeg",
      "/images/digital-red-cross-wireframe.png",
    ],
    tools: ["Figma", "墨刀", "ProtoPie"],
    overview:
      "将某地区数字红会小程序进行功能拆解，旨在提高用户使用体验，优化使用路径中没有必要的层次以及重新根据功能整合信息板块。对有歧义部分进行优化设计。通过用户体验设计，让公益服务更加便民高效。",
    challenges: ["重要功能埋藏太深，用户行为流失率过高", "功能架构混乱，相互冗杂", "部分页面过于相像造成歧义"],
    solutions: ["简化操作流程，将重要功能前置", "根据四大功能重整信息架构", "增加醒目标识与层次关系避免歧义"],
  },
  {
    id: 4,
    title: "AIGC文化生成",
    tags: ["AI应用"],
    image: "/images/aigc-culture.png",
    description: "基于AIGC技术的中国传统文化艺术生成项目，探索AI与传统艺术的融合。",
    role: "跑通从脚本到视频的AI视频工作流",
    highlights: ["AI视频工作流", "文化教育内容把控与微调", "用AI承载文化传播的使命"],
    gallery: ["/images/aigc-culture.png", "/images/aigc-culture-impact.png", "/placeholder.svg?height=400&width=600"],
    tools: ["Stable Diffusion", "Midjourney", "若干对话式大模型"],
    overview:
      "探索AI生成技术在中国传统文化艺术领域的应用，通过深度学习模型训练，实现传统绘画、书法、诗词等艺术形式的智能生成，为文化传承提供新的数字化路径。我们团队实现了央视杜甫诗视频制作、教育部微言教育学衔段系列视频、浙江大学2025年校庆视频，浙江大学老照片修复视频以及一系列校园节日海报制作。项目成果获得人民日报、教育部微言教育平台以及CCTV-10等主流媒体的报道与推广。",
    challenges: ["传统文化特征的数字化表达", "AI模型对文化内涵的理解", "生成内容的艺术性与准确性平衡"],
    solutions: ["构建高质量文化艺术数据集", "寻找适宜参数避免算法偏见", "建立多维度评估体系"],
  },
  {
    id: 6,
    title: "跃迈YoMat儿童智能运动地垫",
    tags: ["AI应用", "实体设计"],
    image: "/images/yomat-yoga.jpeg",
    description:
      "为肥胖儿童设计的无屏化智能运动地垫，AI根据儿童身体数据定制个性化运动任务，同时提供单人多人等多种游戏模式。",
    role: "硬件设计，交互设计，流程设计",
    highlights: ["无屏化健康管理", "个性化定制运动任务", "多种游戏模式"],
    gallery: ["/images/yomat-yoga.jpeg"],
    tools: ["飞书", "Arduino", "Rhino"],
    overview:
      "结合硬件传感器和移动应用的智能儿童运动地垫产品，通过身体数据检测和个性化训练计划，为肥胖儿童提供专业的运动计划制定，让居家体重管理更加科学有效。",
    challenges: ["与现有产品的区别性", "硬件交互的协调", "游戏化内容实现"],
    solutions: [
      "从用户自身出发，拥有个性化运动体验而非标准化运动训练",
      "通过声光与儿童进行交互",
      "推出双人对战模式，通过不同踩踏按键可以相互攻击对方血条",
    ],
  },
  {
    id: 7,
    title: "遗珍归途RPG游戏demo",
    tags: ["游戏设计", "3D&开发"],
    image: "/images/heritage-journey-rpg.jpeg",
    description: "以中国文物保护为主题的RPG游戏Demo，讲述主人公历经磨难，最后把失落的佛头带回故国的故事。",
    role: "主角与敌人交互设计与制作，游戏策划",
    highlights: ["游戏机制设计", "文化元素融合", "主角敌人交互设计"],
    gallery: ["/images/heritage-journey-rpg.jpeg", "/images/heritage-journey-gameplay.png"],
    tools: ["Unity3D", "Blender", "飞书"],
    overview:
      "以中国文物保护为主题的教育类RPG游戏，通过游戏化的方式让玩家了解文物保护的重要性，体验中华文化的博大精深。游戏融合了历史知识、解谜元素和角色扮演。",
    challenges: ["远程主角与近战敌人的体验平衡", "故事线的表达"],
    solutions: ["制作远程敌人，给予主角射击反馈", "考证史实书写故事"],
  },
  {
    id: 8,
    title: "AI情绪识别小夜灯",
    tags: ["AI应用", "3D&开发"],
    image: "/images/emo-cloud-light.png",
    description: "能够感知用户情绪并相应改变灯光效果的智能小夜灯产品。",
    role: "硬件开发，交互设计",
    highlights: ["AI接入实现情绪识别", "交互设计", "产品造型设计"],
    gallery: ["/images/emo-cloud-light.png", "/images/emo-cloud-light-demo.jpeg"],
    tools: ["ESP32", "AI Agent", "Python"],
    overview:
      "结合情绪识别技术的智能小夜灯，能够通过分析用户的语音、表情等信息，自动调节灯光颜色和亮度，为用户营造舒适的情感氛围，帮助情绪障碍用户更好地认识和感知自己的情绪，提升居住体验。",
    challenges: ["情绪识别的准确性", "隐私保护的考虑", "面向ADHD儿童情绪教育"],
    solutions: ["引入AI实现语音情绪识别以及表情识别算法", "本地化数据处理", "产品美观与简约并重"],
  },
  {
    id: 9,
    title: "健身房AI数字人",
    tags: ["AI应用", "交互设计"],
    image: "/images/ai-fitness-coach.png",
    description: "为健身房设计的AI数字人教练，提供个性化动作指导，饮食指导和课程咨询。",
    role: "AI产品全流程设计与开发",
    highlights: ["交互方式实现", "数字人设计", "AI Agent提示词工程"],
    gallery: ["/images/ai-fitness-coach.png", "/images/ai-fitness-coach-chat.png", "/images/ai-fitness-coach-diet.png"],
    tools: ["ComfyUI", "HTML", "Python"],
    overview:
      "为健身房打造的AI数字人教练系统，用户可以通过语音与数字人进行交互，提供个性化的训练指导和动作纠正建议，让健身更加科学高效。同时提供饮食建议、课程咨询等全方位健身服务，为用户提供24小时不间断的专业指导。",
    challenges: ["复杂动作的标准实现", "个性化训练方案生成", "数字人的角色代入"],
    solutions: ["建立预制动作数据库", "基于用户数据的智能训练计划算法", "AI agent提示词的高质量书写"],
  },
  {
    id: 10,
    title: "城市步行友好指南",
    tags: ["数据分析", "数据可视化"],
    image: "/images/citywalk-visualization.png",
    description: "基于城市步行数据的可视化项目，为城市citywalk爱好者提供可视化数据看板。",
    role: "数据分析，数据可视化设计",
    highlights: ["数据分析", "数据可视化设计"],
    gallery: [
      "/images/citywalk-visualization.png",
      "/images/citywalk-analysis-1.png",
      "/images/citywalk-analysis-2.png",
    ],
    tools: ["Tableau", "Figma"],
    overview:
      "基于城市步行数据的可视化分析项目，通过收集和分析市民的步行轨迹数据，为城市citywalk爱好者提供可视化数据看板，同时也为城市规划者提供科学的决策支持，优化城市空间布局和公共设施配置。",
    challenges: ["海量数据的处理与分析", "复杂信息的可视化表达", "多维度数据的关联分析"],
    solutions: ["构建高效的数据处理管道", "设计直观的可视化图表", "建立多层次的数据模型"],
  },
]

interface ProjectPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const projectId = Number.parseInt(params.id)
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    return {
      title: "项目未找到 | 袁心悦",
      description: "项目详情页面",
    }
  }

  return {
    title: `${project.title} | 袁心悦`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const projectId = Number.parseInt(params.id)
  const project = projects.find((p) => p.id === projectId)

  if (!project) {
    notFound()
  }

  return (
    <main className="relative min-h-screen">
      <CustomCursor />
      <Navbar />
      <ProjectDetail project={project} />
    </main>
  )
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}
