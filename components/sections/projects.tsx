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
import { Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Arabic Fake News Detection",
    description: "Used machine learning models to classify Arabic news articles as credible or non-credible.",
    image: "/images/projects/arabic-fake-news.jpg", // Replace with actual image path
    tags: ["Comparative Analysis", "Research", "NLP", "Machine Learning", "Deep Learning", "Exploratory Data Analysis"],
    github: "https://github.com/MoncefD/AI-DS-Masters",
    category: "NLP"
  },
  {
    title: "Car Sales Volume and Resale Price Prediction",
    description: "Evaluated and tuned machine learning models to predict car sales using features like price and size.",
    image: "/images/projects/car-sales.jpg", // Replace with actual image path
    tags: ["Comparative Analysis", "Hyperparameter Tuning", "Machine Learning", "Exploratory Data Analysis"],
    github: "https://github.com/MoncefD/AI-DS-Masters",
    category: "Machine Learning"
  },
  {
    title: "Exploring Autoencoder Architectures",
    description: "Developed multiple autoencoder architectures for tasks like image reconstruction and denoising.",
    image: "/images/projects/autoencoder.jpg", // Replace with actual image path
    tags: ["Machine Learning", "Deep Learning"],
    github: "https://github.com/MoncefD/AI-DS-Masters",
    category: "Deep Learning"
  },
  {
    title: "Sentence Auto-Complete with RNNs",
    description: "Built a sentence auto-complete system using recurrent neural networks (RNNs) with LSTM architecture.",
    image: "/images/projects/rnn.jpg", // Replace with actual image path
    tags: ["RNN", "NLP", "Machine Learning", "Deep Learning"],
    github: "https://github.com/MoncefD/AI-DS-Masters",
    category: "NLP"
  },
  {
    title: "Time Series Forecasting for Electricity Transformers",
    description: "Predicted oil temperature of electricity transformers using time series forecasting models.",
    image: "/images/projects/time-series.jpg", // Replace with actual image path
    tags: ["Time Series Forecasting", "Deep Learning", "Exploratory Data Analysis"],
    github: "https://github.com/MoncefD/AI-DS-Masters",
    category: "Time Series"
  },
  {
    title: "CNN for Ear Print Classification",
    description: "Developed a Convolutional Neural Network (CNN) for classifying ear prints.",
    image: "/images/projects/cnn.jpg", // Replace with actual image path
    tags: ["CNN", "Deep Learning", "Machine Learning"],
    github: "https://github.com/MoncefD/AI-DS-Masters",
    category: "Computer Vision"
  },
  {
    title: "MLP from Scratch for Fruit Classification",
    description: "Built a multi-layer perceptron (MLP) from scratch to classify apples and lemons.",
    image: "/images/projects/mlp.jpg", // Replace with actual image path
    tags: ["Artificial Neural Networks", "Deep Learning"],
    github: "https://github.com/MoncefD/AI-DS-Masters",
    category: "Deep Learning"
  },
  {
    title: "Blood Vessel Segmentation",
    description: "Evaluated logistic regression and GLMs for binary segmentation of retinal blood vessel pixels.",
    image: "/images/projects/blood-vessel.jpg", // Replace with actual image path
    tags: ["Comparative Analysis", "Machine Learning", "Image Processing"],
    github: "https://github.com/MoncefD/AI-DS-Masters",
    category: "Image Processing"
  },
  {
    title: "Image Processing Techniques: JPEG and Fourier Transforms",
    description: "Explored image compression and frequency filtering with JPEG and Fourier transforms.",
    image: "/images/projects/image-processing.jpg", // Replace with actual image path
    tags: ["Machine Learning", "Image Processing"],
    github: "https://github.com/MoncefD/AI-DS-Masters",
    category: "Image Processing"
  },
  {
    title: "AI Nexus Website",
    description: "Developed the official website for the AI Nexus Club.",
    image: "/images/projects/ai-nexus.jpg", // Replace with actual image path
    tags: ["Web Development", "Web Design"],
    github: "https://github.com/MoncefD/AIMex-website",
    category: "Web Development"
  },
  {
    title: "40 Tasks to Learn Image Manipulation",
    description: "A list of 40 tasks related to image processing.",
    image: "/images/projects/image-tasks.jpg", // Replace with actual image path
    tags: ["Machine Learning", "Image Processing"],
    github: "https://github.com/MoncefD/AI-DS-Masters",
    category: "Image Processing"
  },
  {
    title: "Exploring and Visualizing Algerian Forest Fire Data",
    description: "A mini-project focused on exploratory data analysis and visualization of Algerian forest fire data.",
    image: "/images/projects/forest-fire.jpg", // Replace with actual image path
    tags: ["Exploratory Data Analysis", "Machine Learning"],
    github: "https://github.com/MoncefD/AI-DS-Masters",
    category: "Data Analysis"
  },
  {
    title: "Product Stocking Optimization Desktop Application",
    description: "A desktop application for managing hazardous materials and optimizing product stocking.",
    image: "/images/projects/stocking-optimization.jpg", // Replace with actual image path
    tags: ["Software Development", "Research"],
    github: "https://github.com/MoncefD/AI-DS-Masters",
    category: "Software Development"
  }
]

const categories = ["All", "NLP", "Machine Learning", "Deep Learning", "Time Series", "Computer Vision", "Image Processing", "Web Development", "Data Analysis", "Software Development"]

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