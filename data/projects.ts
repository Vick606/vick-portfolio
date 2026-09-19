import {
  BarChart3,
  Brain,
  GraduationCap,
  ListChecks,
  Network,
  Terminal,
  type LucideIcon,
} from "lucide-react";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  icon: LucideIcon;
  featured: boolean;
};

// Six curated projects. Featured work leads — it is what maps to the roles
// this site is aimed at. Every link points at a real, public repository.
export const projects: Project[] = [
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
];
