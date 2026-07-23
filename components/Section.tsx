import { Reveal } from "./Reveal";

export function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-16 sm:py-20">
      <Reveal>
        <h2 className="mb-10 flex items-center gap-3 font-mono text-[13px] uppercase tracking-[0.2em] text-ink-dim">
          <span aria-hidden className="h-px w-5 bg-amber" />
          {label}
        </h2>
        {children}
      </Reveal>
    </section>
  );
}
