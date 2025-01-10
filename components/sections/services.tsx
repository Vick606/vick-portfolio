"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Paintbrush, Search } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and modern web applications using Next.js, React, and Tailwind CSS.",
    icon: Code,
    href: "#", // Add a link if needed
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces with a focus on accessibility and aesthetics.",
    icon: Paintbrush,
    href: "#", // Add a link if needed
  },
  {
    title: "SEO Optimization",
    description: "Improving website visibility and ranking on search engines through best practices.",
    icon: Search,
    href: "#", // Add a link if needed
  },
];

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
            I offer a range of services to help you build and grow your online presence. Let&apos;s create something amazing together!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Card className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex"
                >
                  <Button
                    variant="outline"
                    className="w-full h-48 p-4 hover:bg-primary hover:text-primary-foreground text-base flex flex-col items-center justify-center gap-4"
                    asChild
                  >
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center"
                    >
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