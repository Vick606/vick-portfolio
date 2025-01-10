"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Code2, 
  Database,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "AI & Machine Learning",
    description: "Building and deploying ML models for real-world applications.",
    icon: Brain
  },
  {
    title: "Data Science",
    description: "Transforming data into actionable insights for better decisions.",
    icon: Database
  },
  {
    title: "Software Development",
    description: "Creating scalable, modern applications with best practices.",
    icon: Code2
  },
  {
    title: "Data Analytics",
    description: "Uncovering insights to drive business growth and efficiency.",
    icon: BarChart3
  }
];

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I&apos;m a data-driven technologist specializing in data analytics, machine learning, 
            and software development. I turn complex data into actionable insights and build 
            innovative solutions that drive business growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Why Work With Me?</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
            With years of experience in data science, machine learning, and tech
            I bring a unique blend of technical expertise and business acumen to every project. 
            Whether it&apos;s building predictive models, analyzing data, or developing scalable 
            applications, I deliver solutions that drive results.
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Let&apos;s Work Together</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}