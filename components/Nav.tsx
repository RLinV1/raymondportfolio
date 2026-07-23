import Link from "next/link";
import { navItems } from "@/data";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ground/85 backdrop-blur-sm">
      <nav className="mx-auto flex h-14 max-w-page items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium text-ink transition-colors hover:text-amber"
        >
          <span className="sm:hidden">
            r<span className="text-amber">.</span>lin
          </span>
          <span className="hidden sm:inline">
            raymond<span className="text-amber">.</span>lin
          </span>
        </Link>
        <ul className="flex items-center gap-2.5 sm:gap-7">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.link}
                className="relative font-mono text-[11px] text-ink-mid transition-colors after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-amber after:transition-transform after:duration-300 hover:text-amber hover:after:scale-x-100 sm:text-[13px]"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
