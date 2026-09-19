"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  ClipboardCheck,
  FileCheck,
  Repeat,
  Wrench
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { fadeUp, fadeUpItem, staggerContainer } from "@/lib/motion";

// How the work gets done. These replace the previous ML / Data Science /
// Analytics / Automation cards, which duplicated the Services section.
const principles = [
  {
    title: "Reproducible over repeatable",
    description: "A result you cannot re-run is not a result. Same input, same output, every time.",
    icon: Repeat
  },
  {
    title: "Rubrics before labels",
    description: "Guidelines and edge cases get written down first, so annotators agree and reviewers have something to check against.",
    icon: ClipboardCheck
  },
  {
    title: "Evidence, not assertions",
    description: "Structured reports and versioned schemas, so a claim about quality can still be audited months later.",
    icon: FileCheck
  },
  {
    title: "Tooling that outlives the task",
    description: "If a process will run twice, it becomes a script. Manual work does not scale and does not survive handover.",
    icon: Wrench
  }
];

export function AboutSection() {
  const containerVariants = staggerContainer(0.15);
  const itemVariants = fadeUpItem();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="About" />

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-14 space-y-4 text-muted-foreground"
        >
          <p className="text-lg font-medium text-foreground">
            Five years in AI training, data annotation and Python.
          </p>
          <p>
            I have worked on the data side of AI — labelling, evaluating and improving
            model output — and I build the Python tooling that makes that work
            reproducible. The problems I care about sit underneath the spreadsheet: how
            to make an evaluation repeatable, how to prove a result, how to turn a
            manual process into a pipeline. RepoProbe is that instinct applied to code.
          </p>
          <p>
            Open to remote roles in AI training, LLM evaluation and Python engineering.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {principles.map((principle) => (
            <motion.div key={principle.title} variants={itemVariants}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <principle.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{principle.title}</h3>
                    <p className="text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold mb-4">Why work with me?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Most people in this space can either label data or build the pipeline. I have
            spent five years doing the first, and I build the second. That combination is
            the whole pitch.
          </p>
          <Button size="lg" asChild>
            <a href="#contact">Let&apos;s work together</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
