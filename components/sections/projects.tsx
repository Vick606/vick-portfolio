"use client"

import { useState, useMemo } from "react"
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
import { Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Machine Learning Loan Prediction Model",
    description: "Developed a Machine Learning Loan Prediction Model to automate and optimize loan approval process using Logistic Regression, Decision Tree, Support Vector Machine (SVM), K-Nearest Neighbour (KNN), and Random Forest Algorithms.",
    image: "/images/projects/loan-prediction.jpg", // Placeholder image
    tags: ["Logistic Regression", "Decision Tree", "SVM", "KNN", "Random Forest"],
    github: "https://github.com/yourusername/loan-prediction", // Placeholder link
    categories: ["Machine Learning", "Data Analysis"]
  },
  {
    title: "JavaScript and Node.js Projects",
    description: "Developed various JavaScript and Node.js projects guided by The Odin Project.",
    image: "/images/projects/javascript-node.jpg", // Placeholder image
    tags: ["JavaScript", "Node.js"],
    github: "https://github.com/yourusername/javascript-node-projects", // Placeholder link
    categories: ["Web Development", "Software Development"]
  },
  {
    title: "AI Chatbot",
    description: "Developed an AI chatbot using Python and TensorFlow. Implemented natural language processing and machine learning algorithms.",
    image: "/images/projects/ai-chatbot.jpg", // Placeholder image
    tags: ["Python", "TensorFlow", "NLP"],
    github: "https://github.com/yourusername/ai-chatbot", // Placeholder link
    categories: ["AI", "Machine Learning", "NLP"]
  },
  {
    title: "Data Visualization Dashboard",
    description: "Created an interactive data visualization dashboard using D3.js and React. Visualized real-time data streams and analytics.",
    image: "/images/projects/data-visualization.jpg", // Placeholder image
    tags: ["Data Visualization", "D3.js", "React"],
    github: "https://github.com/yourusername/data-visualization-dashboard", // Placeholder link
    categories: ["Data Analysis", "Web Development"]
  },
  {
    title: "Predictive Analytics for Sales",
    description: "Built predictive models to forecast sales performance and optimize inventory management.",
    image: "/images/projects/sales-prediction.jpg", // Placeholder image
    tags: ["Predictive Analytics", "Machine Learning"],
    github: "https://github.com/yourusername/sales-prediction", // Placeholder link
    categories: ["Machine Learning", "Data Analysis"]
  }
]

const categoryConfig = {
  "All": { priority: 1, description: "All projects" },
  "Machine Learning": { priority: 2, description: "Machine learning projects" },
  "Deep Learning": { priority: 3, description: "Neural networks and deep learning projects" },
  "Computer Vision": { priority: 4, description: "Image processing and computer vision projects" },
  "Data Analysis": { priority: 5, description: "Data exploration and visualization projects" },
  "NLP": { priority: 6, description: "Natural Language Processing projects" },
  "Software Development": { priority: 7, description: "Full-stack development projects" },
}

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = useMemo(() => {
    const counts: { [key: string]: number } = { "All": projects.length }
    projects.forEach(project => {
      project.categories.forEach(category => {
        counts[category] = (counts[category] || 0) + 1
      })
    })

    return Object.entries(categoryConfig)
      .sort((a, b) => a[1].priority - b[1].priority)
      .map(([category, config]) => ({
        name: category,
        count: counts[category] || 0,
        ...config
      }))
  }, [])

  const filteredProjects = useMemo(() => 
    projects.filter(project => 
      selectedCategory === "All" ? true : project.categories.includes(selectedCategory)
    ),
    [selectedCategory]
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
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

          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(({ name, count }) => (
              <Button
                key={name}
                variant={selectedCategory === name ? "default" : "outline"}
                onClick={() => setSelectedCategory(name)}
                className="rounded-full"
              >
                {name} <span className="ml-2 text-xs opacity-70">({count})</span>
              </Button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map((category, catIndex) => (
                      <Badge 
                        key={catIndex} 
                        variant="secondary"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline">
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