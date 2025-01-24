"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Database,
  BarChart3,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Machine Learning",
    description: "Designing and deploying ML models for predictive analytics and intelligent decision-making.",
    icon: Brain
  },
  {
    title: "Data Science",
    description: "Transforming raw data into actionable insights to solve complex business problems.",
    icon: Database
  },
  {
    title: "Data Analytics",
    description: "Uncovering trends and patterns to drive business growth and operational efficiency.",
    icon: BarChart3
  },
  {
    title: "Workflow Automation",
    description: "Streamlining repetitive tasks and processes to save time and reduce errors.",
    icon: Zap
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
            I’m a data-driven technologist specializing in machine learning, data science, and workflow automation. 
            I turn complex data into actionable insights and build intelligent solutions that drive efficiency and growth.
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
            With expertise in machine learning, data science, and automation, I bring a unique blend of technical skills 
            and problem-solving abilities to every project. Whether it’s building predictive models, analyzing data, 
            or automating workflows, I deliver solutions that drive measurable results.
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Let’s Work Together</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}