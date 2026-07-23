"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex h-8 w-8 items-center justify-center rounded border border-line text-ink-mid transition-colors hover:border-amber/40 hover:text-amber"
    >
      {mounted ? (
        resolvedTheme === "dark" ? (
          <FiSun size={14} />
        ) : (
          <FiMoon size={14} />
        )
      ) : (
        <span className="h-3.5 w-3.5" />
      )}
    </button>
  );
}
