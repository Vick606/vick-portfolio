"use client";

import { motion } from "framer-motion";
import { Brain, Code, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";
import { fadeUpItem, staggerContainer } from "@/lib/motion";

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
  const containerVariants = staggerContainer(0.15);
  const itemVariants = fadeUpItem("easeOut");

  return (
    <section id="skills" className="py-20">
      <div className="container relative mx-auto px-4">
        <SectionHeader
          title="Skills"
          subtitle="Grouped by what they are for. The first group is where my five years went."
        />

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
