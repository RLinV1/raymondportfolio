import { socials } from "@/data";
import { Section } from "./Section";

export function Footer() {
  return (
    <footer>
      <Section id="contact" label="Contact">
        <p className="max-w-[44rem] text-lg leading-relaxed text-ink-mid">
          Open to internship and new-grad opportunities. If you&apos;d like to
          talk about a role, a project, or anything I&apos;ve built, my inbox
          is open.
        </p>
        <a
          href="mailto:rlin7289@gmail.com"
          className="mt-6 inline-block text-2xl font-medium text-ink underline decoration-amber/50 underline-offset-8 transition-colors hover:text-amber sm:text-3xl"
        >
          rlin7289@gmail.com
        </a>
      </Section>

      <div className="flex flex-col items-start justify-between gap-3 border-t border-line py-8 sm:flex-row sm:items-center">
        <p className="font-mono text-[13px] text-ink-dim">
          © 2026 Raymond Lin
        </p>
        <ul className="flex gap-6">
          {socials.map((s) => (
            <li key={s.name}>
              <a
                href={s.link}
                target={s.link.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="font-mono text-[13px] text-ink-dim transition-colors hover:text-amber"
              >
                {s.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
