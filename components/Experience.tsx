import { experience } from "@/data";
import { Section } from "./Section";
import { TechIcon } from "./TechIcon";

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="flex flex-col gap-14">
        {experience.map((job) => (
          <li
            key={job.company}
            className="grid gap-3 sm:grid-cols-[10rem_1fr] sm:gap-8"
          >
            <p className="font-mono text-[13px] leading-6 text-ink-dim [font-variant-numeric:tabular-nums]">
              {job.period}
            </p>
            <div>
              <h3 className="text-lg font-medium text-ink">
                {job.role}
                <span className="text-ink-dim"> · </span>
                <span className="text-ink-mid">{job.company}</span>
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-[15px] leading-relaxed text-ink-mid"
                  >
                    <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-ink-dim" />
                    {point}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <li
                    key={t}
                    className="inline-flex items-center gap-1.5 rounded border border-line bg-panel/60 px-2.5 py-1 font-mono text-[12px] text-ink-mid"
                  >
                    <TechIcon name={t} className="text-[14px] text-ink-dim" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
