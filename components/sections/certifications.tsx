"use client"

import React from 'react'
import { motion } from "framer-motion"

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
    <section id="certifications" className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Certifications</h2>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} className="bg-white p-6 shadow-lg rounded-lg" variants={itemVariants}>
              <img src={cert.logo} alt={`${cert.institution} logo`} className="w-16 h-16 mb-4"/>
              <h3 className="text-xl font-semibold">{cert.courseName}</h3>
              <p className="text-gray-600">{cert.institution} - {cert.year}</p>
              <h4 className="text-lg font-medium mt-4">Key Concepts:</h4>
              <ul className="list-disc pl-5">
                {cert.keyConcepts.map((concept, idx) => (
                  <li key={idx}>{concept}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
