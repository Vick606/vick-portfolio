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
    categories: ["Computer Vision", "Deep Learning"]
  },
  {
    title: "Temperature Change Analysis in Kenya, Uganda, and Tanzania",
    description: "Developed a classification model to analyze, visualize, and compare temperature changes in Kenya, Uganda, and Tanzania, using FAOSTAT Temperature Change dataset.",
    image: "/images/projects/temperature-change.jpg",
    tags: ["Temperature Analysis", "Climate Change", "Data Visualization"],
    github: "https://github.com/yourusername/temperature-change-analysis", // Placeholder link
    categories: ["Climate Change", "Data Analysis", "Statistical Analysis"]
  },
  {
    title: "Mental Health Data Exploration Competition on Kaggle",
    description: "Participated in Mental Health Data Exploration project on Kaggle, using Catboost, Random Forest, and Logistic Regression. Achieved 93% accuracy.",
    image: "/images/projects/mental-health-data.jpg",
    tags: ["Mental Health", "Catboost", "Random Forest", "Logistic Regression"],
    github: "https://github.com/yourusername/mental-health-data-exploration", // Placeholder link
    categories: ["Data Analysis", "Machine Learning", "Statistical Analysis"]
  },
  {
    title: "Sentiment Analysis of Tweets Using Sentiment140 Dataset",
    description: "Conducted sentiment analysis of tweets using Sentiment140 dataset (1.6 million tweets) with Logistic Regression, Random Forest, and SVM algorithms.",
    image: "/images/projects/sentiment-analysis.jpg",
    tags: ["Sentiment Analysis", "NLP", "Logistic Regression", "Random Forest", "SVM"],
    github: "https://github.com/yourusername/sentiment-analysis-tweets", // Placeholder link
    categories: ["NLP", "Data Analysis", "Machine Learning", "Classification"]
  },
  {
    title: "DDoS Detection Using Random Forest and Logistic Regression",
    description: "Developed, trained, and tested the effectiveness of Random Forest and Logistic Regression models in detecting DDoS using DDoS1-Tuesday-20-02-2018_TrafficForML dataset.",
    image: "/images/projects/ddos-detection.jpg",
    tags: ["DDoS Detection", "Random Forest", "Logistic Regression"],
    github: "https://github.com/yourusername/ddos-detection", // Placeholder link
    categories: ["Cybersecurity", "Machine Learning", "Classification", "Networking"]
  },
  {
    title: "Customer Preferences Analysis",
    description: "Conducted PCA, Hierarchical Clustering, and K-means to understand customer preferences in choosing and buying cars.",
    image: "/images/projects/fordka-analysis.jpg",
    tags: ["PCA", "Hierarchical Clustering", "K-Means"],
    github: "https://github.com/yourusername/fordka-analysis", // Placeholder link
    categories: ["Data Analysis", "Machine Learning", "Statistical Analysis"]
  },
  {
    title: "JavaScript and Node.js Projects (Odin Project)",
    description: "Developed various projects as part of the JS and Node.js course at The Odin Project.",
    image: "/images/projects/odin-project.jpg",
    tags: ["JavaScript", "Node.js", "The Odin Project"],
    github: "https://github.com/yourusername/javascript-node-odin", // Placeholder link
    categories: ["Software Development"]
  },
  {
    title: "Housing Dataset Analysis",
    description: "Analyzed housing dataset to understand customer preferences using PCA, Hierarchical Clustering, and K-Means.",
    image: "/images/projects/housing-dataset-analysis.jpg",
    tags: ["PCA", "Hierarchical Clustering", "K-Means"],
    github: "https://github.com/yourusername/housing-dataset-analysis", // Placeholder link
    categories: ["Data Analysis", "Machine Learning", "Statistical Analysis"]
  },
  {
    title: "XYZ Airlines Customer Clustering",
    description: "Clustered and categorized customers using PCA, Hierarchical Clustering, and K-Means on the EastWestAirlines dataset.",
    image: "/images/projects/eastwestairlines-clustering.jpg",
    tags: ["PCA", "Hierarchical Clustering", "K-Means"],
    github: "https://github.com/yourusername/eastwestairlines-clustering", // Placeholder link
    categories: ["Data Analysis", "Machine Learning"]
  },
  {
    title: "Tesla Stock Prediction with Stacked-LSTM",
    description: "Developed, trained, and evaluated a stacked-LSTM model to predict Tesla stocks using NumPy, Matplotlib, TensorFlow, Keras, and LSTM.",
    image: "/images/projects/tesla-stock-prediction.jpg",
    tags: ["NumPy", "Matplotlib", "TensorFlow", "Keras", "LSTM"],
    github: "https://github.com/yourusername/tesla-stock-prediction", // Placeholder link
    categories: ["Deep Learning", "Machine Learning"]
  },
  {
    title: "Mushroom Classification Using Machine Learning",
    description: "This project involved classifying mushrooms into edible and poisonous categories using various machine learning algorithms, including Support Vector Machine and Artificial Neural Networks.",
    image: "/images/projects/mushroom-classification.jpg",
    tags: ["Logistic Regression", "Random Forest", "SVM", "ANN"],
    github: "https://github.com/yourusername/mushroom-classification", // Placeholder link
    categories: ["Classification", "Machine Learning", "Deep Learning"]
  },
  {
    title: "SEED Labs - Morris Attack Simulation",
    description: "Simulated and analyzed the Morris worm, focusing on buffer overflow, self-duplication, and network propagation using nano and mini-internet setups.",
    image: "/images/projects/morris-attack-simulation.jpg",
    tags: ["Morris Worm", "Network Security", "Emulation"],
    github: "https://github.com/yourusername/morris-attack-simulation", // Placeholder link
    categories: ["Cybersecurity", "Simulation", "Networking"]
  },
  {
    title: "Configured a VLAN in 4 Floors using Cisco Packet Tracer",
    description: "Configured VLANs across 4 floors with different departments, utilizing Cisco Packet Tracer for network simulation and communication.",
    image: "/images/projects/vlan-configuration.jpg", 
    tags: ["VLAN", "Cisco Packet Tracer", "Network Configuration"],
    github: "https://github.com/yourusername/vlan-configuration", // Placeholder link
    categories: ["Networking", "Simulation", "Cybersecurity"]
  },
  {
    title: "SPSS Analysis on Gender Difference in Prescription Medication Use",
    description: "Analyzed gender differences in prescription medication use for mental health using SPSS with statistical tests and ANOVA.",
    image: "/images/projects/spss-analysis.jpg",
    tags: ["SPSS", "Statistical Analysis", "Mental Health"],
    github: "https://github.com/yourusername/spss-analysis", // Placeholder link
    categories: ["Data Analysis", "Statistical Analysis"]
  },
  {
    title: "MATLAB Simulations for Thermal Fluid Optimization",
    description: "Conducted MATLAB simulations to test and optimize theorems for thermal fluid dynamics, improving performance and efficiency.",
    image: "/images/projects/thermal-fluid-optimization.jpg", 
    tags: ["MATLAB", "Thermal Fluid Dynamics", "Optimization"],
    github: "https://github.com/yourusername/thermal-fluid-optimization", // Placeholder link
    categories: ["Simulation"]
  },
  {
    title: "Library Database Development Using SQL",
    description: "Developed and executed complex queries on a library database, including author displays, subject publishers, and overdue book costs.",
    image: "/images/projects/library-database.jpg",
    tags: ["SQL", "Database Development", "Queries"],
    github: "https://github.com/yourusername/library-database", // Placeholder link
    categories: ["SQL", "Software Development"]
  },
  {
    title: "Library Database System Development Using SQL",
    description: "Created ER diagrams, executed queries, and ensured functionality in a library database system using SQL.",
    image: "/images/projects/library-system.jpg",
    tags: ["SQL", "ER Diagram", "Database System"],
    github: "https://github.com/yourusername/library-system", // Placeholder link
    categories: ["SQL", "Software Development"]
  },
  {
    title: "Loan Prediction Model Development",
    description: "Developed a loan prediction model using ML algorithms like Logistic Regression, Decision Tree, SVM, KNN, and Random Forest to optimize the loan approval process.",
    image: "/images/projects/loan-prediction.jpg", 
    tags: ["Loan Prediction", "ML Algorithms", "Optimization"],
    github: "https://github.com/yourusername/loan-prediction", // Placeholder link
    categories: ["Machine Learning", "Classification"]
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
  "Classification": { priority: 10, description: "Classification projects" },
  "SQL": { priority: 11, description: "SQL projects" },
  "Simulation": { priority: 12, description: "Simulation projects" },
  "Networking": { priority: 13, description: "Networking projects" },
  "Statistical Analysis": { priority: 14, description: "Statistical analysis projects" }
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
      opacity: 1, y: 0,
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
            Explore my portfolio of recent projects, showcasing practical 
            applications of ML and data analysis. Click on a category to filter projects. 
            Need help with a similar project? <a href="#contact" className="text-primary">Get in touch</a>.
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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