"use client"

import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { SectionHeader } from "@/components/ui/section-header"
import { fadeUp, fadeUpItem, staggerContainer } from "@/lib/motion"
import { projects } from "@/data/projects"

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured)
  const additional = projects.filter((project) => !project.featured)

  const containerVariants = staggerContainer(0.15, "beforeChildren")
  const itemVariants = fadeUpItem()

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Projects"
          subtitle={
            <>
              Six projects I would show you first — evaluation tooling, full-stack work
              and analysis. Everything else lives on{" "}
              <a
                href="https://github.com/Vick606"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                GitHub
              </a>
              .
            </>
          }
        />

        {/* Featured work */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {featured.map((project) => (
            <motion.div key={project.title} variants={itemVariants} className="h-full">
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </div>
                  <CardDescription className="leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional work */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto mt-14 mb-6"
        >
          <h3 className="text-lg font-semibold text-muted-foreground">
            Also worth a look
          </h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {additional.map((project) => (
            <motion.div key={project.title} variants={itemVariants} className="h-full">
              <Card className="h-full flex flex-col p-5 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <project.icon className="h-4 w-4 text-primary" />
                  <h4 className="font-semibold">{project.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
