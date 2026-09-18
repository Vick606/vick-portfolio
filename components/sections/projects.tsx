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
import {
  BarChart3,
  Brain,
  Github,
  GraduationCap,
  ListChecks,
  Network,
  Terminal,
  type LucideIcon,
} from "lucide-react"

type Project = {
  title: string
  description: string
  tags: string[]
  github: string
  icon: LucideIcon
  featured: boolean
}

// Six curated projects. Featured work leads — it is what maps to the roles
// this site is aimed at. Every link points at a real, public repository.
const projects: Project[] = [
  {
    title: "RepoProbe",
    description:
      "CLI that clones a Python repository at an exact commit, runs its test suite in an isolated Docker container, and returns a structured JSON report. It detects the test runner from the project's own configuration and emits a versioned schema, so results can be parsed, diffed and compared across runs.",
    tags: ["Python", "Docker", "CLI", "Test Automation"],
    github: "https://github.com/Vick606/repo-probe",
    icon: Terminal,
    featured: true,
  },
  {
    title: "opencohort",
    description:
      "Self-hosted course delivery for a group you already teach: markdown lessons, seat-limited invite codes, time-boxed access windows and per-student progress tracking. The scope is deliberately narrow — the README documents what it refuses to do.",
    tags: ["TypeScript", "Next.js", "Postgres", "Drizzle"],
    github: "https://github.com/Vick606/opencohort",
    icon: GraduationCap,
    featured: true,
  },
  {
    title: "Dsrocks Academy",
    description:
      "Interactive platform for practising data science through curated quizzes on general DS, Python and SQL.",
    tags: ["TypeScript", "Next.js", "Supabase"],
    github: "https://github.com/Vick606/dsrocks-academy",
    icon: Brain,
    featured: true,
  },
  {
    title: "Retail Sales Analytics",
    description:
      "Exploratory analysis of a retail dataset — customer demographics, product performance, payment methods and profitability drivers — translated into business recommendations.",
    tags: ["Python", "pandas", "seaborn", "plotly"],
    github: "https://github.com/Vick606/Retail-Sales-Analytics",
    icon: BarChart3,
    featured: false,
  },
  {
    title: "ChronoFlow",
    description:
      "Django task manager with a dark task-control UI: priorities, due dates, completion tracking and CSRF-protected forms.",
    tags: ["Python", "Django", "SQLite"],
    github: "https://github.com/Vick606/chronoflow-todo",
    icon: ListChecks,
    featured: false,
  },
  {
    title: "Handwritten Digit Classifier",
    description:
      "TensorFlow network classifying MNIST digits, with training curves and sample predictions.",
    tags: ["Python", "TensorFlow"],
    github: "https://github.com/Vick606/Handwritten-Digit-Classifier",
    icon: Network,
    featured: false,
  },
]

export function ProjectsSection() {
  const featured = projects.filter((project) => project.featured)
  const additional = projects.filter((project) => !project.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
          </p>
        </motion.div>

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
