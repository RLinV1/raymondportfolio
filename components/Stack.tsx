import { stack } from "@/data";
import { Section } from "./Section";
import { TechIcon } from "./TechIcon";

const hueDot: Record<string, string> = {
  amber: "bg-amber",
  cobalt: "bg-cobalt",
  sage: "bg-sage",
};

const hueChip: Record<string, string> = {
  amber: "hover:border-amber/50 hover:text-amber",
  cobalt: "hover:border-cobalt/50 hover:text-cobalt",
  sage: "hover:border-sage/50 hover:text-sage",
};

export function Stack() {
  return (
    <Section id="stack" label="Stack">
      <div className="flex flex-col gap-10">
        {stack.map((group) => (
          <div key={group.label}>
            <h3 className="mb-4 flex items-center gap-2.5 font-mono text-[13px] text-ink-dim">
              <span
                aria-hidden
                className={`h-1.5 w-1.5 rounded-full ${hueDot[group.hue]}`}
              />
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className={`inline-flex items-center gap-1.5 rounded border border-line bg-panel/60 px-3 py-1.5 font-mono text-[13px] text-ink-mid transition-colors ${hueChip[group.hue]}`}
                >
                  <TechIcon name={item} className="text-[15px]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
