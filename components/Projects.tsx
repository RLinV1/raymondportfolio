import { projects, minorProjects } from "@/data";
import { Section } from "./Section";
import { TechIcon } from "./TechIcon";

export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <ul>
        {projects.map((project) => (
          <li key={project.title} className="border-b border-line first:border-t">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group -mx-4 block px-4 py-8 transition-colors hover:bg-panel/60"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-medium text-ink transition-colors group-hover:text-amber">
                  {project.title}
                  <span
                    aria-hidden
                    className="ml-2 inline-block text-sm text-ink-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-amber"
                  >
                    ↗
                  </span>
                </h3>
                <p className="shrink-0 font-mono text-[13px] text-amber [font-variant-numeric:tabular-nums]">
                  {project.year}
                </p>
              </div>
              <p className="mt-3 max-w-[44rem] text-[15px] leading-relaxed text-ink-mid">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded border border-line bg-panel/60 px-2.5 py-1 font-mono text-[12px] text-ink-dim"
                  >
                    <TechIcon name={t} className="text-[14px] text-ink-mid" />
                    {t}
                  </li>
                ))}
              </ul>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <p className="mb-3 font-mono text-[13px] text-ink-dim">Earlier work</p>
        <ul className="flex flex-col gap-1.5">
          {minorProjects.map((project) => (
            <li key={project.title} className="text-[15px] text-ink-mid">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-cobalt underline decoration-cobalt/40 underline-offset-4 transition-colors hover:text-amber hover:decoration-amber"
              >
                {project.title}
              </a>
              <span className="text-ink-dim"> · {project.description}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
