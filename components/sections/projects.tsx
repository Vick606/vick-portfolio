// components/sections/projects.tsx
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"

// Replace with your actual project data
const projects = [
  {
    title: "AI-Powered Image Analysis",
    description: "Deep learning model for image classification and object detection using TensorFlow and OpenCV.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
    github: "https://github.com/yourusername/project1",
    notebook: "https://github.com/yourusername/project1/notebook.ipynb",
    category: "Computer Vision"
  },
  {
    title: "NLP Text Analysis Tool",
    description: "Natural Language Processing pipeline for sentiment analysis and text classification using BERT.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "PyTorch", "BERT", "NLP"],
    github: "https://github.com/yourusername/project2",
    notebook: "https://github.com/yourusername/project2/notebook.ipynb",
    category: "NLP"
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets using Plotly and Streamlit.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "Plotly", "Streamlit", "Data Viz"],
    github: "https://github.com/yourusername/project3",
    notebook: "https://github.com/yourusername/project3/notebook.ipynb",
    category: "Data Visualization"
  },
  {
    title: "Predictive Analytics Model",
    description: "Machine learning model for predicting customer behavior using scikit-learn.",
    image: "/api/placeholder/600/400",
    tags: ["Python", "scikit-learn", "Pandas", "ML"],
    github: "https://github.com/yourusername/project4",
    notebook: "https://github.com/yourusername/project4/notebook.ipynb",
    category: "Machine Learning"
  }
]

const categories = ["All", "Computer Vision", "NLP", "Data Visualization", "Machine Learning"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" ? true : project.category === selectedCategory
  )

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
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my portfolio of AI and data science projects, showcasing practical 
            applications of machine learning and data analysis.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                      asChild
                    >
                      <a href={project.notebook} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Notebook
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}