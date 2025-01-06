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
    title: "Traffic Density Estimation Using YOLO V8n",
    description: "Developed traffic density estimation in real-time using YOLO V8n. Used libraries such as numpy, pandas, matplotlib, seaborn, cv2, PIL, and ultralytics.",
    image: "/images/projects/traffic-density.jpg",
    tags: ["YOLO V8n", "Computer Vision", "Real-Time Estimation"],
    github: "https://github.com/yourusername/traffic-density-estimation", // Placeholder link
    categories: ["Computer Vision", "Real-Time Processing"]
  },
  {
    title: "Temperature Change Analysis in Kenya, Uganda, and Tanzania",
    description: "Developed a classification model to analyze, visualize, and compare temperature changes in Kenya, Uganda, and Tanzania, using FAOSTAT Temperature Change dataset.",
    image: "/images/projects/temperature-change.jpg",
    tags: ["Temperature Analysis", "Climate Change", "Data Visualization"],
    github: "https://github.com/yourusername/temperature-change-analysis", // Placeholder link
    categories: ["Climate Change", "Data Analysis"]
  },
  {
    title: "Mental Health Data Exploration Competion on Kaggle",
    description: "Participated in Mental Health Data Exploration project on Kaggle, using Catboost, Random Forest, and Logistic Regression. Achieved 93% accuracy.",
    image: "/images/projects/mental-health-data.jpg",
    tags: ["Mental Health", "Catboost", "Random Forest", "Logistic Regression"],
    github: "https://github.com/yourusername/mental-health-data-exploration", // Placeholder link
    categories: ["Data Analysis", "Machine Learning"]
  },
  {
    title: "Sentiment Analysis of Tweets Using Sentiment140 Dataset",
    description: "Conducted sentiment analysis of tweets using Sentiment140 dataset (1.6 million tweets) with Logistic Regression, Random Forest, and SVM algorithms.",
    image: "/images/projects/sentiment-analysis.jpg", // Placeholder image
    tags: ["Sentiment Analysis", "NLP", "Logistic Regression", "Random Forest", "SVM"],
    github: "https://github.com/yourusername/sentiment-analysis-tweets", // Placeholder link
    categories: ["NLP", "Data Analysis"]
  },
  {
    title: "DDoS Detection Using Random Forest and Logistic Regression",
    description: "Developed, trained, and tested the effectiveness of Random Forest and Logistic Regression models in detecting DDoS using DDoS1-Tuesday-20-02-2018_TrafficForML_CICFlowMeter.parquet dataset.",
    image: "/images/projects/ddos-detection.jpg", // Placeholder image
    tags: ["DDoS Detection", "Random Forest", "Logistic Regression"],
    github: "https://github.com/yourusername/ddos-detection", // Placeholder link
    categories: ["Cybersecurity", "Machine Learning"]
  },
  {
    title: "Customer Preferences Analysis Using FordKa Dataset",
    description: "Conducted PCA, hierarchical clustering, and k-means to understand customer preferences in choosing and buying cars, using FordKa dataset.",
    image: "/images/projects/fordka-analysis.jpg", // Placeholder image
    tags: ["PCA", "Hierarchical Clustering", "K-Means"],
    github: "https://github.com/yourusername/fordka-analysis", // Placeholder link
    categories: ["Customer Analysis", "Data Analysis"]
  },
  {
    title: "JavaScript and Node.js Projects (Odin Project)",
    description: "Developed various projects as part of the JS and Node.js course at The Odin Project.",
    image: "/images/projects/odin-project.jpg", // Placeholder image
    tags: ["JavaScript", "Node.js", "The Odin Project"],
    github: "https://github.com/yourusername/javascript-node-odin", // Placeholder link
    categories: ["Web Development", "Software Development"]
  }
];

const categoryConfig = {
  "All": { priority: 1, description: "All projects" },
  "Machine Learning": { priority: 2, description: "Machine learning projects" },
  "Deep Learning": { priority: 3, description: "Neural networks and deep learning projects" },
  "Computer Vision": { priority: 4, description: "Image processing and computer vision projects" },
  "Data Analysis": { priority: 5, description: "Data exploration and visualization projects" },
  "NLP": { priority: 6, description: "Natural Language Processing projects" },
  "Software Development": { priority: 7, description: "Full-stack development projects" },
  "Climate Change": { priority: 8, description: "Climate change analysis projects" },
  "Cybersecurity": { priority: 9, description: "Cybersecurity projects" },
  "Customer Analysis": { priority: 10, description: "Customer preference analysis projects" },
  "Real-Time Processing": { priority: 11, description: "Real-time data processing projects" }
};

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