import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Renders inside the root layout, so it inherits the header, the theme toggle
// and the skip link for free — no need to re-import fonts or globals.css.
//
// This is a Server Component, so it uses `buttonVariants()` on a `Link` rather
// than the `Button` component. `Button` pulls in `@radix-ui/react-slot` (for
// `asChild`) and the Slot dist reaches for `useComposedRefs`; styling the link
// directly keeps the same design-system classes with none of that surface. It
// is also the canonical shadcn pattern for a link that looks like a button.
//
// Two documented limits worth recording:
//   - `not-found.tsx` cannot export `metadata`; only the experimental
//     `global-not-found.tsx` can. So the browser tab keeps the site title on a
//     404. Fixing that properly means opting into an experimental flag and
//     re-importing fonts + theme by hand, which is not worth it for a
//     single-page site.
//   - Next.js injects `<meta name="robots" content="noindex">` automatically on
//     anything returning a 404 status, so this page cannot be indexed. Nothing
//     to add here.
export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center justify-center px-4 pt-16">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">
          This page doesn&apos;t exist
        </h1>
        <p className="mx-auto mt-4 max-w-md text-muted-foreground">
          The link may be out of date, or the address may have a typo.
        </p>
        <Link href="/" className={cn(buttonVariants(), 'mt-8')}>
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
