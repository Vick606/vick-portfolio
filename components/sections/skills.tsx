"use client"

import { motion } from "framer-motion"
import { 
  Brain,
  Database, 
  Layout,
  Terminal,
  Book,
  Code 
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    name: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "CSS", level: 85 },
      { name: "HTML", level: 85 },
      { name: "SQL", level: 95 }
    ]
  },
  {
    name: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "Machine Learning", level: 95 },
      { name: "Deep Learning", level: 85 },
      { name: "Natural Language Processing", level: 80 },
      { name: "TensorFlow", level: 80 },
      { name: "Keras", level: 75 },
      { name: "SPSS", level: 80 } 
    ]
  },
  {
    name: "Data Science",
    icon: Database,
    skills: [
      { name: "Data Analytics", level: 95 },
      { name: "NumPy", level: 95 },
      { name: "Pandas", level: 90 },
      { name: "Matplotlib", level: 85 },
      { name: "Seaborn", level: 80 },
      { name: "Scikit-Learn", level: 85 },
      { name: "Matlab", level: 80 } 
    ]
  },
  {
    name: "Web Development",
    icon: Layout,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "React", level: 80 },
      { name: "Node.js", level: 75 },
      { name: "HTML/CSS", level: 85 }
    ]
  },
  {
    name: "Tools & Technologies",
    icon: Terminal,
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Power BI", level: 80 },
      { name: "Tableau", level: 85 },
      { name: "Excel", level: 90 },
      { name: "Visual Studio Code", level: 85 },
      { name: "Cisco Packet Tracer", level: 85 }
    ]
  },
  {
    name: "Research & Analysis",
    icon: Book,
    skills: [
      { name: "Quantitative Research", level: 95 },
      { name: "Qualitative Research", level: 90 },
      { name: "Predictive Analytics", level: 90 },
      { name: "Data Visualization", level: 95 }, 
      { name: "Statistical Analysis", level: 85 } 
    ]
  }
];

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3 
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
      <div className="container relative mx-auto px-4">
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
                    <Progress value={skill.level} className="h-2 green-progress" />
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