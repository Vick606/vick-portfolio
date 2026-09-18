"use client";

import { motion } from "framer-motion";
import { Brain, Code, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// 24 skills down to 13. Percentages removed — when everything is rated 80-95%
// the bars carry no information. Ordering does the positioning instead: the
// first group is the differentiator, the rest is supporting range.
const skillGroups = [
  {
    name: "AI Training & Evaluation",
    icon: Brain,
    skills: [
      "Data Annotation",
      "Annotation Guidelines & Rubrics",
      "LLM Evaluation",
      "RLHF / Human Feedback",
      "Quality Assurance"
    ]
  },
  {
    name: "Python & Data",
    icon: Code,
    skills: [
      "Python",
      "pandas & NumPy",
      "SQL",
      "Data Cleaning & Validation"
    ]
  },
  {
    name: "Engineering & Tooling",
    icon: Wrench,
    skills: [
      "Git & GitHub",
      "Docker",
      "Automated Testing",
      "TypeScript & Next.js"
    ]
  }
];

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Grouped by what they are for. The first group is where my five years went.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.name}
              variants={itemVariants}
              className="bg-card rounded-lg p-6 border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 mb-5">
                <group.icon className="h-5 w-5 text-primary" />
                <h3 className="text-base font-semibold">{group.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
