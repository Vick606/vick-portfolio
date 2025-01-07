"use client"

import React from 'react'
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"

const certifications = [
  {
    courseName: 'Machine Learning Specialization',
    year: 2022,
    institution: 'Coursera',
    logo: 'https://example.com/coursera-logo.png',
    keyConcepts: ['Supervised Learning', 'Unsupervised Learning', 'Neural Networks']
  },
  {
    courseName: 'Data Science Professional Certificate',
    year: 2021,
    institution: 'edX',
    logo: 'https://example.com/edx-logo.png',
    keyConcepts: ['Data Wrangling', 'Data Visualization', 'Statistical Analysis']
  },
  {
    courseName: 'Deep Learning Specialization',
    year: 2023,
    institution: 'Coursera',
    logo: 'https://example.com/coursera-logo.png',
    keyConcepts: ['Convolutional Networks', 'Sequence Models', 'Generative Adversarial Networks']
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
      opacity: 1,
      y: 0,
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
                  <Image
                    src={cert.logo}
                    alt={`${cert.institution} logo`}
                    fill
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
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