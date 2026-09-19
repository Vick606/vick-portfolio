"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FaGoogle, FaKaggle, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import { SectionHeader } from "@/components/ui/section-header";
import { fadeUpItem, staggerContainer } from "@/lib/motion";

const certifications = [
  {
    courseName: 'Learn To Create AI Assistant (Jarvis) with Python',
    institution: 'Udemy',
    logo: <FaGraduationCap className="w-6 h-6 text-primary" />,
    keyConcepts: ['Artificial Intelligence', 'Python', 'Speech Recognition']
  },
  {
    courseName: 'Introduction to Generative AI',
    institution: 'Google',
    logo: <FaGoogle className="w-6 h-6 text-primary" />,
    keyConcepts: ['Generative AI', 'Machine Learning', 'Prompt Engineering']
  },
  {
    courseName: 'Generative AI for Developers',
    institution: 'Google',
    logo: <FaGoogle className="w-6 h-6 text-primary" />,
    keyConcepts: ['Transformer Models', 'Encoder-Decoder', 'Responsible AI']
  },
  {
    courseName: 'Machine Learning Engineering',
    institution: 'Google',
    logo: <FaGoogle className="w-6 h-6 text-primary" />,
    keyConcepts: ['Machine Learning', 'Google Cloud', 'BigQuery ML']
  },
  {
    courseName: 'Gen AI Intensive Course with Google',
    institution: 'Kaggle',
    logo: <FaKaggle className="w-6 h-6 text-primary" />,
    keyConcepts: ['Foundational LLMs', 'Prompt Engineering', 'MLOps']
  },
  {
    courseName: 'Python Bootcamp for Engineers and Scientists',
    institution: 'Udemy',
    logo: <FaGraduationCap className="w-6 h-6 text-primary" />,
    keyConcepts: ['Data Analysis', 'Modeling', 'Visualization']
  },
  {
    courseName: 'Introduction to Data Analytics',
    institution: 'IBM',
    logo: <FaLaptopCode className="w-6 h-6 text-primary" />,
    keyConcepts: ['Data Analysis', 'Excel', 'Data Visualization']
  },
  {
    courseName: 'Learn Ethical Hacking from Scratch',
    institution: 'Udemy',
    logo: <FaGraduationCap className="w-6 h-6 text-primary" />,
    keyConcepts: ['Cybersecurity', 'Networking', 'Ethical Hacking']
  },
  {
    courseName: 'Python Programming',
    institution: 'Udemy',
    logo: <FaGraduationCap className="w-6 h-6 text-primary" />,
    keyConcepts: ['OOP', 'Data Structures', 'Functions']
  }
];

export const CertificationsSection = () => {
  const containerVariants = staggerContainer(0.2, "beforeChildren");
  const itemVariants = fadeUpItem();

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Certifications"
          subtitle="Courses I&apos;ve completed across AI, data science and software development."
        />
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert) => (
            <motion.div key={cert.courseName} variants={itemVariants}>
              <Card className="h-full p-4 hover:shadow-lg transition-shadow group">
                <CardHeader className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {cert.logo}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{cert.courseName}</CardTitle>
                      <CardDescription className="text-sm">{cert.institution}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <h4 className="text-sm font-medium mb-2">Key Concepts:</h4>
                  <ul className="flex flex-wrap gap-2">
                    {cert.keyConcepts.map((concept) => (
                      <li key={concept} className="text-xs bg-secondary px-2 py-1 rounded-full">
                        {concept}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};