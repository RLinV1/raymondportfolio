import { building } from "@/data";
import { Reveal } from "./Reveal";
import { TechIcon } from "./TechIcon";

export function NowBuilding() {
  if (building.length === 0) return null;

  return (
    <section className="border-t border-line py-16 sm:py-20">
      <Reveal>
        <div className="mb-8 flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.2em] text-amber">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
          </span>
          Currently working on
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {building.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col rounded-xl border border-line bg-panel/50 p-6 transition-colors hover:border-amber/40 hover:bg-panel/70"
            >
              <h3 className="text-2xl font-semibold text-ink">{item.title}</h3>

              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-mid">
                {item.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <li
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded border border-line bg-ground/60 px-2.5 py-1 font-mono text-[12px] text-ink-dim"
                  >
                    <TechIcon name={t} className="text-[14px] text-ink-mid" />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-x-12 gap-y-2 font-mono text-[13px]">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-cobalt underline decoration-cobalt/40 underline-offset-4 transition-colors hover:text-amber hover:decoration-amber"
                >
                  Live site
                  <span aria-hidden>↗</span>
                </a>
                {item.repo && (
                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-cobalt underline decoration-cobalt/40 underline-offset-4 transition-colors hover:text-amber hover:decoration-amber"
                  >
                    GitHub
                    <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
