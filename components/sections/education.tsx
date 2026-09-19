"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { fadeUpItem, staggerContainer } from "@/lib/motion";

// Pulled out of the certifications grid, where the degree sat between two
// Udemy courses as item 10.
const education = [
  {
    degree: "Bachelor of Business Information Technology",
    institution: "Meru University",
    keyConcepts: ["Database Management", "System Analysis", "Business Applications"]
  }
];

export function EducationSection() {
  const containerVariants = staggerContainer(0.15);
  const itemVariants = fadeUpItem();

  return (
    <section id="education" className="py-20 scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="Education" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {education.map((entry) => (
            <motion.div key={entry.degree} variants={itemVariants}>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{entry.degree}</CardTitle>
                      <CardDescription className="text-sm">
                        {entry.institution}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                  <ul className="flex flex-wrap gap-2">
                    {entry.keyConcepts.map((concept) => (
                      <li key={concept}>
                        <Badge variant="secondary">{concept}</Badge>
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
}
