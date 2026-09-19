"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type SectionHeaderProps = {
  /** The heading text. */
  title: string;
  /**
   * Optional lead paragraph. Takes nodes rather than a string because
   * `services` and `projects` both put a link inside theirs.
   */
  subtitle?: ReactNode;
};

/**
 * The header block every section repeats: a centred h2, a short
 * primary-coloured rule, and an optional lead paragraph.
 */
export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="w-20 h-1 bg-primary mx-auto mb-6" />
      {subtitle ? (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
