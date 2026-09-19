import type { Easing, Variants } from "framer-motion";

/**
 * Shared motion primitives for the page sections.
 *
 * Every section animated its header, intro copy and outro with the same
 * fade-up, and every staggered grid used the same item variant. Those blocks
 * were copied into each file; they live here now.
 *
 * `hero.tsx` is deliberately not covered. It animates with `animate` rather
 * than `whileInView`, offsets horizontally instead of vertically, and drives a
 * scroll-linked parallax — its motion is genuinely different, not duplicated.
 */

/**
 * The fade-up used by section headers, intro copy and outros.
 *
 * Spread it, then add a `transition` where a delay is needed:
 *   <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
 */
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

/**
 * Item variant for a staggered grid.
 *
 * `ease` is a parameter rather than a shared constant because `skills.tsx`
 * set `easeOut` explicitly while the other sections left it to the library
 * default. Passing it through preserves that timing exactly instead of
 * silently normalising one section to match the rest.
 */
export const fadeUpItem = (ease?: Easing): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: ease ? { duration: 0.5, ease } : { duration: 0.5 },
  },
});

/**
 * Container variant for a staggered grid.
 *
 * `stagger` and `when` were the only two values any section actually varied.
 */
export const staggerContainer = (
  stagger: number,
  when?: "beforeChildren"
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: when
      ? { staggerChildren: stagger, when }
      : { staggerChildren: stagger },
  },
});
