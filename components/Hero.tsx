import Link from "next/link";
import { hero, socials } from "@/data";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative pb-16 pt-36 sm:pb-20 sm:pt-44">
      <div
        aria-hidden
        className="hero-wash pointer-events-none absolute left-1/2 top-0 h-full w-screen -translate-x-1/2"
      />
      <div className="relative">
        <Reveal>
          <p className="mb-5 font-mono text-[13px] uppercase tracking-[0.2em] text-amber">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-ink [text-wrap:balance] sm:text-5xl">
            {hero.name}
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 max-w-[44rem] text-lg leading-relaxed text-ink sm:text-xl">
            {hero.lede}
          </p>
          <p className="mt-4 max-w-[44rem] leading-relaxed text-ink-mid">
            {hero.bio}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-8 font-mono text-[13px] leading-relaxed text-ink-dim">
            <span className="mr-2 select-none text-amber">$</span>
            <span className="text-ink-mid">{hero.status}</span>
          </p>
          <p className="caret mt-2 font-mono text-[13px] leading-relaxed text-ink-dim">
            <span className="mr-2 select-none text-sage">~</span>
            <span className="text-ink-mid">{hero.now}</span>
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/experience"
              className="group inline-flex items-center gap-2.5 rounded-lg border border-amber/40 bg-amber/10 px-6 py-3 text-base font-medium text-ink transition-colors hover:border-amber hover:bg-amber/15 hover:text-amber"
            >
              View experience
              <span
                aria-hidden
                className="inline-block text-lg transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-2">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.link}
                  target={s.link.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="font-mono text-sm text-cobalt underline decoration-cobalt/40 underline-offset-4 transition-colors hover:text-amber hover:decoration-amber"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
