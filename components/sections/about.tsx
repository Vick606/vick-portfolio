// components/sections/about.tsx
"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { 
  Brain, 
  Code2, 
  Database,
  GitBranch
} from "lucide-react"

const features = [
  {
    title: "AI & Machine Learning",
    description: "Expertise in developing and deploying machine learning models for real-world applications.",
    icon: Brain
  },
  {
    title: "Data Science",
    description: "Strong background in statistical analysis and data visualization for informed decision-making.",
    icon: Database
  },
  {
    title: "Software Development",
    description: "Proficient in building scalable applications with modern technologies and best practices.",
    icon: Code2
  },
  {
    title: "Version Control",
    description: "Experience with Git and collaborative development workflows in team environments.",
    icon: GitBranch
  }
]

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a passionate AI and Data Science professional with a strong foundation 
            in machine learning and software development. I love turning complex data 
            into meaningful insights and building innovative solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Background</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            With several years of experience in the field, I&apos;ve worked on diverse 
            projects ranging from predictive analytics to natural language processing. 
            My approach combines technical expertise with a strong focus on delivering 
            practical business value through data-driven solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}