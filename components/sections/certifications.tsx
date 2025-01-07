"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { FaGoogle, FaKaggle, FaLaptopCode, FaGraduationCap } from 'react-icons/fa' // Using FaGraduationCap for Udemy

const certifications = [
  {
    courseName: 'Learn To Create AI Assistant (Jarvis) with Python',
    year: 2024,
    institution: 'Udemy',
    logo: <FaGraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />,
    keyConcepts: ['Artificial Intelligence', 'AI Assistant', 'Python', 'Speech Recognition']
  },
  {
    courseName: 'Introduction to Generative AI',
    year: 2024,
    institution: 'Google',
    logo: <FaGoogle className="w-16 h-16 text-primary mx-auto mb-4" />,
    keyConcepts: ['Generative AI', 'Machine Learning', 'Large Language Models', 'Prompt Engineering']
  },
  {
    courseName: 'Generative AI for Developers',
    year: 2024,
    institution: 'Google',
    logo: <FaGoogle className="w-16 h-16 text-primary mx-auto mb-4" />,
    keyConcepts: ['Attention Mechanism', 'Encoder-Decoder Architecture', 'Transformer Models', 'Responsible AI']
  },
  {
    courseName: 'Machine Learning Engineering',
    year: 2024,
    institution: 'Google',
    logo: <FaGoogle className="w-16 h-16 text-primary mx-auto mb-4" />,
    keyConcepts: ['Machine Learning', 'Google Cloud', 'Data for ML APIs', 'BigQuery ML']
  },
  {
    courseName: 'Gen AI Intensive Course with Google',
    year: 2024,
    institution: 'Kaggle',
    logo: <FaKaggle className="w-16 h-16 text-primary mx-auto mb-4" />,
    keyConcepts: ['Foundational LLMs', 'Prompt Engineering', 'Generative Agents', 'MLOps for Generative AI']
  },
  {
    courseName: 'Python Bootcamp for Engineers and Scientists',
    year: 2024,
    institution: 'Udemy',
    logo: <FaGraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />,
    keyConcepts: ['Statistical Data Analysis', 'Modeling', 'Visualization', 'Simulation']
  },
  {
    courseName: 'Introduction to Data Analytics',
    year: 2023,
    institution: 'IBM',
    logo: <FaLaptopCode className="w-16 h-16 text-primary mx-auto mb-4" />, // Placeholder icon for IBM
    keyConcepts: ['Data Analysis', 'Excel', 'Data Visualization', 'Data Science']
  },
  {
    courseName: 'Learn Ethical Hacking from Scratch',
    year: 2023,
    institution: 'Udemy',
    logo: <FaGraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />,
    keyConcepts: ['Cybersecurity', 'Networking', 'Ethical Hacking', 'Linux']
  },
  {
    courseName: 'Python Programming',
    year: 2021,
    institution: 'Udemy',
    logo: <FaGraduationCap className="w-16 h-16 text-primary mx-auto mb-4" />,
    keyConcepts: ['Object-Oriented Programming', 'Data Structures', 'Functions', 'Modules']
  },
  {
    courseName: 'Bachelor of Business Information Technology',
    year: 2016,
    institution: 'Meru University',
    logo: <FaLaptopCode className="w-16 h-16 text-primary mx-auto mb-4" />, // Placeholder icon
    keyConcepts: ['Database Management', 'Information Security', 'System Analysis', 'Business Applications']
  }
];

export const CertificationsSection = () => {
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
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} className="h-full" variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow overflow-hidden group">
                <div className="relative h-16 w-16 mb-4 mx-auto">
                  {cert.logo}
                </div>
                <CardHeader>
                  <CardTitle>{cert.courseName}</CardTitle>
                  <CardDescription>{cert.institution} - {cert.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="text-lg font-medium mt-4">Key Concepts:</h4>
                  <ul className="list-disc pl-5">
                    {cert.keyConcepts.map((concept, idx) => (
                      <li key={idx}>{concept}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}