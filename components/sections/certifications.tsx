"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FaGoogle, FaKaggle, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

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
  },
  {
    courseName: 'Bachelor of Business Information Technology',
    institution: 'Meru University',
    logo: <FaLaptopCode className="w-6 h-6 text-primary" />,
    keyConcepts: ['Database Management', 'System Analysis', 'Business Apps']
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
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="certifications" className="py-20 relative"> {/* Added relative here */}
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of certifications and courses I've completed to enhance my skills in data science, machine learning, and software development.
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants}>
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
                    {cert.keyConcepts.map((concept, idx) => (
                      <li key={idx} className="text-xs bg-secondary px-2 py-1 rounded-full">
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