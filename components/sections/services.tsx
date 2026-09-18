"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gauge, Tags, Terminal } from "lucide-react";

// One card per target role. The previous two cards had href="#", which sent
// visitors nowhere — these all point at the contact section.
const services = [
  {
    title: "AI Training & Data Annotation",
    description:
      "Annotation guidelines, quality control and reviewer workflows for training data that holds up under audit.",
    icon: Tags,
  },
  {
    title: "LLM Evaluation",
    description:
      "Rubrics, evaluation harnesses and reproducible scoring — turning subjective judgement into something you can measure and re-run.",
    icon: Gauge,
  },
  {
    title: "Python Engineering",
    description:
      "Automation and tooling: pipelines, containerised test environments and structured reporting.",
    icon: Terminal,
  },
];

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="py-20">
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where I can help: building training data that holds up, making evaluation
            something you can actually measure, and writing the Python that keeps both
            running.{" "}
            <a href="#contact" className="text-primary">
              Let&apos;s work together.
            </a>
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Card className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  className="flex"
                >
                  <Button
                    variant="outline"
                    className="w-full h-full min-h-[200px] p-5 hover:bg-primary hover:text-primary-foreground text-base flex flex-col items-center justify-center gap-4"
                    asChild
                  >
                    <a href="#contact" className="text-center">
                      <service.icon className="h-8 w-8" />
                      <div>
                        <div className="font-medium text-lg">{service.title}</div>
                        <div className="text-sm text-muted-foreground break-words whitespace-normal">
                          {service.description}
                        </div>
                      </div>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
