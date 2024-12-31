// components/sections/skills.tsx
"use client"

import { motion } from "framer-motion"
import { 
  Brain,
  Database, 
  Layout,
  Terminal,
  Book,
  Users,
  PenTool
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    name: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "Deep Learning", level: 85 },
      { name: "Natural Language Processing (NLP)", level: 60 },
      { name: "Computer Vision", level: 70 },
      { name: "Image Processing", level: 80 },
      { name: "Prompt Engineering", level: 75 } 
    ]
  },
  {
    name: "Data Science",
    icon: Database,
    skills: [
      { name: "Python (Pandas/NumPy)", level: 85 },
      { name: "Exploratory Data Analysis", level: 90 },
      { name: "Time Series Forecasting", level: 60 },
      { name: "Statistical Analysis", level: 85 },
      { name: "SQL", level: 60 }
    ]
  },
  {
    name: "Web Development",
    icon: Layout,
    skills: [
      { name: "React/Next.js", level: 60 },
      { name: "TypeScript", level: 60 },
      { name: "HTML/CSS", level: 85 },
      { name: "Tailwind CSS", level: 85 },
    ]
  },
  {
    name: "Tools & Technologies",
    icon: Terminal,
    skills: [
      { name: "Git/GitHub", level: 75 },
      { name: "Python Notebooks (Jupyter/Colab)", level: 85 },
      { name: "Large Language Models (LLMs)", level: 85 }, 
    ]
  },
  {
    name: "Research & Leadership",
    icon: Book,
    skills: [
      { name: "Research Methodology", level: 85 },
      { name: "Project Management", level: 65 },
      { name: "Event Coordination", level: 75 },
      { name: "Team Leadership", level: 70 }
    ]
  },
  {
    name: "Interpersonal Skills",
    icon: Users,
    skills: [
      { name: "Communication", level: 80 },
      { name: "Collaboration", level: 75 },
      { name: "Problem Solving", level: 90 },
      { name: "Adaptability", level: 85 }
    ]
  },
  {
    name: "Design & Creativity",
    icon: PenTool,
    skills: [
      { name: "UI/UX Design", level: 65 },
      { name: "Graphic Design", level: 65 },
      { name: "Prototyping", level: 65 }
    ]
  }
]

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3 // Stagger the animation of each card
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My technical expertise spans across AI, data science, and software development,
            with a focus on building practical solutions using cutting-edge technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-lg p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}